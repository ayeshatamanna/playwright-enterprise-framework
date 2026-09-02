import { test, expect } from '@playwright/test';

test('API helper pattern validates external test resource @api', async ({
  request
}) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toMatchObject({
    id: 1,
    title: expect.any(String),
    completed: expect.any(Boolean)
  });
});
