const {test,expect} = require("@playwright/test")

//Locator
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
const ttles = ".card-body b"
const prdct = "//b[normalize-space()='IPHONE 13 PRO']"
const prdctname = "IPHONE 13 PRO"


//Actual Testcase
test("Register and login E2E testcase", async ({page})=>{
    const product = page.locator(".card-body")
    await page.goto(url);
    await page.locator(register).click();
    await page.locator(Fname).fill(fnametxt, {delay:200});
    await page.locator(lname).fill(lnametxt, {delay:200});
    await page.locator(email).fill(emailtxt, {delay:200});
    await page.locator(numb).fill(numbtxt, {delay:200});
    await page.locator(ocptn).selectOption(ocptntxt);
    await page.locator(gndr).first().click();
    await page.locator(pass).fill(passtxt, {delay:200});
    await page.locator(cnfrmpass).fill(passtxt, {delay:200});
    await page.locator(regis).click();
    await page.locator(lgn).click();
    await page.locator(email).fill(emailtxt, {delay:200});
    await page.locator(pass).fill(passtxt, {delay:200});
    await page.locator(regis).click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(ttles).allTextContents();
    console.log(titles);
    const count  = await product.count();
    for(let i=0;i<count;i++)
    {
        const pr = await product.nth(i).locator("").textContent();
        if(pr === prdctname)
        {
            await page.locator().click();
        }
    }
    //await page.locator(prdct).click();


})