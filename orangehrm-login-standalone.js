const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false }); // Set to true for headless mode
  const page = await browser.newPage();

  try {
    // Navigate to login page
    console.log('📍 Navigating to OrangeHRM login page...');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Fill in login credentials
    console.log('📝 Filling in credentials...');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    // Click login button
    console.log('🔐 Clicking login button...');
    await page.click('button:has-text("Login")');

    // Wait for dashboard to load
    console.log('⏳ Waiting for dashboard...');
    await page.waitForURL('**/dashboard/index', { timeout: 10000 });

    // Verify login success
    const userProfile = await page.locator('text=Richard Dan').isVisible();
    if (userProfile) {
      console.log('✅ Login successful! User: Richard Dan');
    }

    // Keep browser open for 5 seconds to see the result
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ Login failed:', error.message);
  } finally {
    // Close browser
    await browser.close();
    console.log('🔌 Browser closed');
  }
})();
