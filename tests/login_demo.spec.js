const {test,expect} = require('@playwright/test')

//username : username : //input[@placeholder='username']
//password : password : //input[@placeholder='password']
//Login button: //button[normalize-space()='Login']
const user = "username"
const pass = "password"
const lgnbtn = "//button[@type='submit']"
const pic = "profile picture"
const lgout = "Logout"

test("Login on OrganeHRM Demo", async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/auth/login")
    await page.getByPlaceholder(user).type("Admin", {delay:200})
    await page.getByPlaceholder(pass).fill("admin123",{delay:200})
    
    await page.locator(lgnbtn).click()

    await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText(pic).first().click()
    await page.getByText(lgout).click()

    await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/login/)

    //await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    //await page.locator("//a[normalize-space()='Logout']").click()

})