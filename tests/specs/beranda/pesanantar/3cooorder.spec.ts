import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import DetailProdukScreen from '../../../screenobjects/beranda/pesanantar/detailprodukScreen';
import CartScreen from '../../../screenobjects/beranda/pesanantar/cartScreen';
import DetailBelanjaScreen from '../../../screenobjects/beranda/pesanantar/detailbelanjaScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/pesanantar/detailpembelianScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/pesanantar/historyOrderScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to make an order$/, async () => {
    await driver.pause(5000);
    await StoreListScreen.clickStore();
    await driver.pause(5000);
    await StoreScreen.clickRokok();
    await driver.pause(5000);
    await DetailProdukScreen.makeOrderRokok();
    await DetailProdukScreen.back();
    await driver.pause(5000);
    await StoreScreen.clickMakanan();
    await driver.pause(5000);
    await DetailProdukScreen.makeOrderMakanan();
    await driver.pause(5000);
    await CartScreen.makeOrder();
    await CartScreen.accRokok();
    await driver.pause(5000);
    await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkoutOrder();
    await DetailBelanjaScreen.checkOrderDetail();
    await driver.pause(5000);
    await DetailPembelianScreen.back();
});