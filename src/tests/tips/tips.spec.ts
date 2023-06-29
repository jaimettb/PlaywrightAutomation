import {test, expect} from '@playwright/test';

test.describe.only('Tips & Tricks Section', ()=>{
    test('TestInfo Object', async({page}, testInfo) => {
        await page.goto('https://www.example.com');
        console.log(testInfo.expectedStatus);
    });

    test('Test Skip Browser', async({page, browserName}) => {
        console.log(browserName);
        test.skip(browserName === "chromium", "Feature not ready in Chrome borwser");
        await page.goto('https://www.example.com');
    })
})