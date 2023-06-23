import {test, expect} from '@playwright/test';
import { HomePage} from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe.parallel.only("Login / Logout Flow", ()=>{
    let loginPage: LoginPage;
    let homePage: HomePage;

    // Before Hook
    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);    
        homePage = new HomePage(page);
    });

    // Negative scenario
    test("Negative scenario for Loin", async({page})=>{
        await homePage.clickOnSignIn();
        await loginPage.login("invalid username", "invalid password");       
        await loginPage.assertErrorMessage();
    });

    // Positive scenario
    test.only("Positive scenario for Loin", async({page})=>{
        await homePage.visit();
        await homePage.clickOnSignIn();
        await loginPage.login("username", "password");

        //Needed due the page redirect issue
        await homePage.visit();
        
        const userIcon = await page.locator(".icon-cog");
        await expect(userIcon).toBeVisible();

        await page.goto("http://zero.webappsecurity.com/logout.html");
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
    });
})