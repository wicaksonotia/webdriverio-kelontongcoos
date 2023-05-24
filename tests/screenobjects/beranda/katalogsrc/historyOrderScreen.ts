import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class HistoryOrderScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View');
    }

    //define selectors using getter methods
    private get tabSemua() { return $('~Semua'); }
    private get tabDiubah() { return $('~Diubah'); }
    private get tabDibatalkan() { return $('~Dibatalkan'); }
    private get tabDiproses() { return $('~Diproses'); }
    private get tabDikirim() { return $('~Dikirim'); }
    private get orderStatus() { return $('//*[@resource-id="orderStatus[0]-0d5e3905-dbdf-454f-ba9a-cfef392b63c8"]'); }
    private get btnChatSeller() { return $('//*[@resource-id="btnChatSeller[0]-0d5e3905-dbdf-454f-ba9a-cfef392b63c8"]'); }
    private get linkOrderDetail() { return $('~linkOrderDetail[0]-06b625e1-14dc-4d4e-88c9-6266c5708d27'); }
    private get btnGoBack() { return $('//*[@resource-id="btnGoBack"]'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.tabSemua).toBeDisplayed();
        await expect(this.tabDiubah).toBeDisplayed();
        await expect(this.tabDibatalkan).toBeDisplayed();
        await expect(this.tabDiproses).toBeDisplayed();
        await expect(this.tabDikirim).toBeDisplayed();
    }

    async checkOrderHistory() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.linkOrderDetail, 50);
        await this.linkOrderDetail.click();
        await driver.pause(3000);
        await Gestures.swipeUpCustom();
        await driver.pause(5000);
    }

    async back() {
        await this.btnGoBack.click();
    }
}

export default new HistoryOrderScreen();