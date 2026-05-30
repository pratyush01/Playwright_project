// Import 'test' and 'expect' from Playwright testing framework for test cases and assertions
const {test,expect} = require("@playwright/test")

// Set viewport dimensions to 1920x887 pixels for consistent test environment window size
test.use({viewport:{width:1920,height:887}})

// Define URL for signup page from Freelance Learn Automation website
const url = "https://freelance-learn-automation.vercel.app/signup"
// Define CSS selector for state dropdown element with id 'state'
const drpdn = "#state"
// Define URL for Rahul Shetty Academy login practice page
const rurl = "https://rahulshettyacademy.com/loginpagePractise/"
// Define CSS selector for username input field with id 'username'
const username = "#username"
// Define username value to fill in the username field
const usrnametxt = "rahulshettyacademy"
// Define password value to fill in the password field
const psstxt = "learning"
// Define CSS selector for password input field with id 'password'
const pass = "#password"
// Define CSS selector for sign-in button with id 'signInBtn'
const signin = "#signInBtn"
// Define CSS selector for dropdown with class 'form-control'
const drpdwn = "select.form-control"
// Define CSS selector for radio button text with class 'radiotextsty'
const radbtn = ".radiotextsty"
// Define CSS selector for normal button with id 'okayBtn'
const nrml = "#okayBtn"
// Define CSS selector for terms checkbox with id 'terms'
const trms = "#terms"
// Define CSS selector for blinking text link with 'documents-request' in href attribute
const blinkr = "[href*='documents-request']"


// Define first test case for handling dropdown selection
test("Handle Dropdown", async function ({page}) {

    // Navigate to the signup page URL
    await page.goto(url)

    // Select option with label "Rajasthan" from the state dropdown element
    await page.locator(drpdn).selectOption({label:"Rajasthan"})
    // Wait for 5000 milliseconds to observe dropdown selection result
    await page.waitForTimeout(5000)
    
})

// Define second test case with test.only to run only this test (ignoring other tests)
test.only("Rahul Shetty Dropwdown video tut", async function ({page}) {
    // Navigate to Rahul Shetty Academy login practice page URL
    await page.goto(rurl)
    // Alternative commented method: fill username field directly with empty value
    // await page.locator(username).fill("");
    // Fill username input field with predefined username with 200ms delay between characters
    await page.locator(username).fill(usrnametxt, {delay:200});
    // Alternative commented method: fill password field directly with empty value
    // await page.locator(pass).fill("");
    // Fill password input field with predefined password with 200ms delay between characters
    await page.locator(pass).fill(psstxt, {delay:200});
    // Select 'consult' option from the dropdown element
    await page.locator(drpdwn).selectOption("consult");
    // Alternative method: pause test execution for manual interaction (currently commented)
    //await page.pause();
    // Click the last radio button element in the radio button group
    await page.locator(radbtn).last().click();
    // Click the normal/okay button element
    await page.locator(nrml).click();
    // Assert that the last radio button element is checked
    await expect(page.locator(radbtn).last()).toBeChecked();
    // Click the terms checkbox to accept terms and conditions
    await page.locator(trms).click();
    // Assert that the terms checkbox is checked
    await expect(page.locator(trms)).toBeChecked();
    // Alternative method: uncheck the terms checkbox (currently commented)
    // await page.locator(trms).uncheck();
    // Alternative method: check if checkbox is unchecked (currently commented)
    // expect(await page.locator(trms).isChecked).toBeFalsy();
    // Alternative method: pause test for manual verification (currently commented)
    //await page.pause();
    // Assert that the blinking text link has the class attribute value "blinkingText"
    await expect(page.locator(blinkr)).toHaveAttribute("class", "blinkingText")

})