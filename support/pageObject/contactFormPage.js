import { expect } from '@playwright/test';

export class ContactForm {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
        this.btnSubmit = page.locator('[data-test="contact-submit"]');

        this.firstName = page.locator('[data-test="first-name"]');
        this.lastName = page.locator('[data-test="last-name"]');
        this.email = page.locator('[data-test="email"]');
        this.subject = page.locator('[data-test="subject"]');
        this.message = page.locator('[data-test="message"]');

        this.firstNameError = page.locator('[data-test="first-name-error"] div');
        this.lastNameError = page.locator('[data-test="last-name-error"] div');
        this.emailError = page.locator('[data-test="email-error"] div');
        this.subjectError = page.locator('[data-test="subject-error"] div');
        this.messageError = page.locator('[data-test="message-error"] div');
    }

    async clickSendBtn() {
        await this.btnSubmit.click();
    }
    
    async validateRequiredFieldErrorMsg(errorMsgLocator, expectedMsg) {
        await expect(errorMsgLocator).toContainText(expectedMsg);
    }

    async fillContactForm(contactFormData) {
        let { firstName, lastName, email, subject, message } = contactFormData;

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.subject.selectOption(subject);
        await this.message.fill(message);
        await this.btnSubmit.click();
    }
}