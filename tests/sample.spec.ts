import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('home page loads with the expected content', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await expect(page).toHaveTitle(/Example Domain/);
  await expect(homePage.heading).toHaveText('Example Domain');
  await expect(homePage.paragraph.first()).toContainText(
    'This domain is for use in documentation examples without needing permission.'
  );
});
