import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class StoreScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }

    //define selectors using getter methods    
    private get headerSearchInput() { return $('//*[@resource-id="header-search-input"]'); }
    private get linkToCart() { return $('~linkToCart'); }
    private get linkToOrderList() { return $('~linkToOrderList'); }

    private get btnSubscription() { return $('//*[@resource-id="btn-subscription"]'); }

    private get btnFavoritku() { return $('//*[@resource-id="category-0"]'); }
    private get btnRokok() { return $('//*[@resource-id="category-1"]'); }
    private get btnMakanan() { return $('//*[@resource-id="category-2"]'); }
    private get btnMinuman() { return $('//*[@resource-id="category-3"]'); }
    private get btnPerawatan() { return $('//*[@resource-id="category-4"]'); }
    private get btnAlatTulis() { return $('//*[@resource-id="category-5"]'); }
    private get btnPerabotan() { return $('//*[@resource-id="category-6"]'); }
    private get btnLainLain() { return $('//*[@resource-id="category-7"]'); }

    //TOKO JENI
    // private get cardProductRokok () { return $('~7a8a48e3-1023-4eb3-8d62-4c2348bef971'); } //Dji Sam Soe Kretek 16
    // private get cardProductMakanan () { return $('~3ff30280-e958-4a6f-bf75-6e20a6f4b0b7'); } //Indomie Rasa Soto Mie

    //Stevanny Wknd
    private get cardProductRokok() { return $('~86b07b9d-d6ac-45fa-90f2-7ecf5eec4a88'); } //Dji Sam Soe Kretek 16
    private get cardProductMakanan() { return $('~94157730-6168-48da-8401-f3d5c20989b6'); } //citra

    private get cardProduct() { return $('~e8e97aba-02c5-4866-b312-f5a4904d471a'); } //product qa 2 updated
    // private get cardProductLast () { return $('~65c2cafd-742b-47e2-8e9b-16454c77c309'); } //ABC Kecap

    //Stevanny Wknd
    private get cardProductLast() { return $('~63a4c9d4-b9d9-4541-b36e-b12a55226ac4'); } //ABC Kecap

    private get cardProductProd() { return $('~1d1d60fb-3ec8-44f5-be8d-53de2e972d0a'); }
    private get cardProductLastProd() { return $('~e0d990ef-ee8f-4c17-8cfe-e7b3b1a2e5d9'); }

    private get btnGoBack() { return $('~btnGoBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await WebView.waitForWebViewContextLoaded();
        // await expect(this.headerSearchInput).toBeDisplayed();
        // await expect(this.linkToCart).toBeDisplayed();
        // await expect(this.linkToOrderList).toBeDisplayed();
        await expect(this.btnSubscription).toBeDisplayed();
        await expect(this.btnFavoritku).toBeDisplayed();
        // await expect(this.btnMakanan).toBeDisplayed();
        // await expect(this.btnMinuman).toBeDisplayed();
        // await expect(this.btnPerawatan).toBeDisplayed();
        // await expect(this.btnAlatTulis).toBeDisplayed();
        // await expect(this.btnPerabotan).toBeDisplayed();
        // await expect(this.btnLainLain).toBeDisplayed();
    }

    async clickRokok() {
        await this.btnRokok.click();
        await driver.pause(3000);
    }

    async clickMakanan() {
        await this.btnMakanan.click();
        await driver.pause(3000);
    }

    async seeCathegoryandProduct() {
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await driver.pause(5000);
    }

    async seeCathegoryandProductProd() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.cardProductLastProd, 15);
        await expect(this.cardProductLastProd).toBeDisplayed();
        await driver.pause(3000);
    }

    async clickProduct() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.cardProductLast, 15);
        await expect(this.cardProduct).toBeDisplayed();
        await Gestures.swipeDownCustom();
        await this.cardProduct.click();
        await driver.pause(3000);
    }

    async clickProductProd() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.cardProductLastProd, 15);
        await expect(this.cardProductProd).toBeDisplayed();
        await this.cardProductProd.click();
        await driver.pause(3000);
    }

    async clickLinkToOrderList() {
        await this.linkToOrderList.click();
    }

    async back() {
        await this.btnGoBack.click();
    }
}

export default new StoreScreen();