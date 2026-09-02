import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(
      this.page.getByText('Your Cart')
    ).toBeVisible();
  }

  async expectItemCount(count: number) {
    await expect(
      this.page.locator('.cart_item')
    ).toHaveCount(count);
  }
}
