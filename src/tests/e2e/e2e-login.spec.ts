import {test, expect} from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe.parallel.only("Login / Logout Flow", ()=>{
    let loginPage: LoginPage;

    // Before Hook
    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);       
        loginPage.visit();
    });

    // Negative scenario
    test("Negative scenario for Loin", async({page})=>{
        await loginPage.login("invalid username", "invalid password");       
        await loginPage.assertErrorMessage();
    });

    // Positive scenario
    test.only("Positive scenario for Loin", async({page})=>{
        await loginPage.visit();
        await loginPage.login("username", "password");
        await loginPage.visit();
        
        const userIcon = await page.locator(".icon-cog");
        await expect(userIcon).toBeVisible();

        await page.goto("http://zero.webappsecurity.com/logout.html");
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
    });
})