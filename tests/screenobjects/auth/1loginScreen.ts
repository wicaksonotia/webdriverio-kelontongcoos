import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class LoginScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get inputNoHP () { return $('~inpNomorPonsel'); }
    private get btnLanjut () { return $('~btnLanjut'); }

    //a method to encapsule automation code to interact with the page
    async loginKelontong ({ nohp } : { nohp:string; }) {
        await expect(this.inputNoHP).toBeDisplayed();
        await this.inputNoHP.setValue(nohp);
        await driver.hideKeyboard();
    }

    async lanjut () {
        await this.btnLanjut.click();
    }    
}

export default new LoginScreen();