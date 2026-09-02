import { test } from '../../fixtures/app.fixture';
import { environment } from '../../config/environment';

test('valid user can sign in @smoke', async ({
  loginPage,
  inventoryPage
}) => {
  await loginPage.open();
  await loginPage.login(
    environment.username,
    environment.password
  );

  await inventoryPage.expectLoaded();
});

test('invalid password is rejected @smoke @negative', async ({
  loginPage
}) => {
  await loginPage.open();
  await loginPage.login(
    environment.username,
    'wrong-password'
  );

  await loginPage.expectLoginError(
    'Username and password do not match'
  );
});
