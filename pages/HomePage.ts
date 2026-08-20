import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly paragraph: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.paragraph = page.locator('p');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }
}
