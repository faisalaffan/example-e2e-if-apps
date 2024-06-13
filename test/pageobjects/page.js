const {browser, expect} = require("@wdio/globals")
const {delay} = require("../../utils/delay")
const path = require("path")

class Page {
    async initialize() {
        await delay(2000);
        await this.allowVideo();
        await this.allowLocation();
        await this.allowFile();
    }


    async allowVideo() {
        await driver.saveScreenshot(path.join(process.cwd(), "snapshot/allow-video.png"))
        const videoElement = await $("//hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");
        expect(videoElement).toBeClickable({
            message: "Success Click Allow Video"
        });
        await videoElement.click();
    }

    async allowLocation() {
        await driver.saveScreenshot(path.join(process.cwd(), "snapshot/allow-location.png"))
        const locationElement = await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.Button[1]");
        expect(locationElement).toBeClickable({
            message: "Success Click Allow Location"
        });
        await locationElement.click();
    }

    async allowFile() {
        await delay(1000);
        await driver.saveScreenshot(path.join(process.cwd(), "snapshot/allow-file.png"))
        const fileElement = await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");
        expect(fileElement).toBeClickable({
            message: "Success Click Allow File"
        });
        await fileElement.click();
    }
}

module.exports = Page;
