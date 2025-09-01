import {expect} from '@playwright/test';
class registration {

    constructor(page) {
    this.page = page;
    this.registerLinkHomepage = "//a[text()='Register']" ; 
    this.registerText = "//a[text()='Register']";
    this.registerHeader = "//strong[contains(text(),'Your Personal')]";
    this.gender = "//input[@value='M']";
    this.Fname="[id='FirstName']";
    this.Lname="[id='LastName']";
    this.Email="[id='Email']";
    this.company="[id='Company']";
    this.pwd = "//label[text()='Password:']";
    this.cnfpwd ="//label[text()='Confirm password:']";
    }

    async navigateToRegisterPage() {

        await this.page.locator(this.registerLinkHomepage).click();
        await this.page.waitForTimeout(3000);
        //await page.waitForSelector(this.registerText);
        await expect(this.page.locator(this.registerText)).toBeVisible();
        await expect(this.page.locator(this.registerHeader)).toBeVisible();
    }

    async registeringNewUser() {
        await this.page.locator(this.gender).check();        
        await this.page.locator(this.Fname).fill("atuser");
        await this.page.locator(this.Lname).fill("903");
        await this.page.locator(this.Email).fill("atuser903@fmail.com");
        await this.page.waitForTimeout(3000);

        await this.page.locator(this.company).fill("kkfurniture");
        await this.page.getByLabel("Newsletter:").uncheck();
        await this.page.waitForTimeout(3000);

        await this.page.locator(this.pwd).fill("atuser@903");
        await this.page.locator(this.cnfpwd).fill("atuser@903");
        await this.page.waitForTimeout(3000);

        await this.page.getByRole('button', { name: "Register" }).click();
        await this.page.waitForTimeout(5000);

    }

}

module.exports = { registration };