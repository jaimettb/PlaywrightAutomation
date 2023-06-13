import {test, expect} from '@playwright/test';

test.describe.parallel("Login / Logout Flow", ()=>{
    // Before Hook

    test.beforeEach(async({page})=>{
        await page.goto("http://zero.webappsecurity.com/");
    });

    // Negative scenario
    test("Negative scenario for Loin", async({page})=>{
        await page.click("#signin_button");
        await page.type("#user_login", "invalid username");
        await page.type("#user_password", "invalid password");
        await page.click("text=Sign in");
        
        const errorMessage = await page.locator(".alert-error");
        await expect(errorMessage).toContainText("Login and/or password are wrong.");
    });

    // Positive scenario
    test("Positive scenario for Loin", async({page})=>{
        await page.click("#signin_button");
        await page.type("#user_login", "username");
        await page.type("#user_password", "password");
        await page.click("text=Sign in");
        
        await page.goto("http://zero.webappsecurity.com/");

        const userIcon = await page.locator(".icon-cog");
        await expect(userIcon).toBeVisible();

        await page.goto("http://zero.webappsecurity.com/logout.html");
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
    });
})