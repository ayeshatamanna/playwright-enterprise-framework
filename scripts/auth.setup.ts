import { chromium } from '@playwright/test';
import { environment } from '../config/environment';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(environment.baseUrl);
  await page.getByTestId('username').fill(environment.username);
  await page.getByTestId('password').fill(environment.password);
  await page.getByTestId('login-button').click();

  await page.context().storageState({
    path: '.auth/user.json'
  });

  await browser.close();
}

main();
