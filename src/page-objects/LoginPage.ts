import { expect, Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LoginPage extends AbstractPage {
    // Define Selectors
    readonly userInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly signInButton: Locator;
    readonly elementToCheckHomePageIsReady: Locator;
    readonly loginForm: Locator;

    // Init selectors using constructor
    constructor(page:Page){
        super(page);
        this.userInput = page.locator("#user_login");
        this.passwordInput = page.locator("#user_password");
        this.submitButton = page.locator("text=Sign in");
        this.errorMessage = page.locator(".alert-error");
        this.signInButton = page.locator("#signin_button");
        this.loginForm = page.locator("#login_form");
    }

    async login(username: string, password:string){
        this.gotoLoginPage();
        await this.signInButton.click();
        await this.userInput.type(username);
        await this.passwordInput.type(password);
        await this.submitButton.click();

        if((await this.errorMessage.count()) == 0){
            // Hack to handle redirect error
            this.gotoLoginPage();
        }
    }

    async gotoLoginPage(){
        await this.page.goto('http://zero.webappsecurity.com/');
    }

    async assertErrorMessage(){
        await expect(this.errorMessage).toContainText("Login and/or password are wrong.");
    }

    async snapshotLoginForm(){
        await expect(await this.loginForm.screenshot()).toMatchSnapshot("login-form.png");
    }

    async snapshotErrorMessage(){
        await expect(await this.errorMessage.screenshot()).toMatchSnapshot("login-error.png");
    }
}