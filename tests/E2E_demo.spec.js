// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Define URL for the ecommerce client dashboard website
const url = "https://rahulshettyacademy.com/client"
// Define CSS selector for register button with class 'btn1'
const register = ".btn1"
// Define CSS selector for first name input field with id 'firstName'
const Fname = "#firstName"
// Define first name value to be entered in first name field
const fnametxt = "Pratyush"
// Define CSS selector for last name input field with id 'lastName'
const lname = "#lastName"
// Define last name value to be entered in last name field
const lnametxt = "Mahalawat"
// Define CSS selector for email input field with id 'userEmail'
const email = "#userEmail"
// Define email value to be entered in email field
const emailtxt = "pratyushmahlawat17@gmail.com"
// Define CSS selector for mobile number input field with id 'userMobile'
const numb = "#userMobile"
// Define mobile number value to be entered in mobile field
const numbtxt = "8003065959"
// Define CSS selector for occupation dropdown with class 'custom-select'
const ocptn = "select.custom-select"
// Define occupation value to select from dropdown
const ocptntxt = "3: Engineer"
// Define CSS selector for gender radio button input with class 'mt-3'
const gndr = "input.mt-3"
// Define CSS selector for password input field with id 'userPassword'
const pass = "#userPassword"
// Define password value to be entered in password field
const passtxt = "Kiyansh220822!@"
// Define CSS selector for confirm password input field with id 'confirmPassword'
const cnfrmpass = "#confirmPassword"
// Define XPath selector for terms and conditions checkbox input element
const chckbx = "//input[@type='checkbox']"
// Define XPath selector for registration submit button input element
const regis = "//input[@type='submit']"
// Define CSS selector for login button with class 'btn'
const lgn = "button.btn"
// Define CSS selector for login button with id 'login'
const lgnbtn = "#login"
// Define CSS selector for product titles (bold text in card body)
const ttles = ".card-body b"
// Define XPath selector for iPhone 13 PRO product element
const prdct = "//b[normalize-space()='IPHONE 13 PRO']"
// Define product name string to match in product list
const prdctname = "IPHONE 13 PRO"
// Define CSS selector for cart link with routerlink containing 'cart'
const cart = "[routerlink*='cart']"
// Define CSS selector for product in cart using h3 with text content matcher
const mycartname = "h3:has-text('IPHONE 13 PRO')"
// Define XPath selector for checkout button element
const checkout = "//button[normalize-space()='Checkout']"
// Define CSS selector for country input field with placeholder containing 'Country'
const country = "[placeholder*='Country']"
// Define CSS selector for dropdown results container with class 'ta-results'
const drpdwn = ".ta-results"
// Define country code text to be typed for country selection
const cntrytext = "ind"
// Define XPath selector for CVV input field (2nd text input in checkout form)
const cvv = "(//input[@type='text'])[2]"
// Define CVV value to be entered
const cvvtxt = "732"
// Define XPath selector for cardholder name input field (3rd text input in checkout form)
const namecard = "(//input[@type='text'])[3]"
// Define cardholder name value to be entered
const namecardtxt = "Pratyush Mahalawat"
// Define XPath selector for coupon code input field (4th text input in checkout form)
const coupon = "(//input[@type='text'])[4]"
// Define coupon code value to be entered
const coupontxt = "rahulshettyacademy"
// Define XPath selector for apply coupon button element
const couponbtn = "//button[normalize-space()='Apply Coupon']"
// Define XPath selector for place order button link element
const placeorderbtn = "//a[contains(text(),'Place Order ')]"
// Define CSS selector for email verification field in checkout form
const emailcheck = ".user__name [type='text']"
// Define XPath selector for thank you message heading after order placement
const thank = "//h1[text()=' Thankyou for the order. ']"
// Define CSS selector for order ID element in confirmation page
const orderid = ".em-spacer-1 .ng-star-inserted"
// Define CSS selector for my orders link with routerlink containing 'myorders'
const Myorder = "[routerlink*='myorders']"
// Define CSS selector for order list table headers
const orderlist = ".table-bordered tbody th"
// Define CSS selector for order list table rows
const orderlist1 = "tbody tr"
// Define CSS selector for order summary text element
const ordersum = ".col-text"


// Define end-to-end test case for complete order placement and verification workflow
test("E2E testing", async function ({page}) {

    // Create a locator reference for all product cards in the card body
    const product = page.locator(".card-body")
    // Navigate to the ecommerce client dashboard URL
    await page.goto(url);
    // Alternative registration flow steps are commented out below
    // Click register button to start registration process
    // await page.locator(register).click();
    // Fill first name field with first name value with 200ms delay
    // await page.locator(Fname).fill(fnametxt, {delay:200});
    // Fill last name field with last name value with 200ms delay
    // await page.locator(lname).fill(lnametxt, {delay:200});
    // Fill email field with email value with 200ms delay
    // await page.locator(email).fill(emailtxt, {delay:200});
    // Fill mobile number field with mobile value with 200ms delay
    // await page.locator(numb).fill(numbtxt, {delay:200});
    // Select occupation from dropdown
    // await page.locator(ocptn).selectOption(ocptntxt);
    // Click first gender radio button
    // await page.locator(gndr).first().click();
    // Fill password field with password value with 200ms delay
    // await page.locator(pass).fill(passtxt, {delay:200});
    // Fill confirm password field with password value with 200ms delay
    // await page.locator(cnfrmpass).fill(passtxt, {delay:200});
    // Click terms checkbox to accept terms
    // await page.locator(chckbx).click();
    // Click registration submit button to complete registration
    // await page.locator(regis).click();
    // Click login button to proceed to login
    // await page.locator(lgn).click();
    // Fill email field with email value with 200ms delay
    await page.locator(email).fill(emailtxt, {delay:200});
    // Fill password field with password value with 200ms delay
    await page.locator(pass).fill(passtxt, {delay:200});
    // Click login button with id 'login' to submit login credentials
    await page.locator(lgnbtn).click();
    // Wait for network to become idle to ensure all assets are loaded
    await page.waitForLoadState('networkidle');
    // Extract all text contents of product titles and store in titles array
    const titles = await page.locator(ttles).allTextContents();
    // Log product titles to console for debugging
    console.log(titles);
    // Get the count of all product cards available on the page
    const count  = await product.count();
    // Loop through each product card to find the target product
    for(let i=0;i<count;i++)
    {
        // Extract product name text from the bold element in current product card
        const pr = await product.nth(i).locator("b").textContent();
        // Check if current product name matches the target product name
        if(pr === prdctname)
        {
            // Click the "Add To Cart" button for the matching product
            await product.nth(i).locator("text= Add To Cart").click();
            // Break the loop after finding and clicking the target product
            break;
        }
    }
    // Click the cart link to navigate to shopping cart page
    await page.locator(cart).click();
    // Wait for the first list item element to load before proceeding
    await page.locator("div li").first().waitFor();

    // Check if the product is visible in the shopping cart
    const bool = await page.locator(mycartname).isVisible();
    // Assert that the product visibility check returns true
    expect(bool).toBeTruthy();

    // Click the checkout button to proceed to payment/checkout page
    await page.locator(checkout).click();

    // Fill CVV field with CVV value with 200ms delay between characters
    await page.locator(cvv).fill(cvvtxt, {delay:200});
    // Fill cardholder name field with name value with 200ms delay between characters
    await page.locator(namecard).fill(namecardtxt,{delay:200});
    

    // Auto suggestion dropdown handling - type country code letter by letter with pressSequentially method
    // This method types characters individually with 200ms delay to trigger autocomplete suggestions
    await page.locator(country).pressSequentially(cntrytext, {delay:200});
    // Create a locator reference for the dropdown results container
    const drpdn = page.locator(drpdwn);
    // Wait for the dropdown results container to appear on the page
    await drpdn.waitFor();
    // Get the count of option buttons available in the dropdown results
    const OptionCount = await drpdn.locator("button").count();
    // Loop through each dropdown option to find the correct country
    for(let i=0; i< OptionCount; ++i)
    {
        // Extract text content from current dropdown option button
        const text = await drpdn.locator("button").nth(i).textContent();
        // Check if current option text matches the target country "India"
        if(text === " India")
        {
            // Click the matching country option
            await drpdn.locator("button").nth(i).click();
            // Break the loop after selecting the correct country
            break;
        }
    }
    // Fill coupon code input field with coupon code value with 200ms delay between characters
    await page.locator(coupon).fill(coupontxt, {delay:200});
    // Click the apply coupon button to apply the discount code
    await page.locator(couponbtn).click();
    // Assert that the email verification field contains the correct email text
    await expect(page.locator(emailcheck).first()).toHaveText(emailtxt);
    // Click the place order button to submit the order
    await page.locator(placeorderbtn).click();
    // Wait for the thank you message heading to appear on the page
    await page.locator(thank).first().waitFor();
    // Assert that the thank you message displays the expected text
    await expect(page.locator(thank)).toHaveText(" Thankyou for the order. ");
    // Extract the order ID text from the confirmation page
    const orderID = await page.locator(orderid).textContent();
    // Extract the actual order ID by removing first 3 characters and getting substring from position 3 to 27
    const realID = orderID.substring(3, 27);
    // Log the extracted order ID to console for reference
    console.log(realID);

    // Click the "My Orders" link to navigate to the orders history page
    await page.locator(Myorder).first().click();

    // Wait for the orders table body to load on the page
    await page.locator("tbody").waitFor();
    // Extract all table rows from the orders list
    const rows = await page.locator(orderlist1);
    // Loop through each row in the orders table to find the current order
    for(let i=0; i< await rows.count(); ++i)
    {
        // Extract the order ID text from the current row's table header cell
        const roworderID = await rows.nth(i).locator("th").textContent();
        // Check if the current row's order ID matches the placed order ID
        if(roworderID === realID)
        {
            // Click the first button (view details) in the matching order row
            await rows.nth(i).locator("button").first().click();
            // Break the loop after finding and clicking the matching order
            break;
        }
    }
    // Extract the order summary/details text from the order details page
    const orderdetails = await page.locator(ordersum).textContent();
    // Assert that the order ID is included in the order details to verify correct order
    expect(realID.includes(orderdetails)).toBeTruthy();

    // Alternative search method using table headers (currently commented out)
    // Extract table headers from the orders list
    // const rows1 = await page.locator(orderlist);
    // Get the count of table headers
    // const listorder = await rows1.count();
    // Loop through each header to find the matching order
    // for(let i=0; i<listorder; ++i)
    // {
    //     Extract text from each table header
    //     const text1 = await rows1.nth(i).textContent();
    //     Check if header text matches the order ID
    //     if(text1 === realID)
    //     {
    //         Click the matching header element
    //         await rows1.nth(i).locator()
    //     }
    // }

    // Pause test execution to allow manual verification and inspection of final state
    await page.pause();
})
