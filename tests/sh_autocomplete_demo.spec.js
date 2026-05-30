const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1920,height:887}})

//Locators:
const url = "https://www.google.com/"
const url1 = "https://rahulshettyacademy.com/loginpagePractise/"
const srchbox = "textarea[name='q']"
const username = "#username"
const usertxt = "Pratyush08"
const passtxt = "learning"
const pass = "#password"
const srchrslt = "//li[@role='presentation']"


test("Autocomplete Textbox Verify", async function ({page}) {
    
    await page.goto(url1)
    await page.locator(username).fill(usertxt, {delay:200})
    // await page.waitForSelector(srchrslt)
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("Enter")
    await page.locator(pass).fill(passtxt, {delay:200})
})