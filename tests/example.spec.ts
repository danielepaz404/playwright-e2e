import { test, expect } from '@playwright/test';

test('retrieve products successfully', async ({ request }) => {
  const response = await request.get('/products');
  await expect(response).toBeOK();
})

test('retrive products from specific brand', async ({ request }) => {
  const response = await request.get('/products?by_brand=2');
  expect(response.status()).toBe(200);

  const data = response.json();
  data.then((products: any[]) => {
    expect(products[0].name).toEqual("Bolt Cutters");
  })
})
