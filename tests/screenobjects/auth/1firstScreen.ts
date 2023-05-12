import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class FirstScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get btnDaftarAkun () { return $('~btnDaftarAkun'); }
    private get txtMasuk () { return $('~txtMasukDisini'); }
    private get permissionAllow () { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'); }

    //a method to encapsule automation code to interact with the page
    async masuk () {
        await this.permissionAllow.click();
        await expect(this.txtMasuk).toBeDisplayed();
        await this.txtMasuk.click();
    }

    async createAccount () {
        await this.permissionAllow.click();
        await expect(this.btnDaftarAkun).toBeDisplayed();
        await this.btnDaftarAkun.click();
        await driver.pause(3000);
    }
}

export default new FirstScreen();