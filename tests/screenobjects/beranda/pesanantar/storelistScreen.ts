import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class StoreListScreen extends AppScreen {
    constructor() {
        super('//*[@resource-id="listOfStore"]');
    }

    //define selectors using getter methods
    private get location() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.Button'); }
    private get btnGetLocPermission() { return $('//*[@resource-id="btnGetLocPermission"]'); }
    private get linkToOrderList() { return $('~linkToOrderList'); }
    private get searchClientInput() { return $('//*[@resource-id="search-client-input"]'); }
    private get cardStoreFirst() { return $('//*[@resource-id="store-2"]'); }
    private get cardStore() { return $('//*[@resource-id="store-2"]'); }

    //a method to encapsule automation code to interact with the page
    async ijinkanLokasi() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.btnGetLocPermission).toBeDisplayed();
        await this.btnGetLocPermission.click();
    }

    async chooseLoc() {
        await expect(this.location).toBeDisplayed();
        await this.location.click();
    }

    async page() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.linkToOrderList).toBeDisplayed();
        await expect(this.searchClientInput).toBeDisplayed();
        await expect(this.cardStoreFirst).toBeDisplayed();
    }

    async clickStore() {
        // await Gestures.checkIfDisplayedWithSwipeUp(await this.cardStore, 50);
        await Gestures.swipeUpCustom()
        await Gestures.swipeUpCustom()
        await this.cardStore.click();
        await driver.pause(5000);
    }

    async clickLinkToOrderList() {
        await this.linkToOrderList.click();
    }
}

export default new StoreListScreen();