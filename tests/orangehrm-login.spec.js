const { test, expect } = require('@playwright/test');

test('OrangeHRM Login - Valid Credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for the page to load
  await expect(page).toHaveTitle('OrangeHRM');

  // Fill in the username field
  await page.fill('input[name="username"]', 'Admin');

  // Fill in the password field
  await page.fill('input[name="password"]', 'admin123');

  // Click the Login button
  await page.click('button:has-text("Login")');

  // Wait for navigation and verify successful login
  await page.waitForURL('**/dashboard/index');
  await expect(page).toHaveTitle('OrangeHRM');

  // Verify dashboard is visible
 // await expect(page.locator('text=Dashboard')).toBeVisible();
  
  // Verify user is logged in (check for user profile)
  await expect(page.locator('text=Richard Dan')).toBeVisible();

  console.log('✅ Login successful! User logged in as Richard Dan');
});
