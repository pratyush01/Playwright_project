// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require('@playwright/test')

// Define placeholder text for username input field: "username"
const user = "username"
// Define placeholder text for password input field: "password"
const pass = "password"
// Define XPath selector for submit button with type 'submit'
const lgnbtn = "//button[@type='submit']"
// Define alt text for profile picture image element
const pic = "profile picture"
// Define text content for logout button element
const lgout = "Logout"

// Define test case for login and logout functionality on Orange HRM demo site
test("Login on OrganeHRM Demo", async function ({page}) {
    // Navigate to the Orange HRM demo login page URL
    await page.goto("https://opensource-demo.orangehrmlive.com/auth/login")
    // Fill username field by finding input with placeholder text and type "Admin" with 200ms delay
    await page.getByPlaceholder(user).type("Admin", {delay:200})
    // Fill password field by finding input with placeholder text and fill "admin123" with 200ms delay
    await page.getByPlaceholder(pass).fill("admin123",{delay:200})
    
    // Click the submit/login button element to submit the login form
    await page.locator(lgnbtn).click()

    // Wait for 5000 milliseconds to allow page to load after login
    await page.waitForTimeout(5000)

    // Assert that the page URL matches the pattern containing "dashboard"
    await expect(page).toHaveURL(/dashboard/);
    // Click the first profile picture image element (using alt text as selector)
    await page.getByAltText(pic).first().click()
    // Click the logout button element by finding it by text
    await page.getByText(lgout).click()

    // Wait for 5000 milliseconds to allow page to load after logout
    await page.waitForTimeout(5000)

    // Assert that the page URL matches the pattern containing "login"
    await expect(page).toHaveURL(/login/)

    // These lines are commented out as alternative methods to click logout
    //await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    //await page.locator("//a[normalize-space()='Logout']").click()

})