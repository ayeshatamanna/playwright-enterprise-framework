# Framework Design

## Fixtures

Fixtures provide reusable dependencies to tests without repeating construction logic.

## Page Objects

Page objects expose business actions instead of raw locators.

Good:

```ts
await inventoryPage.addFirstProduct();
```

Avoid repeating selectors in tests.

## Components

Reusable widgets such as headers, navigation, tables and modals belong in component classes.

## Test data

Use factories for synthetic data and avoid hard-coded production-like identities.

## Environment config

URLs and credentials must come from environment configuration rather than test files.

## Failure diagnostics

CI should retain:
- HTML report
- Trace
- Screenshot
- Video on failure
