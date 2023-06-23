import { expect, Locator, Page } from "@playwright/test";

export class FeedbackPage{
    readonly page:Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly comentInput: Locator;
    readonly clearButton: Locator;
    readonly submitButton: Locator;
    readonly feedbackTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.nameInput = page.locator("#name");
        this.emailInput = page.locator("#email");
        this.subjectInput = page.locator("#subject");
        this.comentInput = page.locator("#comment");
        this.clearButton = page.locator("input[name='clear']");
        this.submitButton = page.locator("input[name='submit']");
        this.feedbackTitle = page.locator("#feedback-title");
    }

    async fillForm(name: string, email: string, subject: string, comment: string){
        await this.nameInput.type(name);
        await this.emailInput.type(email);
        await this.subjectInput.type(subject);
        await this.comentInput.type(comment);
    }

    async resetForm(){
        await this.clearButton.click();
    }

    async submitForm(){
        await this.submitButton.click();
    }

    async assertReset(){
        await expect(this.nameInput).toBeEmpty();
        await expect(this.comentInput).toBeEmpty();
    }

    async feedbackFormSent(){
        await expect(this.feedbackTitle).toBeVisible();
    }

    // await page.type("#name", "some name");
    // await page.type("#email", "some email@email.com");
    // await page.type("#subject", "some subject");
    // await page.type("#comment", "some nice comment abbout the application");
    // await page.click("input[name='clear']");

    // const nameInput = await page.locator('#name');
    // const commaneInput = await page.locator('#comment');

    // await page.type("#name", "some name");
    // await page.type("#email", "some email@email.com");
    // await page.type("#subject", "some subject");
    // await page.type("#comment", "some nice comment abbout the application");
    // await page.click("input[name='submit']");

    // await page.waitForSelector("#feedback-title");
}