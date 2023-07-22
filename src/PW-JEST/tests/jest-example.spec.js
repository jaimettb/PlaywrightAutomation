const {chromium} = require("playwright");
//const expect = require("expect");
const {afterAll, beforeAll, afterEach, it } = require("@jest/globals");
const {expect} = require('@jest/globals');

let browser
let page

beforeAll(async ()=>{
    browser = await chromium.launch()
})

afterAll(async ()=>{
    await browser.close();
})

beforeEach(async()=>{
    page = await browser.newPage();
})

afterEach(async()=>{
    await page.close();
})

it("Jest with playwright demo", async()=>{
    await page.goto("http://www.example.com");
    await expect(await page.title()).toBe("Example Domain");
})