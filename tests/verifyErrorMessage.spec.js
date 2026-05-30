const {test,expect} = require('@playwright/test')

const user = "Username"
const pass = "Password"
const lgnbtn = "//button[@type='submit']"
const ermsg = "//p[text()='Invalid credentials']"

test.use({viewport:{width:1470,height:756}})

test("Verify the Error Mesage", async function ({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/auth/login")

    await page.getByPlaceholder(user).type("Admin",{delay:200})
    await page.getByPlaceholder(pass).type("admin1234",{delay:200})
    await page.locator(lgnbtn).click()
    //await expect(ermsg).toContain("Invalid credentials")
    const ermsg1 = await page.locator(ermsg).textContent()
    console.log("Error Message is " +ermsg1)

    expect(ermsg1.includes("Invalid")).toBeTruthy() //This is to checking partially

    expect(ermsg1==="Invalid credentials").toBeTruthy() //This will check full instance


})