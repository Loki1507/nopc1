import { test, expect } from '@playwright/test';
import { registration } from '../pages/registration'

test("registration", async ({ page }) => {

    const reg = new registration(page);
    //opening website
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(5000);
    //await expect(page.locator("//a[text()='Register']")).toBeVisible();
    //clicking on register
    await reg.navigateToRegisterPage();
    //submitting registration
    await reg.registeringNewUser();

})