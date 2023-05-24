import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000);
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
});

Then(/^I should be able to see the list of categories and products$/, async () => {
    await driver.pause(5000);
    await StoreListScreen.clickStore();
    await driver.pause(5000);
    await StoreScreen.seeCathegoryandProduct();
});