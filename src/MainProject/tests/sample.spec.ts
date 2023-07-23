import {test, expect} from '@playwright/test'

test.only("basic test",async ( { page }) => {
    await page.goto("https://playwright.dev");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toContainText("Playwright");
})