import LoginPage from "./pages/LoginPage";

Feature("Zero Bank Application - E2E Tests");

Before(({I})=>{
    console.log('BEFORE HOOK');   
    I.amOnPage('http://zero.webappsecurity.com/index.html');
})

After(({I})=>{
    console.log('AFTER HOOK');   
})

Scenario("Login Test - Negative", ({I})=>{
    I.click('#signin_button');
    I.seeElement("#login_form");

    LoginPage.submitLogin('invalid username', 'invalid password')
    LoginPage.assertLoginFormIsVisible();

    I.seeElement(".alert-error");
})