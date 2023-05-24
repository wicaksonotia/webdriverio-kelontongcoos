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
    await driver.pause(5000);
});

When(/^I click menu Katalog SRC$/, async () => {
    await BerandaScreen.clickKatalogSRC();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to make an order$/, async () => {
    await driver.pause(5000);
    await StoreListScreen.clickStore();
    await driver.pause(5000);
    await StoreScreen.clickProduct();
    await driver.pause(5000);
    await DetailProdukScreen.makeOrder();
    await driver.pause(5000);
    await CartScreen.makeOrder();
    await driver.pause(5000);
    await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkOrderDetail();
    await driver.pause(5000);
    await DetailPembelianScreen.back();
    await DetailBelanjaScreen.checkStatusOrder();
    await driver.pause(5000);

    // await BerandaScreen.page();
});