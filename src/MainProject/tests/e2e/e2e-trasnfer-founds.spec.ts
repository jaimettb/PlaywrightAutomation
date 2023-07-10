import { test, expect } from '@playwright/test';
import {LoginPage} from '../../page-objects/LoginPage';

test.describe("Transfer Founds and Meke Payments", () =>{
    let loginPage:LoginPage;
    
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        loginPage.login("username", "password");

    });

    test("Transfer founds", async ({page})=>{
        await page.waitForLoadState('networkidle');
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