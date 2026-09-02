export type EnvironmentName = 'local' | 'qa' | 'staging';

export const environmentName =
  (process.env.TEST_ENV as EnvironmentName) ?? 'local';

export const environment = {
  name: environmentName,
  baseUrl:
    process.env.BASE_URL ??
    'https://www.saucedemo.com',
  username:
    process.env.TEST_USER ??
    'standard_user',
  password:
    process.env.TEST_PASSWORD ??
    'secret_sauce'
};
