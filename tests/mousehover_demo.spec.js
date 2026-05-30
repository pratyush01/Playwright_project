// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Set viewport dimensions to 1920x887 pixels for consistent test browser window size
test.use({viewport:{width:1920,height:887}})

// Define URL for eBay homepage (currently unused in the test)
const url = "https://www.ebay.com/"
// Define URL for Freelance Learn Automation login page
const url1 = "https://freelance-learn-automation.vercel.app/login"
// Define placeholder text for email input field
const email = "Enter Email"
// Define placeholder text for password input field
const pass = "Enter Password"
// Define email value to be filled in email input field
const eamiltype = "admin@email.com"
// Define password value to be filled in password input field
const passtype = "admin@123"
// Define XPath selector for submit button element
const btnsgn = "//button[@class='submit-btn']"
// Define XPath selector for manage button/link element
const mngbtn = "//span[text()='Manage']"
// Define XPath selector for manage course image element
const hvrbtn = "//img[@alt='manage course']"
 
// Main test case starts here: Define test case to demonstrate mouse hover functionality
test("Mouse Hove demo Test", async function ({page}) {
    // Navigate to the Freelance Learn Automation login page URL
    await page.goto(url1)
    // Fill email field by finding input with placeholder text and type email with 200ms delay
    await page.getByPlaceholder(email).type(eamiltype, {delay:200})
    // Fill password field by finding input with placeholder text and type password with 200ms delay
    await page.getByPlaceholder(pass).type(passtype, {delay:200})
    // Click the submit button element to submit login credentials
    await page.locator(btnsgn).click()
    // Wait for 2000 milliseconds to allow page to fully load after login
    await page.waitForTimeout(2000)
    // Hover over the manage button/link element to trigger hover state
    await page.locator(mngbtn).hover()
    // Wait for 2000 milliseconds to observe hover state and dropdown appearance
    await page.waitForTimeout(2000)
    // Click the manage course image element that appears after hovering
    await page.locator(hvrbtn).click()
    // Wait for 2000 milliseconds to allow page to load after clicking
    await page.waitForTimeout(2000)
})