// Import 'test' and 'expect' from Playwright testing framework for test definition and assertions
const {test,expect} = require("@playwright/test")

// Define first test case for basic assertion testing
test("My first test", async function ({page}) {
    // Assert that number 12 equals 12 (basic numeric equality check)
    expect(12).toBe(12)
})

// Define second test case for basic numeric assertion
test("My second test", async function ({page}) {
    // Assert that number 1 equals 1 (basic numeric equality check)
    expect(1).toBe(1)
})

// Define third test case for string and boolean assertions
test("My third test", async function ({page}) {
    // Assert that the string "Pratyush mahalawat" contains the substring "Pratyush"
    expect("Pratyush mahalawat").toContain("Pratyush")
    // Assert that boolean value true is truthy
    expect(true).toBeTruthy()
})