const { delay } = require("../../utils/delay");
const { expect } = require("@wdio/globals")
const Page = require("../pageobjects/page");
const path = require("path")

class IntroPage extends Page {
    async nextButton(msg, slideKe) {
        await delay(1000);
        const lanjutButtonTwoState = await $(`//android.view.ViewGroup[@content-desc="Lanjut"]`);

        await driver.saveScreenshot(path.join(process.cwd(), `snapshot/intro-${slideKe}.png`))
        await lanjutButtonTwoState.click();
    }
}

module.exports = IntroPage;