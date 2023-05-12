import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class StoreListScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="listOfStore"]');
    }
    
    //define selectors using getter methods
    private get pesanan () { return $('~pesanan'); }
    private get linkToOrderList () { return $('~linkToOrderList'); }
    private get searchClientInput () { return $('//*[@resource-id="search-client-input"]'); }
    private get cardStoreProd () { return $('~2111528'); }
    private get cardStoreFirst () { return $('~1191419'); }
    private get cardStoreLast () { return $('~1173789'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        // await expect(this.linkToOrderList).toBeDisplayed();
        // await expect(this.searchClientInput).toBeDisplayed();
        await expect(this.cardStoreFirst).toBeDisplayed();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await driver.pause(3000);
        await Gestures.swipeDownCustom();
        await Gestures.swipeDownCustom();
        await driver.pause(3000);
        // await Gestures.swipeDownCustom();
    }

    async pageProd () {
        await WebView.waitForWebViewContextLoaded();
        // await expect(this.linkToOrderList).toBeDisplayed();
        // await expect(this.searchClientInput).toBeDisplayed();
        await expect(this.cardStoreProd).toBeDisplayed();
    }

    async clickStore () {
        // await Gestures.swipeUpCustom();
        // await driver.pause(2000);
        // await Gestures.swipeDownCustom();
        // await driver.pause(2000);
        await this.cardStoreFirst.click();
        await driver.pause(5000);
    }

    async clickStoreProd () {
        await this.cardStoreProd.click();
        await driver.pause(5000);
    }
     
    async clickLinkToOrderList () {
        await this.linkToOrderList.click();
    }

    async historyPesanan () {
        await this.pesanan.click();
    }
}

export default new StoreListScreen();