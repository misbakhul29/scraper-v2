import { SCRAPER_CONFIG } from '../lib/scraper.const';
import { browserService } from './browser.service';

export class AiScraperService {

  public async generateContent(prompt: string): Promise<string> {
    console.log('[AiScraper] Starting content generation task...');
    
    try {
      const page = await browserService.getMainPage();
      console.log('[AiScraper] Attached to main page.');

      if (!page.url().includes(SCRAPER_CONFIG.WEB_URL)) {
        console.log(`[AiScraper] Navigating to target URL: ${SCRAPER_CONFIG.WEB_URL}`);
        await page.goto(SCRAPER_CONFIG.WEB_URL, { waitUntil: 'networkidle2' });
      }

      const newChatBtn = await page.$(SCRAPER_CONFIG.NEW_CHAT_BTN_SELECTOR);
      if (newChatBtn) {
        console.log('[AiScraper] Clicking "New Chat" button...');
        await newChatBtn.click();
        await new Promise(r => setTimeout(r, 1000));
      } else {
        console.log('[AiScraper] "New Chat" button not found. Reloading page...');
        await page.reload({ waitUntil: 'networkidle2' });
      }

      const editorSelector = SCRAPER_CONFIG.PROMPT_INPUT_SELECTOR;
      console.log('[AiScraper] Waiting for input field...');
      await page.waitForSelector(editorSelector, { timeout: 10000 });
      
      console.log('[AiScraper] Pasting prompt...');
      
      await page.focus(editorSelector);
      
      await page.evaluate((text) => {
        navigator.clipboard.writeText(text);
      }, prompt);

      const isMac = process.platform === 'darwin';
      const modifier = isMac ? 'Meta' : 'Control';
      
      await page.keyboard.down(modifier);
      await page.keyboard.press('V');
      await page.keyboard.up(modifier);
      
      await new Promise(r => setTimeout(r, 800)); // Tunggu sebentar setelah paste
      
      console.log('[AiScraper] Sending prompt (Enter)...');
      await page.keyboard.press('Enter');

      console.log('[AiScraper] Waiting for response generation (Voice Button signal)...');
      await page.waitForSelector(SCRAPER_CONFIG.VOICE_BTN_SELECTOR, { 
        visible: true, 
        timeout: 180000 
      });
      console.log('[AiScraper] Response generation complete.');

      const copyBtnSelector = SCRAPER_CONFIG.COPY_BTN_SELECTOR;
      console.log('[AiScraper] Waiting for Copy button to be ready...');
      
      await page.waitForFunction((selector: any) => {
        const buttons = document.querySelectorAll(selector);
        const lastBtn = buttons[buttons.length - 1] as HTMLButtonElement;
        return lastBtn && !lastBtn.disabled;
      }, { timeout: 30000 }, copyBtnSelector);

      await new Promise(r => setTimeout(r, 1500));

      const copyButtons = await page.$$(copyBtnSelector);
      const lastCopyBtn = copyButtons[copyButtons.length - 1];
      
      if (!lastCopyBtn) throw new Error('Copy button not found');
      
      console.log('[AiScraper] Clicking Copy button...');
      await lastCopyBtn.click();
      
      await new Promise(r => setTimeout(r, 1000));

      console.log('[AiScraper] Reading content from clipboard...');
      const clipboardText = await page.evaluate(() => navigator.clipboard.readText());

      console.log('[AiScraper] Content retrieved successfully.');
      return clipboardText;

    } catch (error) {
      console.error("[AiScraper] Scraping process failed:", error);
      throw error;
    }
  }
}