const {test,expect} = require("@playwright/test")

//Locators
const URL = "https://rahulshettyacademy.com/angularpractice/"
const name = "Name"
const nametxt = "Pratyush Mahalawat"
const email = "Email"
const emailtxt = "pratyush081092@gmail.com"
const Pass = "Password"
const passtxt = "Password@12"
const checkbox = "Check me out if you Love IceCreams!"
const gendr = "Gender"
const empstatus = "Student"
const DOB = "Date of Birth"
const DOBtxt = "23012025"
const subbtn = "Submit"
const QAmeet = ""

test("New Locator introduced by playwright", async function ({page}) {
    await page.goto(URL);
    await page.getByLabel(name).fill(nametxt, {delay: 200});
    await page.getByLabel(email).fill(emailtxt, {delay: 200});
    await page.getByPlaceholder(Pass).fill(passtxt, {delay: 200});
    await page.getByLabel(checkbox).click();
    await page.getByLabel(gendr).selectOption("Female");
    await page.getByLabel(empstatus).click();
    await page.getByLabel(DOB).fill(DOBtxt);
    await page.getByRole("button", {name: subbtn}).click();

})