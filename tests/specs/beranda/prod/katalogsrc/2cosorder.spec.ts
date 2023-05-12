import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../../screenobjects/beranda/katalogsrc/storelistScreen';
import StoreScreen from '../../../screenobjects/beranda/katalogsrc/storeScreen';
import DetailProdukScreen from '../../../screenobjects/beranda/katalogsrc/detailprodukScreen';
import CartScreen from '../../../screenobjects/beranda/katalogsrc/cartScreen';
import DetailBelanjaScreen from '../../../screenobjects/beranda/katalogsrc/detailbelanjaScreen';
import DetailPembelianScreen from '../../../screenobjects/beranda/katalogsrc/detailpembelianScreen';
import HistoryOrderScreen from '../../../screenobjects/beranda/katalogsrc/historyOrderScreen';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
});

Then(/^I should be able to make an order$/, async () => {
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.clickProduct();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrder();
    await CartScreen.page();
    await CartScreen.makeOrder();
    await DetailBelanjaScreen.page();
    await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkOrderDetail();
    await DetailPembelianScreen.page();
    await DetailPembelianScreen.back();
    await DetailBelanjaScreen.checkStatusOrder();
    await HistoryOrderScreen.page();
});