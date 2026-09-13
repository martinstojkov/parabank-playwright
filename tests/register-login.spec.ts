import { test, expect } from '@playwright/test';
test('new user can register and login', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
    await page.locator('[id="customer.firstName"]').fill('Martin');
    await page.locator('[id="customer.lastName"]').fill('Stojkov');
    await page.locator('[id="customer.address.street"]').fill('ul. Volgogradska br.7/22');
    await page.locator('[id="customer.address.city"]').fill('Skopje');
  await page.locator('[id="customer.address.state"]').fill('Test');
  await page.locator('[id="customer.address.zipCode"]').fill('1000');
  await page.locator('[id="customer.phoneNumber"]').fill('123456789');
  await page.locator('[id="customer.ssn"]').fill('123-45-6789');

  await page.locator('[id="customer.username"]').fill('MartinS');
  await page.locator('[id="customer.password"]').fill('test123');
  await page.locator('[id="repeatedPassword"]').fill('test123');

  await page.getByRole('button', { name: 'Register' }).click();
});