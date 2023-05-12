import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class HistoryOrderScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View');
    }
    
    //define selectors using getter methods
    private get tabSemua () { return $('~Semua'); }
    private get tabDiubah () { return $('~Diubah'); }
    private get tabDibatalkan () { return $('~Dibatalkan'); }
    private get tabDiproses () { return $('~Diproses'); }
    private get tabDikirim () { return $('~Dikirim'); }
    private get orderStatus () { return $('//*[@resource-id="orderStatus[0]"]'); }
    private get btnChatSeller () { return $('//*[@resource-id="btnChatSeller-977d7ed4-8dad-4921-b67f-a05eec4c21bd"]'); }
    private get linkOrderDetail () { return $('//*[@resource-id="linkOrderDetail[0]"]'); }
    private get orderStatusProd () { return $('//*[@resource-id="orderStatus[-c14f2bde-c9a5-4b90-938f-1ee9c1f6bf2c]"]'); }
    private get btnChatSellerProd () { return $('//*[@resource-id="btnChatSeller-c14f2bde-c9a5-4b90-938f-1ee9c1f6bf2c"]'); }
    private get linkOrderDetailProd () { return $('//*[@resource-id="linkOrderDetail-c14f2bde-c9a5-4b90-938f-1ee9c1f6bf2c"]'); }
    private get btnGoBack () { return $('//*[@resource-id="btnGoBack"]'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.tabSemua).toBeDisplayed();
        await expect(this.tabDiubah).toBeDisplayed();
        await expect(this.tabDibatalkan).toBeDisplayed();
        await expect(this.tabDiproses).toBeDisplayed();
        await expect(this.tabDikirim).toBeDisplayed();
    }

    async checkOrderHistory () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.linkOrderDetail, 50);
        await expect(this.orderStatus).toBeDisplayed();
        // await expect(this.btnChatSeller).toBeDisplayed();
        await expect(this.linkOrderDetail).toBeDisplayed();
        await this.linkOrderDetail.click();
    } 

    async checkOrderHistoryProd () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.linkOrderDetailProd, 50);
        await expect(this.orderStatusProd).toBeDisplayed();
        await expect(this.btnChatSellerProd).toBeDisplayed();
        await expect(this.linkOrderDetailProd).toBeDisplayed();
        await this.linkOrderDetailProd.click();
    } 

    async back () {
        await this.btnGoBack.click();
    }
}

export default new HistoryOrderScreen();