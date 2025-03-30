const { test, expect } = require('@playwright/test');


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

  