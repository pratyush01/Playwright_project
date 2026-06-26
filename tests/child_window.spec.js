const { test, expect } = require("@playwright/test");

// The test function will test the child window

test.describe("Child window test testing", () => {

    test("should handle child window", async ({ browser }) => {

        //Locators
        const URL = "https://rahulshettyacademy.com/loginpagePractise/";
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(URL);
        const link = page.getByText("Free Access to InterviewQues/ResumeAssistance/Material");
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            link.click()

        ]);
        const text = await newPage.locator(".red").textContent();
        console.log(text);
        const username = page.locator("#username");
        const domain = text.split("@")[1].split(" ")[0];
        const ema = text.split("@")[0].split(" ")[4];
        console.log(domain);
        console.log(ema);
        console.log(ema + "@" + domain);
        const email = ema + "@" + domain;
        await username.fill(email, { delay: 200 });
        await page.pause();
    });
})