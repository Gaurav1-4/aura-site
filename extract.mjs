import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('response', response => {
    const url = response.url();
    if (url.endsWith('.glb') || url.includes('.glb?') || url.includes('models/')) {
      console.log('Found model URL:', url);
    }
  });

  await page.goto('https://www.meshy.ai/s/wQThJw', { waitUntil: 'networkidle' });
  await browser.close();
})();
