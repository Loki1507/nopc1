import { expect } from '@playwright/test';

class CapturePrices {

    constructor(page) {
        this.page = page;
        // this.registerLinkHomepage = "//a[text()='Register']";
        // this.registerText = "//a[text()='Register']";
        // this.registerHeader = "//strong[contains(text(),'Your Personal')]";

    }


    async openingProductPage() {
        await this.page.locator("(//a[contains(text(),'Computers')])[1]").hover();
        await this.page.waitForTimeout(2000);
        await this.page.locator("(//a[contains(text(),'Electronics')])[1]").hover();
        await this.page.waitForTimeout(2000);
        //await this.page.locator("(//a[contains(text(),'Apparel ')])[1]").hover();
        //await this.page.waitForTimeout(2000);
        const itemname = "Cell phones";
        const itemlocator = `(//a[contains(text(),'${itemname}')])[position()=1]`;
        await this.page.locator(itemlocator).click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator(`//h1[text()='${itemname}']`)).toBeVisible();
    }

    async capturePrices() {

        const productsarr = await this.page.$$("//div[@class='item-grid']//div[@class='item-box']//div[@class='prices']//span[contains(@class,'actual')]");
        for (let i = 1; i <= productsarr.length; i++) {

            const xpath = `(//div[@class='item-grid']//div[@class='item-box']//div[@class='prices']//span)[position()=${i}]`;
            const productname = `(//div[@class='item-grid']//div[@class='item-box']//div[@class='prices']//span//ancestor::div[@class='details']//child::a)[position()=${i}]`;
            const priceP = await this.page.locator(xpath).textContent();
            const pname = await this.page.locator(productname).textContent();
            //console.log(pname);
            console.log(`${pname}:${priceP}`);
            await this.page.waitForTimeout(2000);
            

        }

    }


}

module.exports = { CapturePrices };