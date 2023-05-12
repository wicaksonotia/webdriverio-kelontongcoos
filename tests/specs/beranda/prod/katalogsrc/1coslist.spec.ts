import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/katalogsrc/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/katalogsrc/storeScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {   
    await BerandaScreen.page();
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
});

Then(/^I should be able to see the list of categories and products$/, async () => {
    // await StoreListScreen.page(); //qa
    await StoreListScreen.pageProd();
    // await StoreListScreen.clickStore(); //qa
    await StoreListScreen.clickStoreProd(); //prod
    // await StoreScreen.page(); //qa
    await StoreScreen.pageProd(); //prod
    // await StoreScreen.seeCathegoryandProduct(); //qa
    await StoreScreen.seeCathegoryandProductProd(); //prod
});