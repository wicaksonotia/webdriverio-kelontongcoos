import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to see the list of categories and products$/, async () => {
    // await StoreListScreen.chooseLoc();
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.seeCathegoryandProduct();

    // await BerandaScreen.clickPesanAntar();
});