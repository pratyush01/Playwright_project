const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1920,height:887}})

//Locators:
const url = "https://www.ebay.com/"
const url1 = "https://freelance-learn-automation.vercel.app/login"
const email = "Enter Email"
const pass = "Enter Password"
const eamiltype = "admin@email.com"
const passtype = "admin@123"
const btnsgn = "//button[@class='submit-btn']"
const mngbtn = "//span[text()='Manage']"
const hvrbtn = "//img[@alt='manage course']"
 
//Main Test Starts here
test("Mouse Hove demo Test", async function ({page}) {
    await page.goto(url1)
    await page.getByPlaceholder(email).type(eamiltype, {delay:200})
    await page.getByPlaceholder(pass).type(passtype, {delay:200})
    await page.locator(btnsgn).click()
    await page.waitForTimeout(2000)
    await page.locator(mngbtn).hover()
    await page.waitForTimeout(2000)
    await page.locator(hvrbtn).click()
    await page.waitForTimeout(2000)
})
