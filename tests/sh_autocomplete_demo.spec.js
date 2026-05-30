// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Set viewport dimensions to 1920x887 pixels for consistent test browser window size
test.use({viewport:{width:1920,height:887}})

// Define URL for Google homepage
const url = "https://www.google.com/"
// Define URL for Rahul Shetty Academy login practice page
const url1 = "https://rahulshettyacademy.com/loginpagePractise/"
// Define CSS selector for Google search box textarea element
const srchbox = "textarea[name='q']"
// Define CSS selector for username input field with id 'username'
const username = "#username"
// Define username value to be filled in username field
const usertxt = "Pratyush08"
// Define password value to be filled in password field
const passtxt = "learning"
// Define CSS selector for password input field with id 'password'
const pass = "#password"
// Define XPath selector for search results list items (currently unused in test)
const srchrslt = "//li[@role='presentation']"


// Define test case to verify autocomplete textbox functionality
test("Autocomplete Textbox Verify", async function ({page}) {
    // Navigate to Rahul Shetty Academy login practice page URL
    await page.goto(url1)
    // Fill username input field with predefined username value with 200ms delay between characters
    await page.locator(username).fill(usertxt, {delay:200})
    // Alternative method using waitForSelector to wait for search results (currently commented)
    // await page.waitForSelector(srchrslt)
    // Alternative method to press arrow down key to navigate results (currently commented)
    // await page.keyboard.press("ArrowDown")
    // Alternative method to press enter key to select result (currently commented)
    // await page.keyboard.press("Enter")
    // Fill password input field with predefined password value with 200ms delay between characters
    await page.locator(pass).fill(passtxt, {delay:200})
})