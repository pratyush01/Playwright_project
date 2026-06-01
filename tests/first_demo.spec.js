// Import the 'test' object from Playwright testing framework to define test cases
const{test} = require('@playwright/test');

const url = "https://rahulshettyacademy.com/loginpagePractise/";
// Define a test case with description "First test with browser context" that accepts a browser object parameter
test("First test with browser context", async ({browser}) => {
    // Note: This test is currently empty and contains no test logic or assertions
    //first we need to create an instance to for browser chrome

    const context = await browser.newContext();   //we are opening new browser with fresh instance like no cookies like incognito mode
    const page = await context.newPage();     // These 2 lines we can comment because these step will be handle direct by playwright
    await page.goto(url);


});

test("First test with page context", async ({page}) => {
    // Note: This test is currently empty and contains no test logic or assertions
    //first we need to create an instance to for browser chrome

    // const context = await browser.newContext();   //we are opening new browser with fresh instance like no cookies like incognito mode
    // const page = await context.newPage();     // These 2 lines we can comment because these step will be handle direct by playwright
    await page.goto(url);


});