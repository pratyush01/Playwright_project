const {test, expect} = require('@playwright/test');

const url = "https://rahulshettyacademy.com/loginpagePractise/";



test("First fill username and password test", async ({page}) => {

    //locators
    const username = page.locator("//input[@id='username']");
    const usertext = "pratyush081092@gmail.com";
    const usertext2 = "rahulshettyacademy";
    const password = page.locator("//input[@id='password']");
    const passwordtext = "rahulshettyacademy";
    const passwordtext2 = "Learning@830$3mK2";
    const signInBtn = page.locator("//input[@id='signInBtn']");
    const checkbox = "//input[@id='terms']";
    const errorMsg = page.locator("//div[@class='alert alert-danger col-md-12']");
    const iphonx = page.getByText("iphone X");

    await page.goto(url);
    
    await username.fill(usertext, {delay: 100});
    await password.fill(passwordtext, {delay: 100});
    await page.locator(checkbox).check();
    await signInBtn.click();
    await expect(errorMsg).toContainText("Incorrect username/password.");
    await username.fill("");
    await username.fill(usertext2, {delay: 100});
    await password.fill("");
    await password.fill(passwordtext2, {delay: 100});
    await signInBtn.click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    await expect(iphonx).toBeVisible();
    await page.get


}
)