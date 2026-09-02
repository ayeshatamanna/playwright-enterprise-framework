import { test } from '../../fixtures/app.fixture';
import { environment } from '../../config/environment';

test('user can add product to cart @smoke', async ({
  loginPage,
  inventoryPage,
  header,
  cartPage
}) => {
  await loginPage.open();
  await loginPage.login(
    environment.username,
    environment.password
  );

  await inventoryPage.expectLoaded();
  await inventoryPage.addFirstProduct();

  await header.expectCartCount(1);
  await header.openCart();

  await cartPage.expectLoaded();
  await cartPage.expectItemCount(1);
});
