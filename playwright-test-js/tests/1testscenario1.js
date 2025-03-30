const { test, expect } = require('@playwright/test');

test('LambdaTest Simple Form Demo', async ({ page }) => {
  // 1. Open LambdaTest’s Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // 2. Click on "Simple Form Demo"
  await page.click('text=Simple Form Demo');

  // 3. Validate that the URL contains "simple-form-demo"
  await expect(page).toHaveURL(/.*simple-form-demo/);

  // 4. Create a variable for a string value
  const message = 'Welcome to LambdaTest';

  // 5. Enter this variable value in the "Enter Message" text box
  await page.fill('#user-message', message);  // Assuming the text box has an id of "user-message"

  // 6. Click the "Get Checked Value" button
  await page.click('#get-input > button');  // Assuming the button has this selector

  // 7. Validate whether the same text message is displayed in the "Your Message:" section
  await expect(page.locator('#message')).toHaveText(message);  // Assuming the message is displayed in an element with id "message"
});

