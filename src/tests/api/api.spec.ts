import {test, expect} from '@playwright/test'

test.describe.parallel.only("API Testing", ()=>{
    const baseUrl = "http:regres.in/api";

    test("Simple API Test - Assert Response Status",async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`);
        expect(response.status()).toBe(200);
    })

    test("Simple API Test - Assert Invalid Endpoint",async ({request}) => {
        const response = await request.get(`https://oslogin.googleapis.com/v1/%7Bname=users/*%7D/loginProfile`);
        expect(response.status()).toBe(404);
    })
})