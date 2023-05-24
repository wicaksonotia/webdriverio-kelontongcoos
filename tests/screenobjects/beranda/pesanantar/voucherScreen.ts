import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class VoucherScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }

    //define selectors using getter methods
    private get btnVoucherFirst() { return $('//*[@resource-id="btnVoucher-1318"]'); } // butuh update
    private get btnVoucherLast() { return $('//*[@resource-id="btnVoucher-1318"]'); } // butuh update
    private get btnVoucher() { return $('//*[@resource-id="btnVoucher-997"]'); } // butuh update
    private get btnSelectVoucher() { return $('//*[@resource-id="btnChange-summaryVoucher"]'); }
    private get btnGoBack() { return $('~btnGoBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.btnVoucher).toBeDisplayed();
    }

    async selectVoucher() {
        await this.btnVoucherLast.click();
    }

    async useVoucher() {
        await this.btnSelectVoucher.click();
        await driver.pause(3000);
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await driver.pause(3000);
    }

    async back() {
        await this.btnGoBack.click();
    }
}

export default new VoucherScreen();