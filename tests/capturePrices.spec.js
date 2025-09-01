import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';
import { CapturePrices } from '../pages/capturePrices';



test("capturePrice", async ({ page }) => {
    const login = new Login(page);
    const captureprices = new CapturePrices(page);
    //navigating to home page
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(3000);
    await expect(page.locator("//a[text()='Log in']")).toBeVisible();
    //navigate to loginpage
    await login.navigateToLoginpage();
    //login into the application
    await login.loginIntoApp();
    //clicking on a product
    await captureprices.openingProductPage();
    //capturing prices
    await captureprices.capturePrices();    
    //const price = await shoesarr[0].textContent();
   // console.log(price);


});