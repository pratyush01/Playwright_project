const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1920,height:887}})

//locators
const url = "https://www.google.com/"
const srchbox = "textarea[name='q']"



test("Keyboard Events Verify", async function ({page}) {
    await page.goto(url)
    await page.locator(srchbox).type("Pratyush Mahalawat", {delay:200})
    //await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Meta+A")
    await page.keyboard.press("Meta+C")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Meta+V")

})