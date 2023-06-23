import {test, expect} from '@playwright/test';
import {LoginPage} from '../../page-objects/LoginPage';

test.describe("New Payment", ()=>{
    let loginPage:LoginPage;

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        loginPage.login("username", "password");
    });

    test("Should send new payment", async({page})=>{
        await page.waitForLoadState('networkidle');
        await page.click("#online-banking");
        await page.click("#pay_bills_link");
        await page.selectOption("#sp_payee", "apple");
        await page.click("#sp_get_payee_details");
        await page.waitForSelector("#sp_payee_details");
        await page.selectOption("#sp_account", "6");
        await page.type("#sp_amount", "5000");
        await page.type("#sp_date", "2021-11-09");
        await page.type("#sp_description", "some random message");
        await page.click("#pay_saved_payees");

        const message = page.locator("#alert_content");
        await expect(message).toBeVisible();
        await expect(message).toContainText("The payment was successfully submitted.");
    });
})