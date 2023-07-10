import { Locator, Page } from '@playwright/test';

export class NavBar{
    readonly page: Page;
    readonly accountSummary:Locator;
    readonly accountActivity:Locator;
    readonly transferFounds:Locator;
    readonly payBills:Locator;
    readonly myMoneyMap:Locator;
    readonly onlineStatments: Locator;
    readonly onlineBanking: Locator;

    constructor(page: Page){
        this.page = page;
        this.accountSummary = page.locator("#account_summary_tab");
        this.accountActivity = page.locator("#account_activity_tab");
        this.transferFounds = page.locator("#transfer_founds_tab");
        this.payBills = page.locator("#pay_bills_link");
        this.myMoneyMap = page.locator("#my_money_map_tab");
        this.onlineStatments = page.locator("#online_statments_tab");
        this.onlineBanking = page.locator("#online-banking");
    }

    async clickOnTab(tabName){
        switch(tabName){
            case "Account Summary":
                await this.accountSummary.click();
                break;
            case "Account Activity":
                await this.accountActivity.click();
                break;
            case "Transfer Founds":
                await this.transferFounds.click();
                break;
            case "Pay Bills":
                await this.payBills.click();
                break;
            case "My Money App":
                await this.myMoneyMap.click();
                break;
            case "Online Statments":
                await this.onlineStatments.click();
                break;
            case "Online Banking":
                await this.onlineBanking.click();
                break;
            default:
                throw new Error("This tab does not exist..")
        }
    }
}