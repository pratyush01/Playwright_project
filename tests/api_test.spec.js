const {test, expect, request} = require('@playwright/test');
const loginpayload = {userEmail: "pratyushmahlawat@gmail.com", userPassword: "Kiyansh220822!@"};

test.beforeAll( () => {
    const api_context = request.newContext();
    const res_login = api_context.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginpayload
        });
    expect(res_login.ok());
});

test("Verify Login with API call", async({page}) => {

});