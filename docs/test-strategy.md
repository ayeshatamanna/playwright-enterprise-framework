# Enterprise Automation Test Strategy

## Pull request
- Smoke suite
- Critical API checks
- Chromium only for fast feedback

## Nightly
- Regression suite
- Chromium
- Firefox
- WebKit

## Reliability rules
- No test depends on another test
- Avoid fixed waits
- Prefer Playwright auto-waiting
- Use stable locators
- Keep setup deterministic
- Use API setup when UI setup adds no coverage
