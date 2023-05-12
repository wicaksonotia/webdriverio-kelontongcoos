import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class LandingScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    
    //define selectors using getter methods
    private get txtLewati () { return $('~buttonTextLewati'); }
    private get btnLanjut () { return $('~btnLanjut'); }
    private get btnMulai () { return $('~btnMulai'); }

    //a method to encapsule automation code to interact with the page
    async mulai () {
        await expect(this.txtLewati).toBeDisplayed();
        await expect(this.btnLanjut).toBeDisplayed();
        await this.btnLanjut.click();
        await this.btnLanjut.click();
        await this.btnMulai.click();
    }
}

export default new LandingScreen();