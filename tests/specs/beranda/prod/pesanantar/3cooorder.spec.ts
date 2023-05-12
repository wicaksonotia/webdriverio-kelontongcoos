import { Given, When, Then } from '@cucumber/cucumber';
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
});

Then(/^I should be able to make an order$/, async () => {
    await StoreScreen.page();
    // await StoreScreen.clickProduct(); //qa
    await StoreScreen.clickProductProd(); //prod
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrder();
    await CartScreen.page();
    await CartScreen.makeOrder();
    await DetailBelanjaScreen.page();
    // await DetailBelanjaScreen.makeOrder(); //qa
    await DetailBelanjaScreen.makeOrderProd(); //prod
    await DetailBelanjaScreen.checkoutOrder();
    await DetailBelanjaScreen.checkOrderDetail();
    await DetailPembelianScreen.page();
    await DetailPembelianScreen.back();
    await DetailBelanjaScreen.checkStatusOrder();
    await HistoryOrderScreen.page();
});