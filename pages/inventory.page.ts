import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(
      this.page.getByText('Products')
    ).toBeVisible();
  }

  async addFirstProduct() {
    await this.page
      .locator('[data-test^="add-to-cart"]')
      .first()
      .click();
  }

  async sortBy(value: string) {
    await this.page
      .getByTestId('product-sort-container')
      .selectOption(value);
  }

  async expectFirstProductPriceVisible() {
    await expect(
      this.page.locator('.inventory_item_price').first()
    ).toBeVisible();
  }
}
