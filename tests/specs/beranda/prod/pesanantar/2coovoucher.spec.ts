import { Given, When, Then } from '@cucumber/cucumber';
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
});

Then(/^I should be able to use voucher$/, async () => {
    await StoreScreen.page();
    await StoreScreen.clickProduct();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrder();
    await CartScreen.page();
    await CartScreen.makeOrder();
    await DetailBelanjaScreen.page();
    await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkoutPromo();
    await VoucherScreen.page();
    await VoucherScreen.selectVoucher();
    await VoucherScreen.useVoucher();
    await DetailBelanjaScreen.page();
});