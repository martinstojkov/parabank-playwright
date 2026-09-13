import { test, expect } from '@playwright/test';

test('customer information can be retrieved through API', async ({ request }) => {

  const response = await request.get(
    'https://parabank.parasoft.com/parabank/services/bank/customers/12212'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.text();

  expect(responseBody).toContain('<id>12212</id>');
  expect(responseBody).toContain('<firstName>John</firstName>');
  expect(responseBody).toContain('<lastName>Smith</lastName>');

});