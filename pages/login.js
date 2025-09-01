import { expect } from '@playwright/test';

class Login{

    constructor(page) {
        this.page = page;
        // this.registerLinkHomepage = "//a[text()='Register']";
        // this.registerText = "//a[text()='Register']";
        // this.registerHeader = "//strong[contains(text(),'Your Personal')]";

    }

    async navigateToLoginpage() {
        await this.page.locator("//a[text()='Log in']").click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.locator("//h1[contains(text(),'Welcome, Please Sign ')]")).toBeVisible();
        await expect(this.page.locator("//strong[text()='Returning Customer']")).toBeVisible();

    }

    async loginIntoApp() {

        await this.page.getByLabel("Email:").fill("atuser903@fmail.com");
        await this.page.getByLabel("Password:").fill("atuser@903");
        await this.page.getByRole('button', { name: "Log in" }).click();
        await this.page.waitForTimeout(4000);
        await expect(this.page.locator("//a[text()='Log out']")).toBeVisible();
        await expect(this.page.locator("//a[text()='Register']")).not.toBeVisible();
    }

}

module.exports = { Login };