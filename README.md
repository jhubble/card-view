Elder Scrolls Card view 

Will display cards from the Elder Scrolls API

## Installation 
* Install yarn (see https://classic.yarnpkg.com/en/docs/install)
* Clone this repo
* in the project directory, run:
        yarn install


## To run:
* Run
        yarn start
* A web browser should open. Otherwise, go to http://localhost:3000

## To run tests
* yarn test
Tests are located adjacent to the class being tested (see notes)

## Notes

- This app was created with create-react-app. It includes auto-reload for modifications.
- Semantic UI is used for UI components.
- Inifinte Scroll is used to load additional cards. All cards are currently kept in memory after being loaded.
- For accessibility, a button is also provided to load more. This is also used as s hook for testing.
- Currently, code and tests are in the source directory. Code will generally have a .jsx extension for reaction components and .js for JavaScript. Tests will end with .test.js.

## Development
Codebase includes configuration for (https://code.visualstudio.com/) This provides automatic code formatting and linting using eslint and prettier. These configurations can also be used with other IDEs.

### React Components
- CardList - primary component that displays a list of cards and handles reloading.
- ElderCard - Renders an Elder Scrolls Card. (Using Semantic-UI card)
- CardFetch - API layer to gather additional cards. Uses https://docs.elderscrollslegends.io/

### Possible future work
- Add localization (depends on source API being localized)
- Enhance ADA accesibility
- Add additional tests and unit tests
- Implement removal from DOM of old cards on low memory
- Search and filter
- Better error handling.
- Add additional responsive breakpoints (currently it only switches from 4 column to single column "mobile"
