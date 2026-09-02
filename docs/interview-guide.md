# Interview Guide

## 60-second explanation

This project demonstrates how I would structure a reusable enterprise Playwright framework rather than just writing isolated test scripts.

It uses fixtures, page objects, component objects, environment configuration, synthetic test data, test tagging, cross-browser projects and CI artifacts. The goal is maintainability and fast feedback.

## Be ready to explain
- Fixture lifecycle
- Page objects versus component objects
- Why no fixed sleeps
- How Playwright auto-waiting works
- Smoke versus regression suites
- Cross-browser strategy
- Authentication-state reuse
- CI failure diagnostics
- Parallel-safe test data
