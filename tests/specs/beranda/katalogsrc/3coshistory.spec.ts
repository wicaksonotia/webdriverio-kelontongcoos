import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/katalogsrc/storelistScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/katalogsrc/historyOrderScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/katalogsrc/detailpembelianScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to check my order history$/, async () => {
    await StoreListScreen.page();
    await StoreListScreen.clickLinkToOrderList();
    await HistoryOrderScreen.page();
    await HistoryOrderScreen.checkOrderHistory();
    await DetailPembelianScreen.page();

    // await BerandaScreen.page();
});