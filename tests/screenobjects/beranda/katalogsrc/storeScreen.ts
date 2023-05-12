import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class StoreScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }
    
    //define selectors using getter methods
    private get headerSearchInput () { return $('//*[@resource-id="header-search-input"]'); }
    private get linkToCart () { return $('~linkToCart'); }
    private get linkToOrderList () { return $('~linkToOrderList'); }
    private get btnFavoritku () { return $('//*[@resource-id="category-category-0"]'); }
    private get btnMerchandise () { return $('//*[@resource-id="category-category-42"]'); }
    private get btnKhususKaryawan () { return $('//*[@resource-id="category-category-43"]'); }
    private get cardProductFirstProd () { return $('~7d9e4f62-d42d-48e5-9067-4f3f9c981e68'); }
    private get cardProductProd () { return $('~26d5e8f3-ebdc-4ef4-8231-001be6432cba'); }
    private get cardProduct () { return $('~cc5373b7-646f-4a49-a0f3-f4bbc88878ea'); }
    private get cardProductLast () { return $('~f9d6be36-c62b-40ad-a729-a55abf4372a0'); }
    private get btnGoBack () { return $('~btnGoBack'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.btnFavoritku).toBeDisplayed();
        await expect(this.btnMerchandise).toBeDisplayed();
        // await expect(this.btnKhususKaryawan).toBeDisplayed();
    }

    async pageProd () {
        await expect(this.cardProductFirstProd).toBeDisplayed();
    }

    async seeCathegoryandProduct () {
        await expect(this.cardProduct).toBeDisplayed();
        await Gestures.swipeUpCustom();
        await expect(this.cardProductLast).toBeDisplayed();
        await driver.pause(3000);
        await Gestures.swipeDownCustom();
        await expect(this.cardProduct).toBeDisplayed();
        await driver.pause(3000);
    }

    async seeCathegoryandProductProd () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.cardProductProd, 15);
        await expect(this.cardProductProd).toBeDisplayed();
        await driver.pause(3000);
    }

    async clickProduct (){
        await Gestures.swipeUpCustom();
        await driver.pause(3000);
        await this.cardProduct.click();
        await driver.pause(5000);
    }

    async back () {
        await this.btnGoBack.click();
    }
}

export default new StoreScreen();