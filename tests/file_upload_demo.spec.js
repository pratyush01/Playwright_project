// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Set viewport dimensions to 1920x887 pixels for consistent browser window display during tests
test.use({viewport:{width:1920,height:887}})

// Define CSS selector for file upload input field with id 'file-upload'
const filebtn = "#file-upload"
// Define CSS selector for file submit button with id 'file-submit'
const flesbmt = "#file-submit"
// Define XPath for h3 heading elements anywhere in the document
const fleh3 = "//h3"
// Define URL of the file upload testing website
const url = "https://the-internet.herokuapp.com/upload"
// Example file path commented out: /Users/pratyushmahalawat/Downloads/Mac_doc.docx

// Define test case for verifying file upload functionality
test("File upload demo", async function ({page}) {
    // Navigate to the file upload test page URL
    await page.goto(url)
    // Select the file upload input field and set the file path to be uploaded
    await page.locator(filebtn).setInputFiles("./upload/Mac_doc.docx")
    // Click the file submit button to complete the file upload process
    await page.locator(flesbmt).click()
    // Assert that the h3 heading element contains the text "File Uploaded!"
    expect(await page.locator(fleh3)).toHaveText("File Uploaded!")
})