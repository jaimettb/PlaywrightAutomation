import { expect, Locator, Page } from '@playwright/test';

export class HomePage{
    // Define Selectors
    readonly page: Page;
    readonly userInput: Locator;
    readonly signInButton: Locator;

    // Init selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.signInButton = page.locator("#signin_button");
    }

    async visit(){
        this.page.goto('http://zero.webappsecurity.com/');
    }

    async clickOnSignIn(){
        await this.signInButton.click();
    }
}