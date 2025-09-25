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

    test.only('Test Case 1 : Validate Requird Field Error Msg', async ({ page }) => {
        await page.pause();

        await homePage.selectContainerCardByLabel('Combination Pliers')
        await productPage.addProductToCartAndValidate();

        await page.locator('[data-test="nav-cart"]').click();

        await page.locator('[data-test="product-quantity"]').click();
        await page.locator('[data-test="product-quantity"]').fill('3');
        await page.locator('[data-test="product-quantity"]').press('Enter');
        await page.locator('[data-test="product-price"]').click();
        await page.locator('[data-test="line-price"]').click();
        await page.getByRole('cell', { name: 'Total' }).click();
        await page.locator('[data-test="cart-total"]').click();
    });

});