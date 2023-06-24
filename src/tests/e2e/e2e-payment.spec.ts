import {test} from '@playwright/test';
import {LoginPage} from '../../page-objects/LoginPage';
import {PaymentPage} from '../../page-objects/PaymentPage';
import {NavBar} from '../../page-objects/components/NavBar';

test.describe("New Payment", ()=>{
    let loginPage:LoginPage;
    let paymentPage:PaymentPage;
    let navBar: NavBar;

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        paymentPage = new PaymentPage(page);
        navBar = new NavBar(page);
        loginPage.login("username", "password");
    });

    test("Should send new payment", async({page})=>{
        await page.waitForLoadState('networkidle');
        await navBar.clickOnTab("Online Banking");
        await navBar.clickOnTab("Pay Bills")
        await paymentPage.createPayment();
        await paymentPage.assertSuccessMessage();
    });
})