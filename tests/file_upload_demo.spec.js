const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1920,height:887}})

//Locator:
const url = "https://the-internet.herokuapp.com/upload"
const filebtn = "#file-upload"
const flesbmt = "#file-submit"
const fleh3 = "//h3"
///Users/pratyushmahalawat/Downloads/Mac_doc.docx


test("File upload demo", async function ({page}) {
    await page.goto(url)
    await page.locator(filebtn).setInputFiles("./upload/Mac_doc.docx")
    await page.locator(flesbmt).click()
    expect(await page.locator(fleh3)).toHaveText("File Uploaded!")
})