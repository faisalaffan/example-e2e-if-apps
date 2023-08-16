const {delay} = require("../../utils/delay");
const {expect} = require("@wdio/globals")
const Page = require("../pageobjects/page");
const path = require("path")

class IntroPage extends Page {
    async nextButton(msg, slideKe) {
        await delay(1000);
        if (slideKe !== '3') {
            const lanjutButtonTwoState = await $("//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView");

            await driver.saveScreenshot(path.join(process.cwd(), `snapshot/intro-${slideKe}.png`))
            await lanjutButtonTwoState.click();
        }
        if (slideKe === '3') {
            const lanjutButtonOneState = await $("//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView");

            await driver.saveScreenshot(path.join(process.cwd(), `snapshot/intro-${slideKe}.png`))
            await lanjutButtonOneState.click();
        }
    }
}

module.exports = IntroPage;