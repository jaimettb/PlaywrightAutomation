import { test, expect } from "@playwright/test";
import {LoginPage} from '../../page-objects/LoginPage';

test.describe('Filter Transactions', ()=>{
    let loginPage:LoginPage;
    
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        loginPage.login("username", "password");

    });

    test("Verify the results for each account", async ({page})=>{
        await page.waitForLoadState('networkidle');
        await page.click("#account_activity_link");
        await page.click("#account_activity_tab");

        await page.selectOption("#aa_accountId", "2");
        const checkingAccount = await page.locator("#all_transactions_for_account tbody tr");
        await expect(checkingAccount).toHaveCount(3);

        await page.selectOption("#aa_accountId", "4");
        await expect(checkingAccount).toHaveCount(2);

        await page.selectOption("#aa_accountId", "5");
        const noResults = await page.locator(".well");
        await expect(noResults).toBeVisible();
    });
})