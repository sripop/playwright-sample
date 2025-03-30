const { test, expect } = require('@playwright/test');

  // Define the test case
test('Input Form Submission Test', async ({ page }) => {
    // Step 1: Open the page and click on "Input Form Submit"
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('text=Input Form Submit').click();
    
    // Step 2: Click Submit without filling in any details
    await page.locator('button:has-text("Submit")').click();
    
    // Step 3: Assert error message
    await expect(page.locator(".parsley-errors-list")).toContainText("Please fill in the fields");
    
    // Step 4: Fill in the form
    await page.fill('[name="name"]', 'John Doe');
    await page.fill('[name="email"]', 'johndoe@example.com');
    await page.fill('[name="phone"]', '1234567890');
    await page.fill('[name="company"]', 'Test Company');
    await page.fill('[name="website"]', 'https://example.com');
    await page.selectOption('[name="country"]', { label: 'United States' }); // Step 5: Select United States
    await page.fill('[name="city"]', 'New York');
    await page.fill('[name="address1"]', '123 Test St');
    await page.fill('[name="address2"]', 'Suite 456');
    await page.fill('[name="state"]', 'NY');
    await page.fill('[name="zip"]', '10001');
    
    // Step 6: Click Submit
    await page.locator('button:has-text("Submit")').click();
    
    // Step 7: Validate success message
    await expect(page.locator(".success-msg")).toContainText("Thanks for contacting us, we will get back to you shortly.");
});