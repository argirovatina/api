# Test Medium API
How to install:
- navigate to api folder
- npm install

Preconditions for running tests:
- go to https://medium.com/
- open you profile settings (https://medium.com/me/settings when logged in)
- save your token from 'Integration tokens'
- paste your token to _let token = 'Bearer USE YOUR TOKEN'_ in api/cypress/support/commands.js file

How to run tests:
- npx cypress open
- npx cypress run (headless)

How to add tests:
- add api commands to api/cypress/support/commands.js file
