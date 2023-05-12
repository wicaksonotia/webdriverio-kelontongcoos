import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get cbDSA () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); }
    private get btnLanjut () { return $('~btnLanjut'); }
    private get menuPesanAntar () { return $('~menuPesanAntar'); }
    private get menuHiburan () { return $('~menuHiburan'); }
    private get menuPeluang () { return $('~menuPeluang'); }
    private get menuSRCTerdekat () { return $('~menuSRCTerdekat'); }
    private get menuKatalogSRC () { return $('~menuKatalogSRC'); }
    private get bottomBarDaftarBelanja () { return $('~bottomBarDaftarBelanja'); }
    private get bottomBarAkunSaya () { return $('~bottomBarAkunSaya'); }
    private get bottomBarBeranda () { return $('~bottomBarBeranda'); }
    private get btnVoucher () { return $$('~btnVoucher'); }
    private get btnBack() { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page 
    async page () {
        await expect(this.menuPesanAntar).toBeDisplayed();
        // await expect(this.menuHiburan).toBeDisplayed();
        // await expect(this.menuPeluang).toBeDisplayed();
        // await expect(this.menuSRCTerdekat).toBeDisplayed();
        // await expect(this.menuKatalogSRC).toBeDisplayed();
        await expect(this.bottomBarDaftarBelanja).toBeDisplayed();
        // await expect(this.bottomBarAkunSaya).toBeDisplayed();
        // await expect(this.bottomBarBeranda).toBeDisplayed();
        // await expect(this.btnVoucher).toBeDisplayed();
        await driver.pause(500);
    }

    async clickLanjut () {
        await this.cbDSA.click();
        await this.btnLanjut.click();
    }

    async clickPesanAntar () {
        await this.menuPesanAntar.click();
    } 

    async clickHiburan () {
        await this.menuHiburan.click();
    }

    async clickPeluang() {
        await this.menuPeluang.click();
    }  

    async clickTerdekat () {
        await this.menuSRCTerdekat.click();
    }  

    async clickKatalogSRC() {
        await this.menuKatalogSRC.click();
    }  

    async clickDaftarBelanja () {
        await this.bottomBarDaftarBelanja.click();
    }  

    async clickAkunSaya () {
        await this.bottomBarAkunSaya.click();
    }  

    async clickBeranda () {
        await this.bottomBarBeranda.click();
    }  

    async clickVoucher () {
        await this.btnVoucher?.[2]?.click();
    }  
}

export default new BerandaScreen();