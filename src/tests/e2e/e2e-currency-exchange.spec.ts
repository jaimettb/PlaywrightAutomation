import {test, expect} from '@playwright/test';

test.describe("Currency Exchange", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("http://zero.webappsecurity.com/");
        await page.click("#signin_button");
        await page.type("#user_login", "username");
        await page.type("#user_password", "password");
        await page.click("text=Sign in");
        
        await page.goto("http://zero.webappsecurity.com/");
    });

    test("Should exchange currency", async({page})=>{
        await page.click("#online-banking");
        await page.click("#pay_bills_link");
        await page.click("a[href='#ui-tabs-3']");
        await page.selectOption("#pc_currency", "EUR");
        await page.type("#pc_amount", "500");
        await page.click("#pc_inDollars_true");
        await page.click("#pc_calculate_costs");
        await page.waitForSelector("#pc_conversion_amount");
        await page.click("#purchase_cash");

        const message = page.locator("#alert_content");
        await expect(message).toBeVisible();
        await expect(message).toContainText("Foreign currency cash was successfully purchased.");
    });
})