import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class CartScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="content__scroll"]');
    }
    
    //define selectors using getter methods
    private get btnAddQuantity () { return $('//*[@resource-id="btnAddQuantity"]'); }
    private get btnTambahkanBelanjaan () { return $('//*[@resource-id="btnShopMore"]'); }
    private get btnConfirmPurchases () { return $('//*[@resource-id="btnConfirmPurchases"]'); }
    private get btnYa () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.widget.Button[1]'); }
    private get btnGoBack () { return $('~btnGoBack'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.btnAddQuantity).toBeDisplayed();
        await expect(this.btnTambahkanBelanjaan).toBeDisplayed();
        await expect(this.btnConfirmPurchases).toBeDisplayed();
    }

    async makeOrder () {
        await driver.pause(5000);
        await this.btnConfirmPurchases.click();
        await driver.pause(5000);
    }

    async accRokok () {
        await this.btnYa.waitForDisplayed();
        await this.btnYa.click();
        await driver.pause(5000);
    }

    async back () {
        await this.btnGoBack.click();
    }
}

export default new CartScreen();