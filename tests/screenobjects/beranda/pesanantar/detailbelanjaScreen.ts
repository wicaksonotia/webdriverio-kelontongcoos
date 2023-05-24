import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
import WebView from '../../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class DetailBelanjaScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View');
    }

    //define selectors using getter methods
    private get btnGantiPilihanKurir() { return $('//*[@resource-id="btnChange-summaryCourier"]'); } //Metode Pengiriman
    // private get selectKurir () { return $('//*[@resource-id="label[1]-b057ea95-28c2-457c-a466-8643e70f1dd9"]'); }
    private get selectKurir() { return $('//*[@resource-id="label[0]-4a026e9b-f727-4458-9535-bb47b842d525"]'); }
    private get btnKonfirmasiMetodePengiriman() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.widget.Button'); }
    private get selectKurirProd() { return $('//*[@resource-id="checkoutDelivery-8e0b06c8-4c3d-4652-8adf-57d1f19f4df6"]'); }
    private get btnPilih() { return $('//*[@resource-id="btnSelectDelivery"]'); }
    private get btnGantiPilihanPembayaran() { return $('//*[@resource-id="btnChange-summaryPayment"]'); } //Metode Pembayaran
    private get selectPembayaran() { return $('//*[@resource-id="label[0]-eede4ec4-6075-4cda-b660-29a6f5666237"]'); }
    private get selectPembayaranProd() { return $('//*[@resource-id="checkoutPayment-47138bc9-995d-43a7-b941-ac0b2db65ed1"]'); }
    private get btnPilihMetodeIni() { return $('//*[@resource-id="btnSelectPayment"]'); }
    private get btnCheckoutPromo() { return $('//*[@resource-id="btnChange-summaryVoucher"]'); } //Voucher
    private get btnCheckoutOrder() { return $('//*[@resource-id="btnCheckoutOrder"]'); }
    private get locAllow() { return $('//*[@resource-id="com.android.chrome:id/positive_button"]'); }
    private get btnCheckOrderDetail() { return $('~btnCheckOrderDetail'); }
    private get btnCheckOrderStatus() { return $('//*[@resource-id="btnCheckOrderStatus"]'); }
    private get btnGoBack() { return $('//*[@resource-id="btnGoBack"]'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.btnGantiPilihanKurir).toBeDisplayed();
        await expect(this.btnGantiPilihanPembayaran).toBeDisplayed();
        await expect(this.btnCheckoutOrder).toBeDisplayed();
        // console.log('Total Bayar: '+await this.btnCheckoutOrder.getText());
    }

    async makeOrder() {
        await this.btnGantiPilihanKurir.click();
        await this.selectKurir.click();
        await driver.pause(3000);
        await this.btnKonfirmasiMetodePengiriman.click();
        await driver.pause(5000);
        await this.btnGantiPilihanPembayaran.click();
        await this.selectPembayaran.click();
        await driver.pause(3000);
        await this.btnKonfirmasiMetodePengiriman.click();
    }

    async makeOrderProd() {
        await this.btnGantiPilihanKurir.click();
        await expect(this.selectKurirProd).toBeDisplayed();
        await this.selectKurirProd.click();
        await expect(this.btnPilih).toBeDisplayed();
        await this.btnPilih.click();
        await driver.pause(3000);

        await this.btnGantiPilihanPembayaran.click();
        await expect(this.selectPembayaranProd).toBeDisplayed();
        await this.selectPembayaranProd.click();
        await expect(this.btnPilihMetodeIni).toBeDisplayed();
        await this.btnPilihMetodeIni.click();
        await driver.pause(3000);
    }

    async checkoutPromo() {
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnCheckoutPromo, 50);
        await Gestures.swipeUpCustom();
        await this.btnCheckoutPromo.click();
    }

    async allow() {
        await expect(this.locAllow).toBeDisplayed();
        await this.locAllow.click();
    }

    async checkoutOrder() {
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
        await expect(this.btnCheckOrderStatus).toBeDisplayed();
        await driver.pause(3000);
        await this.btnCheckOrderStatus.click();
    }

    async back() {
        await this.btnGoBack.click();
    }
}

export default new DetailBelanjaScreen();