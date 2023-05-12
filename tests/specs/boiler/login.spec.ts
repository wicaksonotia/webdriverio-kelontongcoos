import { Given, When, Then } from '@cucumber/cucumber';
import TabBar from '../../screenobjects/components/wdio/TabBar';
import LoginScreen from '../../screenobjects/LoginScreen';
import NativeAlert from '../../screenobjects/components/NativeAlert';

// beforeEach(async () => {
//     await TabBar.waitForTabBarShown();
//     await TabBar.openLogin();
//     await LoginScreen.waitForIsShown(true);
// });

    Given(/^I am on the login page Wdio apps$/, async () => {    
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
    });
    
    When(/^I login$/, async () => {
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
    });
    
    Then(/^should be able login successfully$/, async () => {
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });



