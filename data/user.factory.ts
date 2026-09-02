import { faker } from '@faker-js/faker';

export type SyntheticUser = {
  firstName: string;
  lastName: string;
  email: string;
};

export function buildSyntheticUser(): SyntheticUser {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase()
  };
}
