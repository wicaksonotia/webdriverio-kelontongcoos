import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class SecurityCodeScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }

    //define selectors using getter methods
    private get btnKeamanan1 () { return $('~btnKodeKeamanan_1'); }
    private get btnKeamanan2 () { return $('~btnKodeKeamanan_4'); }
    private get btnKeamanan3 () { return $('~btnKodeKeamanan_7'); }
    private get btnKeamanan4 () { return $('~btnKodeKeamanan_2'); }
    private get btnKeamanan5 () { return $('~btnKodeKeamanan_5'); }
    private get btnKeamanan6 () { return $('~btnKodeKeamanan_8'); }
    private get btnKirim () { return $('~btnKirim'); }

    //a method to encapsule automation code to interact with the page
    async inputSecurityCode () {
        await this.btnKeamanan1.click();
        await this.btnKeamanan2.click();
        await this.btnKeamanan3.click();
        await this.btnKeamanan4.click();
        await this.btnKeamanan5.click();
        await this.btnKeamanan6.click();
    }

    async kirim () {
        await this.btnKirim.click();
        await driver.pause(6000);
    }
}

export default new SecurityCodeScreen();