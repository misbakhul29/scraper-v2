export const extractTitleAndCleanContent = (content: string): { title: string; cleanContent: string } => {
  const lines = content.trim().split('\n');
  
  if (lines.length === 0) {
    return { title: '', cleanContent: '' };
  }

  const rawTitle = lines[0];

  const title = rawTitle.replace(/^[#* \t]+|[#* \t]+$/g, '').trim();

  const cleanContent = lines.slice(1).join('\n').trim();

  return { title, cleanContent };
};