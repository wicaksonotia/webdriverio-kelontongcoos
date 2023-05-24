import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class DetailBelanjaScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View');
    }

    //define selectors using getter methods
    private get btnGantiPilihanKurir() { return $('//*[@resource-id="btnChange-summaryCourier"]'); }
    private get selectKurir() { return $('//*[@resource-id="checkoutDelivery-b165395b-35b0-4201-904b-73f4683d540b"]'); }
    private get btnPilih() { return $('//*[@resource-id="btnSelectDelivery"]'); }
    private get btnGantiPilihanPembayaran() { return $('//*[@resource-id="btnChange-summaryPayment"]'); }
    private get selectPembayaran() { return $('//*[@resource-id="checkoutPayment-d7385f70-ea20-4740-b4bb-f31ec217d15c"]'); }
    private get btnPilihMetodeIni() { return $('//*[@resource-id="btnSelectPayment"]'); }
    private get btnCheckoutOrder() { return $('//*[@resource-id="btnCheckoutOrder"]'); }
    private get btnCheckOrderDetail() { return $('~btnCheckOrderDetail'); }
    private get btnCheckOrderStatus() { return $('//*[@resource-id="btnCheckOrderStatus"]'); }
    private get btnGoBack() { return $('//*[@resource-id="btnGoBack"]'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.btnGantiPilihanKurir).toBeDisplayed();
        await expect(this.btnGantiPilihanPembayaran).toBeDisplayed();
        await expect(this.btnCheckoutOrder).toBeDisplayed();
    }

    async makeOrder() {
        await this.btnGantiPilihanKurir.click();
        await this.selectKurir.click();
        await this.btnPilih.click();
        await driver.pause(3000);

        await this.btnGantiPilihanPembayaran.click();
        await this.selectPembayaran.click();
        await this.btnPilihMetodeIni.click();
        await driver.pause(3000);

        await Gestures.swipeUpCustom();
        await this.btnCheckoutOrder.click();
        await driver.pause(5000);
    }

    async checkOrderDetail() {
        await expect(this.btnCheckOrderDetail).toBeDisplayed();
        await driver.pause(3000);
        await this.btnCheckOrderDetail.click();
    }

    async checkStatusOrder() {
        await driver.pause(3000);
        await this.btnCheckOrderStatus.click();
    }

    async back() {
        await this.btnGoBack.click();
    }
}

export default new DetailBelanjaScreen();