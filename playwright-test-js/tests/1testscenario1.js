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


test('Drag & Drop Sliders', async ({ page }) => {
    // 1. Open the LambdaTest Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');
  
    // 2. Click on "Drag & Drop Sliders"
    await page.click('text=Drag & Drop Sliders');
  
    // Wait for the slider to be visible
    await page.waitForSelector('#slider1');  // Assuming slider has an id of "slider1"
  
    // 3. Select the slider “Default value 15”
    const slider = await page.locator('#slider1');  // Adjust the selector if necessary
    
    // Drag the slider to make it 95
    const sliderWidth = await slider.boundingBox();
    const xPositionToMove = sliderWidth.x + (sliderWidth.width * 0.8); // Adjust for 95 on the slider scale
  
    await slider.hover();
    await page.mouse.move(sliderWidth.x + sliderWidth.width / 2, sliderWidth.y + sliderWidth.height / 2);
    await page.mouse.down();
    await page.mouse.move(xPositionToMove, sliderWidth.y + sliderWidth.height / 2);
    await page.mouse.up();
  
    // 4. Validate that the slider value shows 95
    const rangeValue = await page.locator('#slider1Value').innerText();  // Assuming value is displayed with id "slider1Value"
    await expect(rangeValue).toBe('95');
  });

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