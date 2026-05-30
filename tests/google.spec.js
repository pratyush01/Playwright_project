// Import 'test' and 'expect' objects from the Playwright testing framework to enable test writing and assertions
const {test,expect} = require('@playwright/test')

// Define a test case with description "My first test for google" that accepts a page object parameter from Playwright
test("My first test for google", async function ({page}) {
    // Navigate to Google homepage URL using the page object
    await page.goto("https://www.google.com/")
    // Extract the page title from the browser tab and store it in the 'title' variable
    const title = await page.title()
    // Print the page title to the console for debugging purposes
    console.log("Tittle is :" +title)
    // Assert that the page title contains the word "Google" to verify correct page loaded
    await expect(title).toContain("Google")
})