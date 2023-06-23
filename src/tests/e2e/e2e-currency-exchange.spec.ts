import {test, expect} from '@playwright/test';
import {LoginPage} from '../../page-objects/LoginPage';

test.describe("Currency Exchange", ()=>{
    let loginPage:LoginPage;

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        loginPage.login("username", "password");
    });

    test("Should exchange currency", async({page})=>{
        await page.waitForLoadState('networkidle');
        await page.click("#onlineBankingMenu");
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