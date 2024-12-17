# Testing

Testing in oclif can be done with any testing framework. You can run commands with `MyCommand.run()` which returns a promise you can wait on.

## Testing Utilities

There are common tasks however when writing CLI tools. For this, we have [@oclif/test](https://github.com/oclif/test), which provides a conventional set of utilities that we find useful for testing oclif CLIs.

Any CLI built with oclif will come preloaded with [mocha](https://www.npmjs.com/package/mocha) (our preferred testing framework but you're free to use whatever you prefer) and [@oclif/test](https://github.com/oclif/test) as well as an example test that should work out of the box with `npm test` or `yarn test`.

## Example Test

As an example, let's look at this `whoami` command which makes an API call to get the current logged in user. If the user is not logged in, it exits with status 100.

Another common tool we like to use in testing oclif CLIs is [nock](https://github.com/node-nock/nock). Install the `nock` package as a devDependency.

```typescript
import {runCommand} from '@oclif/test'
import {expect} from 'chai'
import nock from 'nock'

describe('whoami', () => {
  it('shows user email when logged in', async () => {
    nock('https://api.example.com')
      .get('/account')
      // user is logged in, return their name
      .reply(200, {email: 'jeff@example.com'})

    const {stdout} = await runCommand('whoami')
    expect(stdout).to.equal('jeff@example.com')
  })

  it('exits with status 100 when not logged in', async () => {
    nock('https://api.example.com')
      .get('/account')
      // HTTP 401 means the user is not logged in with valid credentials
      .reply(401)

    const {error} = await runCommand('whoami')
    expect(error?.oclif?.exit).to.equal(100)
  })
})
```

## Code Coverage

Code coverage is provided automatically for JavaScript and TypeScript projects via [nyc](https://npm.im/nyc). Just run `yarn test` and it will show the code coverage. The coverage can optionally be sent to [codecov](https://codecov.io/) in the CI scripts as well.

## Best Practices

1. Test both success and failure cases
2. Mock external API calls using nock
3. Verify command output and exit codes
4. Use the built-in coverage tools to ensure good test coverage
5. Keep tests focused and well-organized
