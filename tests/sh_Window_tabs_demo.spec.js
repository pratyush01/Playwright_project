// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")
// Import the 'text' function from stream/consumers module (unused in this test)
const { text } = require("stream/consumers")

// Set viewport dimensions to 1920x887 pixels for consistent browser window size during tests
// This is commented out, allowing default viewport size
//test.use({viewport:{width:1920,height:887}})

// Define URL constant containing the login page URL from Rahul Shetty Academy
const url = "https://rahulshettyacademy.com/loginpagePractise/"
// Define CSS selector for link containing 'documents-request' text in href attribute
const blnkr = "[href*='documents-request']"
// Define CSS selector for username input field with id 'username'
const username = "#username"
// Define CSS selector for password input field with id 'password'
const pass = "#password"
// Define password text value to be used for login
const psstxt = "learning"
// Define CSS selector for sign-in button with id 'signInBtn'
const signin = "#signInBtn"
// Define CSS selector for dropdown element with class 'form-control'
const drpdwn = "select.form-control"
// Define CSS selector for radio button text with class 'radiotextsty'
const radbtn = ".radiotextsty"
// Define CSS selector for normal button with id 'okayBtn'
const nrml = "#okayBtn"
// Define CSS selector for terms checkbox with id 'terms'
const trms = "#terms"

// Define test case for handling multiple windows and tabs in the browser
test("Window and tabs handling", async function ({browser}) {
    // Create a new browser context (isolated session) from the browser instance
    const context = await browser.newContext();
    // Create a new page/tab within the context
    const page = await context.newPage();
    // Navigate to the specified login page URL
    await page.goto(url);
    
    // Use Promise.all to handle parallel execution when clicking opens a new window/tab
    // Wait for new page event to occur and perform click action simultaneously
    const [newPage] = await Promise.all(
        // Array of parallel operations to execute
        [
        // Listen for new page/tab opening event on the browser context
        context.waitForEvent('page'),
        // Click on the link with 'documents-request' in href to open new window/tab
        page.locator(blnkr).click(),
        ]
    )

    // Get text content from element with class 'red' on the newly opened page
    const text = await newPage.locator(".red").textContent();
    // Split the extracted text by '@' symbol to separate email parts
    const arraytext = text.split("@")
    // Extract email username (part before the domain) from the split array
    const mailText = arraytext[1].split(".")[0];
    // Log the extracted email username to the console for debugging
    console.log(mailText);
    // Fill username input field with extracted email text with 200ms delay between characters
    await page.locator(username).fill(mailText, {delay:200});
    // Pause test execution (allows manual interaction for debugging)
    await page.pause();
    // Fill password input field with predefined password text with 200ms delay between characters
    await page.locator(pass).fill(psstxt, {delay:200});
    // Click the last radio button element on the page
    await page.locator(radbtn).last().click();
    // Click the normal/okay button element
    await page.locator(nrml).click();
    // Select 'consult' option from the dropdown element
    await page.locator(drpdwn).selectOption("consult");
    // Click the terms checkbox to accept terms and conditions
    await page.locator(trms).click();
    // Click the sign-in button to submit the login form
    await page.locator(signin).click();
    // This is a listener for detecting when a new page or window opens
    // These lines are commented out as the same functionality is achieved above using Promise.all
    // const page2 = context.waitForEvent('page');
    // await page.locator(blnkr).click();
})