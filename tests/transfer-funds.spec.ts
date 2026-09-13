import { test, expect } from '@playwright/test';

test('user can transfer funds', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.locator('input[name="username"]').fill('MartinS');

  await page.locator('input[name="password"]').fill('test123');

  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('link', { name: 'Transfer Funds' }).click();

  await expect(
    page.getByRole('heading', { name: 'Transfer Funds' })
  ).toBeVisible();
});