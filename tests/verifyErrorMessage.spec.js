// Import 'test' and 'expect' from Playwright testing framework for defining tests and assertions
const {test,expect} = require('@playwright/test')

// Define placeholder text for username input field
const user = "Username"
// Define placeholder text for password input field
const pass = "Password"
// Define XPath selector for submit button element
const lgnbtn = "//button[@type='submit']"
// Define XPath selector for error message element containing "Invalid credentials" text
const ermsg = "//p[text()='Invalid credentials']"

// Set viewport dimensions to 1470x756 pixels for consistent test browser window size
test.use({viewport:{width:1470,height:756}})

// Define test case to verify error message display on login failure
test("Verify the Error Mesage", async function ({page}) {
    // Navigate to the Orange HRM demo login page
    await page.goto("https://opensource-demo.orangehrmlive.com/auth/login")

    // Fill the username field with placeholder text and type "Admin" with 200ms delay
    await page.getByPlaceholder(user).type("Admin",{delay:200})
    // Fill the password field with placeholder text and type "admin1234" with 200ms delay
    await page.getByPlaceholder(pass).type("admin1234",{delay:200})
    // Click the submit/login button element
    await page.locator(lgnbtn).click()
    // This assertion is commented out - it attempted to verify error message directly
    //await expect(ermsg).toContain("Invalid credentials")
    // Extract the text content of the error message element and store in variable
    const ermsg1 = await page.locator(ermsg).textContent()
    // Print the error message text to console for debugging purposes
    console.log("Error Message is " +ermsg1)

    // Assert that error message includes the word "Invalid" using partial matching
    expect(ermsg1.includes("Invalid")).toBeTruthy()

    // Assert that error message equals exactly "Invalid credentials" for full text matching
    expect(ermsg1==="Invalid credentials").toBeTruthy()

})