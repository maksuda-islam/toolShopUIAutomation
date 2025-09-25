import { test, expect } from '@playwright/test';
import { ContactForm } from '../support/pageObject/contactFormPage';
import contactFormData from '../resources/contactForm/contactFormDataCreation.json';

test.describe("Save & Validate Contact  form", () => {
    /** @type { ContactForm } */
    let contactForm;

    test.beforeEach(async ({ page }) => {
        contactForm = new ContactForm(page);

        await page.goto('contact');
        await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
    });

    test('Test Case 1 : Validate Requird Field Error Msg', async ({ page }) => {
        await contactForm.clickSendBtn();

        await contactForm.validateRequiredFieldErrorMsg(contactForm.firstNameError, 'First name is required');
        await contactForm.validateRequiredFieldErrorMsg(contactForm.lastNameError, 'Last name is required');
        await contactForm.validateRequiredFieldErrorMsg(contactForm.emailError, 'Email is required');
        await contactForm.validateRequiredFieldErrorMsg(contactForm.subjectError, 'Subject is required');
        await contactForm.validateRequiredFieldErrorMsg(contactForm.messageError, 'Message is required');

        await page.close();
    });

    test('Save Contact Form with Required Field', async ({ page }) => {
        await contactForm.fillContactForm(contactFormData);

        await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
        await expect(page.getByRole('alert')).toContainText(contactFormData.successMessage);

        await page.close();
    });

});