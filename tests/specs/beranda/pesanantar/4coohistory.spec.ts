import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/pesanantar/historyOrderScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/pesanantar/detailpembelianScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000);
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to check my order history$/, async () => {
    // await StoreListScreen.chooseLoc();
    await driver.pause(5000);
    await StoreListScreen.clickStore();
    await driver.pause(5000);
    await StoreScreen.clickLinkToOrderList();
    await driver.pause(5000);
    await HistoryOrderScreen.checkOrderHistory();
    await driver.pause(5000);
    await DetailPembelianScreen.back();
    await driver.pause(5000);
});