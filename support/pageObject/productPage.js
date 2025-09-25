export class ProductPage {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
        this.btnAddToCart = page.locator('[data-test="add-to-cart"]');
    }

    async addProductToCartAndValidate() {
        await this.btnAddToCart.click();
        await expect(page.getByRole('alert', { name: 'Product added to shopping' })).toBeVisible();
    }
}