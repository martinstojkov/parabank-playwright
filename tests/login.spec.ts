import { test, expect } from '@playwright/test';

test('registered user can login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

await page.locator('input[name="username"]').fill('MartinS');
await page.locator('input[name="password"]').fill('test123');

  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Welcome Martin Stojkov')).toBeVisible();
});