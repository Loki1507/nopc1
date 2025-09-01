import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';
import { CapturePrices } from '../pages/capturePrices';



test("mobilebooking", async ({ page }) => {
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
    await page.locator("(//a[contains(text(),'Computers')])[1]").hover();
    await page.waitForTimeout(2000);
    await page.locator("(//a[contains(text(),'Electronics')])[1]").hover();
    await page.waitForTimeout(2000);
    const itemname = "Cell phones";
    const itemlocator = `(//a[contains(text(),'${itemname}')])[position()=1]`;
    await page.locator(itemlocator).click();
    await page.waitForTimeout(2000);

    await expect(page.locator(`//h1[text()='${itemname}']`)).toBeVisible();

    const modelname = "HTC";

    await page.locator(`//div[@class='item-grid']//child::a[contains(text(),'HTC One Mini Blue')]`).click();
    await page.waitForTimeout(2000);

    await expect(page.locator(`//div[@class="overview"]//child::div[@class="overview-buttons"]//div[@class="add-to-wishlist"]`)).toBeVisible();
    await page.waitForTimeout(2000);
    await expect(page.locator(`//div[@class="overview"]//child::div[@class="overview-buttons"]//div[@class="compare-products"]`)).toBeVisible();
    await page.waitForTimeout(2000);
    await page.locator(`//div[@class="overview"]//child::div[@class="add-to-cart-panel"]//button`).click();
    await page.waitForTimeout(2000);

    await page.locator(`//div[@id="bar-notification"]//p//a`).click();
    await page.waitForTimeout(2000);

    await expect(page.locator("//div[@class='page shopping-cart-page']//h1")).toContainText("cart");
    await page.locator("//div[@class='terms-of-service']//input").check();
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:" Checkout "}).click();
    await page.waitForTimeout(2000);
    await page.getByLabel("City:").fill("Hyderabad");
    await page.getByLabel("Address 1:").fill("kukatpalli");
    await page.getByLabel("Zip / postal code:").fill("50001");
    await page.getByLabel("Phone number:").fill("8989898989");
    await page.getByLabel("Country:").selectOption("India");
    await page.getByLabel("State / province:").selectOption("Andhra Pradesh");
    await page.waitForTimeout(4000);
    await page.getByRole("button",{name:"Continue"}).click();
    await page.pause()
    //click on product name
    //verify add cart is available or not
    //capture price and click on add to cart
    //open shopping cart from notification bar
    //veryfi shopping cart opened or not(elemts)
    //check terms and conditions
    //click on check out

    //fill all the details and except phone no and submit. handle alert ans print the message

    //verify check out page click on continue

    //choose credit card and check out
    //give sample ayden card details and d submit
    //click on continue
    //click on order details and cross check order details
    //click on print and handle the new window
    //click on logout

});