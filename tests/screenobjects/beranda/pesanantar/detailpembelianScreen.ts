import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class DetailPembelianScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View');
    }
    
    //define selectors using getter methods
    private get btnChatSeller () { return $('//*[@resource-id="btnChatSeller"]'); }
    private get btnCancelOrder () { return $('//*[@resource-id="btnCancelOrder"]'); }
    private get btnConfirmOrder () { return $('//*[@resource-id="btnReceivedConfirmation"]'); }
    private get btnGoBack () { return $('//*[@resource-id="btnGoBack"]'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnChatSeller, 50);
        await expect(this.btnChatSeller).toBeDisplayed();
        // await expect(this.btnCancelOrder).toBeDisplayed();
    }

    async confirmOrder () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnConfirmOrder, 50);
        await expect(this.btnConfirmOrder).toBeDisplayed();
        await this.btnConfirmOrder.click();
    }

    async back () {
        await this.btnGoBack.click();
    }
}

export default new DetailPembelianScreen();