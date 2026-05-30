const {test,expect} = require('@playwright/test')

test("My first test for google", async function ({page}) {
    
    await page.goto("https://www.google.com/")
    const title = await page.title()
    console.log("Tittle is :" +title)
    await expect(title).toContain("Google")
})