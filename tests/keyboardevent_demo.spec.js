// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Set viewport dimensions to 1920x887 pixels for consistent test browser window size
test.use({viewport:{width:1920,height:887}})

// Define CSS selector for Google search box textarea element with name attribute 'q'
const srchbox = "textarea[name='q']"

// Define test case to verify keyboard event handling and clipboard operations
test("Keyboard Events Verify", async function ({page}) {
    // Navigate to Google homepage URL
    await page.goto(url)
    // Type text "Pratyush Mahalawat" into the search box with 200ms delay between characters
    await page.locator(srchbox).type("Pratyush Mahalawat", {delay:200})
    // Alternative method: press Enter key to submit search (currently commented)
    //await page.keyboard.press("Enter")
    // Wait for 3000 milliseconds to observe any results or changes
    await page.waitForTimeout(3000)
    // Press Cmd+A (Meta+A on Mac) keyboard shortcut to select all text
    await page.keyboard.press("Meta+A")
    // Press Cmd+C (Meta+C on Mac) keyboard shortcut to copy selected text to clipboard
    await page.keyboard.press("Meta+C")
    // Wait for 3000 milliseconds after copying
    await page.waitForTimeout(3000)
    // Press Backspace key to delete all selected text
    await page.keyboard.press("Backspace")
    // Wait for 3000 milliseconds after deletion
    await page.waitForTimeout(3000)
    // Press Cmd+V (Meta+V on Mac) keyboard shortcut to paste copied text from clipboard
    await page.keyboard.press("Meta+V")

})