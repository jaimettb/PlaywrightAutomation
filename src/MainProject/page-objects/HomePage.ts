import { expect, Locator, Page } from '@playwright/test';

export class HomePage{
    // Define Selectors
    readonly page: Page;
    readonly userInput: Locator;
    readonly searchBox: Locator;
    readonly linkFeedBack: Locator;
    readonly signInButton: Locator;

    // Init selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.searchBox = page.locator("#searchTerm");
        this.linkFeedBack = page.locator("#feedback");
        this.signInButton = page.locator("#signin_button");
    }

    async visit(){
        await this.page.goto("http://zero.webappsecurity.com/");
    }

    async clickOnFeedbackLink(){
        await this.linkFeedBack.click();
    }

    async searchFor(phrase: string){
        await this.searchBox.type(phrase);
        await this.page.keyboard.press('Enter');
    }

    async clickOnSignIn(){
        await this.signInButton.click();
    }
}