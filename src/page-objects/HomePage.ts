import { expect, Locator, Page } from '@playwright/test';

export class HomePage{
    // Define Selectors
    readonly page: Page;
    readonly userInput: Locator;
    readonly signInButton: Locator;
    readonly searchBox: Locator;

    // Init selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.signInButton = page.locator("#signin_button");
        this.searchBox = page.locator("#searchTerm")
    }

    async visit(){
        this.page.goto('http://zero.webappsecurity.com/');
    }

    async clickOnSignIn(){
        await this.signInButton.click();
    }

    async searchFor(phrase: string){
        await this.searchBox.type(phrase);
        await this.page.keyboard.press('Enter');
    }
}