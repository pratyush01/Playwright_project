// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const { test, expect } = require("@playwright/test")


const url = "https://rahulshettyacademy.com/client"
const register = ".btn1"
const Fname = "#firstName"
const fnametxt = "Pratyush"
const lname = "#lastName"
const lnametxt = "Mahalawat"
const email = "#userEmail"
const emailtxt = "pratyushmahlawat17@gmail.com"
const numb = "#userMobile"
const numbtxt = "8003065959"
const ocptn = "select.custom-select"
const ocptntxt = "3: Engineer"
const gndr = "input.mt-3"
const pass = "#userPassword"
const passtxt = "Kiyansh220822!@"
const cnfrmpass = "#confirmPassword"
const chckbx = "//input[@type='checkbox']"
const regis = "//input[@type='submit']"
const lgn = "button.btn"
const lgnbtn = "#login"
const ttles = ".card-body b"
const prdct = "//b[normalize-space()='IPHONE 13 PRO']"
const prdctname = "IPHONE 13 PRO"
const cart = "[routerlink*='cart']"
const mycartname = "h3:has-text('IPHONE 13 PRO')"
const checkout = "//button[normalize-space()='Checkout']"
const country = "[placeholder*='Country']"
const drpdwn = ".ta-results"
const cntrytext = "ind"
const cvv = "(//input[@type='text'])[2]"
const cvvtxt = "732"
const namecard = "(//input[@type='text'])[3]"
const namecardtxt = "Pratyush Mahalawat"
const coupon = "(//input[@type='text'])[4]"
const coupontxt = "rahulshettyacademy"
const couponbtn = "//button[normalize-space()='Apply Coupon']"
const placeorderbtn = "//a[contains(text(),'Place Order ')]"
const emailcheck = ".user__name [type='text']"
const thank = "//h1[text()=' Thankyou for the order. ']"
const orderid = ".em-spacer-1 .ng-star-inserted"
const Myorder = "[routerlink*='myorders']"
const orderlist = ".table-bordered tbody th"
const orderlist1 = "tbody tr"
const ordersum = ".col-text"

// Define end-to-end test case for complete order placement and verification workflow
test.describe("E2E Test case for same site with test step method", () => {


    test("E2E testing", async function ({ page }) {

        // Create a locator reference for all product cards in the card body
        const product = page.locator(".card-body")
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
        
        await page.locator(email).fill(emailtxt, { delay: 200 });
        
        await page.locator(pass).fill(passtxt, { delay: 200 });
        
        await page.locator(lgnbtn).click();
        // Wait for network to become idle to ensure all assets are loaded
        await page.waitForLoadState('networkidle');
        // Extract all text contents of product titles and store in titles array
        const titles = await page.locator(ttles).allTextContents();
        // Log product titles to console for debugging
        console.log(titles);
        // Get the count of all product cards available on the page
        const count = await product.count();
        // Loop through each product card to find the target product
        for (let i = 0; i < count; i++) {
            // Extract product name text from the bold element in current product card
            const pr = await product.nth(i).locator("b").textContent();
            // Check if current product name matches the target product name
            if (pr === prdctname) {
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
        await page.locator(cvv).fill(cvvtxt, { delay: 200 });
        // Fill cardholder name field with name value with 200ms delay between characters
        await page.locator(namecard).fill(namecardtxt, { delay: 200 });


        // Auto suggestion dropdown handling - type country code letter by letter with pressSequentially method
        // This method types characters individually with 200ms delay to trigger autocomplete suggestions
        await page.locator(country).pressSequentially(cntrytext, { delay: 200 });
        // Create a locator reference for the dropdown results container
        const drpdn = page.locator(drpdwn);
        // Wait for the dropdown results container to appear on the page
        await drpdn.waitFor();
        // Get the count of option buttons available in the dropdown results
        const OptionCount = await drpdn.locator("button").count();
        // Loop through each dropdown option to find the correct country
        for (let i = 0; i < OptionCount; ++i) {
            // Extract text content from current dropdown option button
            const text = await drpdn.locator("button").nth(i).textContent();
            // Check if current option text matches the target country "India"
            if (text === " India") {
                // Click the matching country option
                await drpdn.locator("button").nth(i).click();
                // Break the loop after selecting the correct country
                break;
            }
        }
        // Fill coupon code input field with coupon code value with 200ms delay between characters
        await page.locator(coupon).fill(coupontxt, { delay: 200 });
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
        for (let i = 0; i < await rows.count(); ++i) {
            // Extract the order ID text from the current row's table header cell
            const roworderID = await rows.nth(i).locator("th").textContent();
            // Check if the current row's order ID matches the placed order ID
            if (roworderID === realID) {
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
    });

    test("E2E Testing with Playwright locators", async ({ page }) => {
        await page.goto(url);
        await page.locator("#userEmail").fill("");
        const addtocart = page.getByText(" Add To Cart");
        await page.locator("#userEmail").fill("pratyushmahlawat17@gmail.com", { delay: 200 });
        //await page.locator("#userPassword").fill("");
        await page.waitForTimeout(2000);
        await page.locator("#userPassword").fill("Kiyansh220822!@", { delay: 200 });
        await page.locator(lgnbtn).click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        const link = await page.locator(".card-body").allTextContents();
        const product = page.locator(".card-body");
        const title = page.getByText("ZARA COAT 3");
        await title.addtocart.click();
    });
});
