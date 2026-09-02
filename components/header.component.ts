import { expect, Page } from '@playwright/test';

export class HeaderComponent {
  constructor(private readonly page: Page) {}

  async expectCartCount(count: number) {
    await expect(
      this.page.getByTestId('shopping-cart-badge')
    ).toHaveText(String(count));
  }

  async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}
