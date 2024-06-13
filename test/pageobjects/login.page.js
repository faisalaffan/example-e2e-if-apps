const {delay} = require("../../utils/delay");
const {expect} = require("@wdio/globals");
const Page = require("../pageobjects/page");
const path = require("path")

class LoginPage extends Page {
    constructor(dataLogin) {
        super();
        this.dataLogin = dataLogin;
    }

    async filledForm() {
        const inputHP = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText");

        const inputPassword = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText")

        await inputHP.setValue(this.dataLogin.hp);
        await inputPassword.setValue(this.dataLogin.password);
    }

    async clickMasuk() {
        const masukButton = await $(`//android.view.ViewGroup[@content-desc="Masuk"]`);

        await delay(1000);
        await driver.saveScreenshot(path.join(process.cwd(), `snapshot/login.png`))
        await masukButton.click();
        await delay(4000);
        await driver.saveScreenshot(path.join(process.cwd(), `snapshot/success-login.png`));
        await delay(10000);
    }
}

module.exports = LoginPage;