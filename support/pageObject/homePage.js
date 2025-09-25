export class HomePage {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
    }

    async selectContainerCardByLabel(labelText) {
        await page.getByText(labelText).click();
    }
}