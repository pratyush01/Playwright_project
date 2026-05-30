const {test,expect} = require("@playwright/test")
const { text } = require("stream/consumers")

//Window Maximise code 1920 × 887
//test.use({viewport:{width:1920,height:887}})

//Locator
const url = "https://rahulshettyacademy.com/loginpagePractise/"
const blnkr = "[href*='documents-request']"
const username = "#username"
const pass = "#password"
const psstxt = "learning"
const signin = "#signInBtn"
const drpdwn = "select.form-control"
const radbtn = ".radiotextsty"
const nrml = "#okayBtn"
const trms = "#terms"

//Test
test("Window and tabs handling", async function ({browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    
    // for Parallel execution of window handles we need to user promise.all array
    const [newPage] = await Promise.all(
        // Suppose if click opened two child windows then just
        // const [newPage, newPage1] = await Promise.all(
        [
        context.waitForEvent('page'),
        page.locator(blnkr).click(),
        ]
    )

    const text = await newPage.locator(".red").textContent();
    const arraytext = text.split("@")
    const mailText = arraytext[1].split(".")[0];
    console.log(mailText);
    await page.locator(username).fill(mailText, {delay:200});
    await page.pause();
    await page.locator(pass).fill(psstxt, {delay:200});
    await page.locator(radbtn).last().click();
    await page.locator(nrml).click();
    await page.locator(drpdwn).selectOption("consult");
    await page.locator(trms).click();
    await page.locator(signin).click();
    // This is listener for new page or window which is opened.
    // const page2 = context.waitForEvent('page');
    // await page.locator(blnkr).click();
})