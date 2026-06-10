import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://start.dev/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Screenshot at top
await page.screenshot({ path: 'startdev_top.png' });
console.log('saved startdev_top.png');

// Scroll down 200px
await page.evaluate(() => window.scrollTo(0, 200));
await page.waitForTimeout(500);
await page.screenshot({ path: 'startdev_scroll1.png' });
console.log('saved startdev_scroll1.png');

// Scroll down 400px
await page.evaluate(() => window.scrollTo(0, 400));
await page.waitForTimeout(500);
await page.screenshot({ path: 'startdev_scroll2.png' });
console.log('saved startdev_scroll2.png');

// Scroll down 600px
await page.evaluate(() => window.scrollTo(0, 600));
await page.waitForTimeout(500);
await page.screenshot({ path: 'startdev_scroll3.png' });
console.log('saved startdev_scroll3.png');

// Get HTML and styles of the floating blocks
const blocks = await page.$$('[class*="cube"], [class*="block"], [class*="float"], [class*="hero"] > div, [class*="animation"] > div');
console.log(`Found ${blocks.length} potential block elements`);

// Try to get computed styles of visible animated elements
const heroHtml = await page.$eval('main, [class*="hero"], section:first-of-type', el => el.outerHTML.substring(0, 3000)).catch(() => 'not found');
console.log('Hero HTML snippet:', heroHtml.substring(0, 500));

await browser.close();
