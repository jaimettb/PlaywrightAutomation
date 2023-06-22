import { Expect, Locator, Page, expect } from '@playwright/test';;

export class LoginPage{
    // Define Selectors
    readonly page: Page;
    readonly userInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly signInButton: Locator;

    // Init selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.userInput = page.locator("#user_login");
        this.passwordInput = page.locator("#user_password");
        this.submitButton = page.locator("text=Sign in");
        this.errorMessage = page.locator(".alert-error");
        this.signInButton = page.locator("#signin_button");
    }

    async visit(){
        await this.page.pause();
        await this.page.goto('http://zero.webappsecurity.com/');
    }

    async login(username: string, password:string){
        await this.signInButton.click();
        await this.userInput.type(username);
        await this.passwordInput.type(password);
        await this.submitButton.click();
    }

    async assertErrorMessage(){
        await expect(this.errorMessage).toContainText("Login and/or password are wrong.");
    }
}