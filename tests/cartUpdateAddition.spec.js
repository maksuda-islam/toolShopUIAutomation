import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pageObject/homePage';
import { ProductPage } from '../support/pageObject/productPage';

test.describe("Validate User form", () => {
    /** @type { HomePage } */
    let homePage;

    /** @type { ProductPage } */
    let productPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);

        await page.goto('/');
    });

    test('Test Case 1 :Task 02', async ({ page }) => {
        await homePage.selectContainerCardByLabel('Combination Pliers')
        await productPage.addProductToCartAndValidate();

        //wanted to do this in the checkoutPgae.js but lost track of time.
        await page.locator('[data-test="nav-cart"]').click();
        await page.locator('[data-test="product-quantity"]').fill('3');
        await page.locator('[data-test="product-quantity"]').press('Enter');

        let perUnitPriceText = await page.locator('[data-test="product-price"]').textContent();
        let perUnitPrice = parseFloat(perUnitPriceText.replace('$', ''));
        const expectedTotalPrice = perUnitPrice * 3;
        let currentTotalPriceText = await page.locator('[data-test="line-price"]').textContent();
        let currentTotalPrice = parseFloat(currentTotalPriceText.replace('$', ''));

        await expect(currentTotalPrice).toBe(expectedTotalPrice);

        let cartTotalText = await page.locator('[data-test="cart-total"]').textContent();
        let cartTotal = parseFloat(cartTotalText.replace('$', ''));
        
        await expect(cartTotal).toBe(expectedTotalPrice);

    });

});