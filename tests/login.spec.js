import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

test("login", async ({ page }) => {
    const login = new Login(page);
    //navigating to home page
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(3000);
    await expect(page.locator("//a[text()='Log in']")).toBeVisible();
    //navigate to loginpage
    await login.navigateToLoginpage()
    //login into the application
    await login.loginIntoApp();
    console.log("log in successful and this is the message for Jenkins")
});
