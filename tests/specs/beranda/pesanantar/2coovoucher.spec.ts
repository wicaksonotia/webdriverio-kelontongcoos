import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/pesanantar/storeScreen';
import DetailProdukScreen from '../../../screenobjects/beranda/pesanantar/detailprodukScreen';
import CartScreen from '../../../screenobjects/beranda/pesanantar/cartScreen';
import DetailBelanjaScreen from '../../../screenobjects/beranda/pesanantar/detailbelanjaScreen';
import VoucherScreen from '../../../screenobjects/beranda/pesanantar/voucherScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to use voucher$/, async () => {
    // await StoreListScreen.chooseLoc();
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.clickRokok();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrderRokok();
    await DetailProdukScreen.back();
    await DetailProdukScreen.back();
    await StoreScreen.page();
    await StoreScreen.clickMakanan();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrderMakanan();
    await CartScreen.page();
    await CartScreen.makeOrder();
    await CartScreen.accRokok();
    await DetailBelanjaScreen.page();
    await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkoutPromo();
    // await VoucherScreen.page();
    await VoucherScreen.selectVoucher();
    await VoucherScreen.useVoucher();
    await DetailBelanjaScreen.page();

    // await BerandaScreen.page();
});