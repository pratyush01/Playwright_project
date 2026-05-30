const {test,expect} = require("@playwright/test")

test("My first test", async function ({page}) {
    expect(12).toBe(12)
})

test("My second test", async function ({page}) {
    expect(1).toBe(1)
})

test("My third test", async function ({page}) {
    expect("Pratyush mahalawat").toContain("Pratyush")
    expect(true).toBeTruthy()
})