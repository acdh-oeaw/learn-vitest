# Vitest

Yes we test!
A learning repository about vitest and its main features
[Vitest](https://vitest.dev)

## Main features

- Uses vite
- Use same setup from the app to resolve the tests (share between Test, Dev and Build)
- Watch mode for tests (starts by default)
- Support for workspace => Useful in a monorepo setting
- Built-in tools for mocking
- Browser mode for component test in browser
- Code coverage via v8
- IDE Integration (VSCode)
- Multiple tools for the inspection of test reports for example in ui
- Type checking

## Mocking

Sometimes we need to create a fake version of an internal or external service => Called Mocking

Mock function for example => See whether a function has been called or not (Called Spying - vi.spyOn())
Create fake version of function => vi.fn()

Mock requests? Is tricky due to vitest running in node; In order to do mock network requests can for example use Mock Service Worker

Possible to mock 3rd party libraries which are invoked somewhere else => Change the implementation to suit the needs of the test

## Similarities to playwright - Built in Test Context - Fixtures in Playwright

Build test fixtures with the provided test API and reuse the values anywhere in the code
Can use local expect context for example with concurrent tests to ensure that the current context is taken instead of the global one

## Snapshot functionality

Use Snapshots to make sure that the output of a function does not change without any warning.
Vitest will make a snapshot of a given value and then match it with the actual value provided

Can be either inline or stored within a file
Possible to make own serializer for snapshots

## Browser Mode

Still experimental feature => documentation is still missing a few things and there are bugs here and there
Allows to run tests in the browser natively
Use Playwright/Webdriverio in addition
[Playwright](https://playwright.dev/)
Need to update the config to activate this feature
Has a headless mode => Run browser in background without user interface
Several packages provided by vitest to render components from frameworks out of the box (vue, react, svelte)

Multiple API provided out of the box:

- Assertion API from @testing-library/jest-dom
- Commands API
- Interactivity API
- Context API with utility functions for tests

Link to the current documentation for browser mode: [Vitest browser mode](https://vitest.dev/guide/browser/)

## More interesting features which can be explored further

- Workspaces and their usage in monorepo setups
- Debugging of tests with the JavaScript Debug Terminal for VSCode or how to in IntelliJ Idea
- Explore the possibilites of mocking
- See how browser mode is developing in vitest
- In-Source testing => Test code beside the implementation itself; Unit testing for smaller functions
