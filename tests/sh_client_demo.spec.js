// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Define URL for ecommerce client dashboard website
const url = "https://rahulshettyacademy.com/client"
// Define CSS selector for register button with class 'btn1'
const register = ".btn1"
// Define CSS selector for first name input field with id 'firstName'
const Fname = "#firstName"
// Define first name value to be entered
const fnametxt = "Pratyush"
// Define CSS selector for last name input field with id 'lastName'
const lname = "#lastName"
// Define last name value to be entered
const lnametxt = "Mahalawat"
// Define CSS selector for email input field with id 'userEmail'
const email = "#userEmail"
// Define email value to be entered
const emailtxt = "pratyushmahlawat17@gmail.com"
// Define CSS selector for mobile number input field with id 'userMobile'
const numb = "#userMobile"
// Define mobile number value to be entered
const numbtxt = "8003065959"
// Define CSS selector for occupation dropdown with class 'custom-select'
const ocptn = "select.custom-select"
// Define occupation option value to select
const ocptntxt = "3: Engineer"
// Define CSS selector for gender radio button input with class 'mt-3'
const gndr = "input.mt-3"
// Define CSS selector for password input field with id 'userPassword'
const pass = "#userPassword"
// Define password value to be entered
const passtxt = "Kiyansh220822!@"
// Define CSS selector for confirm password input field with id 'confirmPassword'
const cnfrmpass = "#confirmPassword"
// Define XPath selector for terms checkbox input element
const chckbx = "//input[@type='checkbox']"
// Define XPath selector for submit button input element
const regis = "//input[@type='submit']"
// Define CSS selector for login button with class 'btn'
const lgn = "button.btn"
// Define CSS selector for product titles (bold text within card body)
const ttles = ".card-body b"
// Define XPath selector for iPhone 13 PRO product element
const prdct = "//b[normalize-space()='IPHONE 13 PRO']"
// Define product name string to search for
const prdctname = "IPHONE 13 PRO"

// Define test case for registration and login workflow
test("Register and login E2E testcase", async ({page})=>{
    // Create a locator reference for all product cards
    const product = page.locator(".card-body")
    // Navigate to the ecommerce client dashboard URL
    await page.goto(url);
    // Click the register button to open registration form
    await page.locator(register).click();
    // Fill first name field with first name value with 200ms delay
    await page.locator(Fname).fill(fnametxt, {delay:200});
    // Fill last name field with last name value with 200ms delay
    await page.locator(lname).fill(lnametxt, {delay:200});
    // Fill email field with email value with 200ms delay
    await page.locator(email).fill(emailtxt, {delay:200});
    // Fill mobile number field with mobile value with 200ms delay
    await page.locator(numb).fill(numbtxt, {delay:200});
    // Select occupation option from dropdown
    await page.locator(ocptn).selectOption(ocptntxt);
    // Click the first gender radio button
    await page.locator(gndr).first().click();
    // Fill password field with password value with 200ms delay
    await page.locator(pass).fill(passtxt, {delay:200});
    // Fill confirm password field with password value with 200ms delay
    await page.locator(cnfrmpass).fill(passtxt, {delay:200});
    // Click the registration submit button to complete registration
    await page.locator(regis).click();
    // Click the login button to proceed to login page
    await page.locator(lgn).click();
    // Fill email field with email value with 200ms delay
    await page.locator(email).fill(emailtxt, {delay:200});
    // Fill password field with password value with 200ms delay
    await page.locator(pass).fill(passtxt, {delay:200});
    // Click the submit button to submit login credentials
    await page.locator(regis).click();
    // Wait for network to become idle to ensure all assets have loaded
    await page.waitForLoadState('networkidle');
    // Extract all product title text contents and store in array
    const titles = await page.locator(ttles).allTextContents();
    // Log product titles to console for debugging
    console.log(titles);
    // Get the total count of product cards on the page
    const count  = await product.count();
    // Loop through each product to find target product
    for(let i=0;i<count;i++)
    {
        // Extract product name from the empty locator (this will cause an error - incomplete implementation)
        const pr = await product.nth(i).locator("").textContent();
        // Check if current product matches the target product name
        if(pr === prdctname)
        {
            // Click the add to cart button for matching product (incomplete locator)
            await page.locator().click();
        }
    }
    // Alternative method to click product (currently commented out)
    //await page.locator(prdct).click();


})