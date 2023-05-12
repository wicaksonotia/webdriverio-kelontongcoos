import { Given, When, Then } from '@cucumber/cucumber';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/pesanantar/historyOrderScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/pesanantar/detailpembelianScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
});

Then(/^I should be able to check my order history$/, async () => {
    await StoreScreen.page();
    await StoreScreen.clickLinkToOrderList();
    await HistoryOrderScreen.page();
    // await HistoryOrderScreen.checkOrderHistory(); //qa
    await HistoryOrderScreen.checkOrderHistoryProd(); //prod
    await DetailPembelianScreen.page();
    await DetailPembelianScreen.back();
    await HistoryOrderScreen.page();
});