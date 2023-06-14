import {test, expect} from '@playwright/test';

test.describe("Feedback Form", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.click("#feedback");
    })

    // Reset feedback form
    test("Reset feedback form", async ({page})=>{
        await page.type("#name", "some name");
        await page.type("#email", "some email@email.com");
        await page.type("#subject", "some subject");
        await page.type("#comment", "some nice comment abbout the application");
        await page.click("input[name='clear']");

        const nameInput = await page.locator('#name');
        const commaneInput = await page.locator('#comment');

        await expect(nameInput).toBeEmpty();
        await expect(commaneInput).toBeEmpty();
    })

    //Submit feedback form
    test("Submit feedback form", async ({page})=>{
        await page.type("#name", "some name");
        await page.type("#email", "some email@email.com");
        await page.type("#subject", "some subject");
        await page.type("#comment", "some nice comment abbout the application");
        await page.click("input[name='submit']");

        await page.waitForSelector("#feedback-title");
    })
})