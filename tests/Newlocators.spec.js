// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Define URL for Rahul Shetty Academy Angular practice form page
const URL = "https://rahulshettyacademy.com/angularpractice/"
// Define label text for name input field
const name = "Name"
// Define name value to be entered in name field
const nametxt = "Pratyush Mahalawat"
// Define label text for email input field
const email = "Email"
// Define email value to be entered in email field
const emailtxt = "pratyush081092@gmail.com"
// Define label text for password input field
const Pass = "Password"
// Define password value to be entered in password field
const passtxt = "Password@12"
// Define label text for ice cream checkbox element
const checkbox = "Check me out if you Love IceCreams!"
// Define label text for gender select element
const gendr = "Gender"
// Define option value for employment status
const empstatus = "Student"
// Define label text for date of birth input field
const DOB = "Date of Birth"
// Define date of birth value to be entered
const DOBtxt = "23012025"
// Define button name for submit button
const subbtn = "Submit"
// Define QA meet information (empty in this test)
const QAmeet = ""

// Define test case using new Playwright locator strategies
test("New Locator introduced by playwright", async function ({page}) {
    // Navigate to Rahul Shetty Academy Angular practice form URL
    await page.goto(URL);
    // Fill name field using getByLabel method (finds input by associated label text) with 200ms delay
    await page.getByLabel(name).fill(nametxt, {delay: 200});
    // Fill email field using getByLabel method with 200ms delay
    await page.getByLabel(email).fill(emailtxt, {delay: 200});
    // Fill password field using getByPlaceholder method (finds input by placeholder text) with 200ms delay
    await page.getByPlaceholder(Pass).fill(passtxt, {delay: 200});
    // Click ice cream checkbox using getByLabel method to find checkbox by label text
    await page.getByLabel(checkbox).click();
    // Select "Female" option from gender dropdown using getByLabel method
    await page.getByLabel(gendr).selectOption("Female");
    // Click student/employment status checkbox using getByLabel method
    await page.getByLabel(empstatus).click();
    // Fill date of birth field using getByLabel method with date value
    await page.getByLabel(DOB).fill(DOBtxt);
    // Click submit button using getByRole method (finds button by role and name attributes)
    await page.getByRole("button", {name: subbtn}).click();

})