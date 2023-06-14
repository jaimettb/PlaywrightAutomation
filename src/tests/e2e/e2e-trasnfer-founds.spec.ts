import { test, expect } from '@playwright/test';

test.describe.only("Transfer Founds and Meke Payments", () =>{
    test.beforeEach(async ({page})=>{
        await page.goto("http://zero.webappsecurity.com/");
        await page.click("#signin_button");
        await page.type("#user_login", "username");
        await page.type("#user_password", "password");
        await page.click("text=Sign in");
        
        await page.goto("http://zero.webappsecurity.com/");
    });

    test("Transfer founds", async ({page})=>{
        await page.click("#onlineBankingMenu");
        await page.click("#transfer_funds_link");
        await page.selectOption("#tf_fromAccountId", "2");
        await page.selectOption("#tf_toAccountId", "3");
        await page.type("#tf_amount", "500");
        await page.type("#tf_description", "Test message");
        await page.click("#btn_submit");

        const boardHeader = await page.locator(".board-header");
        await expect(boardHeader).toContainText("Verify")
       
        await page.click("#btn_submit");      
        const message = await page.locator(".alert-success");
        await expect(message).toContainText("You successfully submitted your transaction.");
    });
});