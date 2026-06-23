import { chromium } from 'playwright';
import { exec } from 'child_process';

async function verify() {
  console.log('Starting Next.js server...');
  const server = exec('npm run start');
  
  // Wait for server to boot
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log('Page loaded. Capturing Hero screenshot...');
    await page.screenshot({ path: '/tmp/aura-hero.png', fullPage: false });
    
    // Scroll down to take another screenshot
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Capturing About screenshot...');
    await page.screenshot({ path: '/tmp/aura-about.png', fullPage: false });
    
    console.log('Verification screenshots saved to /tmp/aura-hero.png and /tmp/aura-about.png.');
  } catch (error) {
    console.error('Verification failed:', error);
  } finally {
    await browser.close();
    server.kill();
    process.exit(0);
  }
}

verify();
