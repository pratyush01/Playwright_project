const {test,expect} = require("@playwright/test")

//Locators
const url = "https://rahulshettyacademy.com/client"
const register = ".btn1"
const Fname = "#firstName"
const fnametxt = "Pratyush"
const lname = "#lastName"
const lnametxt = "Mahalawat"
const email = "email@example.com"
const emailtxt = "pratyushmahlawat17@gmail.com"
const numb = "#userMobile"
const numbtxt = "8003065959"
const ocptn = "select.custom-select"
const ocptntxt = "3: Engineer"
const gndr = "input.mt-3"
const pass = "enter your passsword"
const passtxt = "Kiyansh220822!@"
const cnfrmpass = "#confirmPassword"
const chckbx = "//input[@type='checkbox']"
const regis = "//input[@type='submit']"
const lgn = "button.btn"
const lgnbtn = "Login"
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


test("E2E testing", async function ({page}) {

    const product = page.locator(".card-body")
    await page.goto(url);
    // await page.locator(register).click();
    // await page.locator(Fname).fill(fnametxt, {delay:200});
    // await page.locator(lname).fill(lnametxt, {delay:200});
    // await page.locator(email).fill(emailtxt, {delay:200});
    // await page.locator(numb).fill(numbtxt, {delay:200});
    // await page.locator(ocptn).selectOption(ocptntxt);
    // await page.locator(gndr).first().click();
    // await page.locator(pass).fill(passtxt, {delay:200});
    // await page.locator(cnfrmpass).fill(passtxt, {delay:200});
    // await page.locator(chckbx).click();
    // await page.locator(regis).click();
    // await page.locator(lgn).click();
    await page.getByPlaceholder(email).fill(emailtxt, {delay:200});
    await page.getByPlaceholder(pass).fill(passtxt, {delay:200});
    await page.getByRole("button", {name:lgnbtn}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(ttles).first().waitFor();
    await page.locator(product).filter({hasText:prdctname})
    .getByRole("button", {name:"Add to Cart"}).click();

    //Wait to load the page
    await page.locator("div li").first().waitFor();

    const bool = await page.locator(mycartname).isVisible();
    expect(bool).toBeTruthy();

    // Checkout Page
    await page.locator(checkout).click();

    await page.locator(cvv).fill(cvvtxt, {delay:200});
    await page.locator(namecard).fill(namecardtxt,{delay:200});
    

    //Auto Suggestion dropdown Handling and to type in text box letter by letter (pressSequentially) method used
    await page.locator(country).pressSequentially(cntrytext, {delay:200});
    const drpdn = page.locator(drpdwn);
    await drpdn.waitFor();
    const OptionCount = await drpdn.locator("button").count();
    for(let i=0; i< OptionCount; ++i)
    {
        const text = await drpdn.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await drpdn.locator("button").nth(i).click();
            break;
        }
    }
    await page.locator(coupon).fill(coupontxt, {delay:200});
    await page.locator(couponbtn).click();
    await expect(page.locator(emailcheck).first()).toHaveText(emailtxt);
    await page.locator(placeorderbtn).click();
    await page.locator(thank).first().waitFor();
    await expect(page.locator(thank)).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(orderid).textContent();
    const realID = orderID.substring(3, 27);
    console.log(realID);

    await page.locator(Myorder).first().click();

    await page.locator("tbody").waitFor();
    // searching the order Id in list of orders method written by the tutor
    const rows = await page.locator(orderlist1);
    for(let i=0; i< await rows.count(); ++i)
    {
        const roworderID = await rows.nth(i).locator("th").textContent();
        if(roworderID === realID)
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderdetails = await page.locator(ordersum).textContent();
    expect(realID.includes(orderdetails)).toBeTruthy();

    //Searching the order Id in list method written by me
    // const rows1 = await page.locator(orderlist);
    // const listorder = await rows1.count();
    // for(let i=0; i<listorder; ++i)
    // {
    //     const text1 = await rows1.nth(i).textContent();
    //     if(text1 === realID)
    //     {
    //         await rows1.nth(i).locator()
    //     }
    // }

    await page.pause();
})
