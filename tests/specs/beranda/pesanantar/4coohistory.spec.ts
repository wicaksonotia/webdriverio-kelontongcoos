import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/pesanantar/historyOrderScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/pesanantar/detailpembelianScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to check my order history$/, async () => {
    // await StoreListScreen.chooseLoc();
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.clickLinkToOrderList();
    await HistoryOrderScreen.page();
    await HistoryOrderScreen.checkOrderHistory();
    await DetailPembelianScreen.page();
    await DetailPembelianScreen.back();
    await HistoryOrderScreen.page();

    // await BerandaScreen.page();
});