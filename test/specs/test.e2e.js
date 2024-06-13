const {expect} = require("@wdio/globals");
const path = require('path');
const {delay} = require("../../utils/delay");

const Page = require("../pageobjects/page");
const IntroPage = require("../pageobjects/intro.page");
const AuthenticationPage = require("../pageobjects/authentication.page");
const LoginPage = require("../pageobjects/login.page");
const {LoginDataYantowati} = require("./data/login");


describe('Intro Screen Test', () => {
    it('initialize apps', async () => {
        const page = new Page();
        await page.initialize();
    })
    it('slide intro', async () => {
        const introPage = new IntroPage();
        await delay(1000);
        await introPage.nextButton("Berhasil Screenshot Intro ke 1", "1");
        await introPage.nextButton("Berhasil Screenshot Intro ke 2", "2");
        await introPage.nextButton("Berhasil Screenshot Intro ke 3", "3");
        await introPage.nextButton("Berhasil Screenshot Intro ke 4", "4");
    })
    it('page authentication', async () => {
        const authenticationPage = new AuthenticationPage();
        await delay(1000);
        await authenticationPage.clickMasuk();
    })
    it('page login', async () => {
        const loginPage = new LoginPage(LoginDataYantowati);
        await delay(1000);
        await loginPage.filledForm();
        await loginPage.clickMasuk();
    })
})

