import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/katalogsrc/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/katalogsrc/storeScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {   
    await BerandaScreen.page();
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to see the list of categories and products$/, async () => {
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.seeCathegoryandProduct();

    // await BerandaScreen.page();
});