const { delay } = require("../../utils/delay");
const { browser, expect } = require("@wdio/globals")
const Page = require("../pageobjects/page");
const path = require("path")

class AuthenticationPage extends Page {
    async clickMasuk() {
        const masukButton = await $(`//android.view.ViewGroup[@content-desc="Masuk"]`);

        await delay(1000);
        await driver.saveScreenshot(path.join(process.cwd(), `snapshot/authentication.png`))
        expect(masukButton).toBeClickable({
            message: "Success Click Authentication Lanjut"
        });
        await masukButton.click();
    }
}

module.exports = AuthenticationPage;