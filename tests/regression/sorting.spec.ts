import { test } from '../../fixtures/app.fixture';
import { environment } from '../../config/environment';

test('user can sort products @regression', async ({
  loginPage,
  inventoryPage
}) => {
  await loginPage.open();
  await loginPage.login(
    environment.username,
    environment.password
  );

  await inventoryPage.expectLoaded();
  await inventoryPage.sortBy('lohi');
  await inventoryPage.expectFirstProductPriceVisible();
});
