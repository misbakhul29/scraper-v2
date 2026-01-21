import { env } from "../config/env";

const PROVIDERS = {
  gemini: {
    WEB_URL: 'https://gemini.google.com/app',
    NEW_CHAT_BTN_SELECTOR: 'a[href="/app"]', 
    PROMPT_INPUT_SELECTOR: 'div[contenteditable="true"]',
    COPY_BTN_SELECTOR: 'button[data-test-id="copy-button"]', 
    LOGIN_BTN_SELECTOR: 'a[href="https://accounts.google.com/SignOutOptions"]',
    VOICE_BTN_SELECTOR: 'button[data-node-type="speech_dictation_mic_button"]',
  },
  chatgpt: {
    WEB_URL: 'https://chatgpt.com',
    NEW_CHAT_BTN_SELECTOR: 'a[data-testid="create-new-chat-button"]', 
    PROMPT_INPUT_SELECTOR: '#prompt-textarea',
    COPY_BTN_SELECTOR: 'button[data-testid="copy-turn-action-button"]', 
    LOGIN_BTN_SELECTOR: 'div[data-testid="accounts-profile-button"]',
    VOICE_BTN_SELECTOR: 'button[aria-label="Start voice mode"]',
  }
};

type ProviderKey = keyof typeof PROVIDERS;
const SELECTED_PROVIDER = env.AI_PROVIDER as ProviderKey;

export const SCRAPER_CONFIG = PROVIDERS[SELECTED_PROVIDER] || PROVIDERS.chatgpt;