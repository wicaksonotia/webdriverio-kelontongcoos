import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class DetailProdukScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View');
    }
    
    //define selectors using getter methods
    private get headerSearchInput () { return $('//*[@resource-id="header-search-input"]'); }
    private get linkToCart () { return $('~linkToCart'); }
    private get linkToOrderList () { return $('~linkToOrderList'); }
    private get btnAddToCart () { return $('//*[@resource-id="btnAddToCart"]'); }
    private get btnAddQuantity () { return $('//*[@resource-id="btnAddQuantity"]'); }
    private get btnAddQuantityToCart () { return $('//*[@resource-id="btnAddQuantityToCart"]'); }
    private get btnGoBack () { return $('//*[@resource-id="btnGoBack"]'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.headerSearchInput).toBeDisplayed();
        await expect(this.linkToCart).toBeDisplayed();
        await expect(this.linkToOrderList).toBeDisplayed();
        await expect(this.btnAddToCart).toBeDisplayed();
    }

    async makeOrder () {
        await this.btnAddToCart.click();
        // await this.btnAddQuantity.click();
        await this.btnAddQuantity.click();
        await this.btnAddQuantityToCart.click();
        await driver.pause(8000);
        await this.linkToCart.click();
        await driver.pause(5000);
    } 

    async makeOrderRokok () {
        await this.btnAddToCart.click();
        await this.btnAddQuantityToCart.click();
        await driver.pause(5000);
    } 

    async makeOrderMakanan () {
        await this.btnAddToCart.click();
        await this.btnAddQuantityToCart.click();
        await driver.pause(7000);
        await this.linkToCart.waitForDisplayed();
        await this.linkToCart.click();
        await driver.pause(5000);
    } 

    async back () {
        await this.btnGoBack.click();
    }
}

export default new DetailProdukScreen();