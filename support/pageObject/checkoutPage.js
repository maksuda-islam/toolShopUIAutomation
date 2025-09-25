export class CheckoutPage {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
        this.btnCheckoutCart = page.locator('[data-test="nav-cart"]')
    }



}