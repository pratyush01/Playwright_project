const {test,expect} = require("@playwright/test")

//Window Maximise code 1920 × 887
test.use({viewport:{width:1920,height:887}})

//Locator
const url = "https://freelance-learn-automation.vercel.app/signup"
const drpdn = "#state"
const rurl = "https://rahulshettyacademy.com/loginpagePractise/"
const username = "#username"
const usrnametxt = "rahulshettyacademy"
const psstxt = "learning"
const pass = "#password"
const signin = "#signInBtn"
const drpdwn = "select.form-control"
const radbtn = ".radiotextsty"
const nrml = "#okayBtn"
const trms = "#terms"
const blinkr = "[href*='documents-request']"


test("Handle Dropdown", async function ({page}) {

    await page.goto(url)

    await page.locator(drpdn).selectOption({label:"Rajasthan"})
    await page.waitForTimeout(5000)
    
})

test.only("Rahul Shetty Dropwdown video tut", async function ({page}) {
    await page.goto(rurl)
    // await page.locator(username).fill("");
    await page.locator(username).fill(usrnametxt, {delay:200});
    // await page.locator(pass).fill("");
    await page.locator(pass).fill(psstxt, {delay:200});
    await page.locator(drpdwn).selectOption("consult");
    //await page.pause();
    await page.locator(radbtn).last().click();
    await page.locator(nrml).click();
    await expect(page.locator(radbtn).last()).toBeChecked();
    await page.locator(trms).click();
    await expect(page.locator(trms)).toBeChecked();
    // await page.locator(trms).uncheck();
    // expect(await page.locator(trms).isChecked).toBeFalsy();
    //await page.pause();
    await expect(page.locator(blinkr)).toHaveAttribute("class", "blinkingText")

})