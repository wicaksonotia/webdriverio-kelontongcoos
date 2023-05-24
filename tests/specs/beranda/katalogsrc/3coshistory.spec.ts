import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/katalogsrc/storelistScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/katalogsrc/historyOrderScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/katalogsrc/detailpembelianScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000);
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
});

Then(/^I should be able to check my order history$/, async () => {
    await driver.pause(5000);
    await StoreListScreen.clickLinkToOrderList();
    await driver.pause(5000);
    await HistoryOrderScreen.checkOrderHistory();
    await driver.pause(5000);
});