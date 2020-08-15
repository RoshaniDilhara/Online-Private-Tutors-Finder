This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### `npm install axios react-table styled-components`
### `npm install react-time-picker react-date-picker`
### `npm i is-empty`
### `npm i axios classnames jwt-decode react-redux react-router-dom redux redux-thunk`

# Extensions to be added to the browser
### `React Developer Tools`
### `Redux DevTools`

## `Register and Login Changes`
frontend -> package.jason changed

backend -> concurrent run added

Frontend and backend will be run concurrently

## `Run Concurrently`
cd in to the backend folder and do the changes given in the read me of backend folder

Run the command `npm start`

## Refered
https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82

https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718

### `npm install react-avatar --save`

### `npm install reactjs-popup --save`

### `npm i react-select`

### `npm install bootstrap --save`

### `npm install cors uuid multer`

## Refered
https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

### `npm i bcryptjs` (need to be installed to the frontend)

## Refered
https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

# Unit Test with jest
install below things to the front end
### `npm install jest@24.9.0 --save`
### `npm i enzyme`
### `npm i enzyme-adapter-react-16`
### `npm i identity-obj-proxy`

To run the tests

open another CLI and go to frontend folder and then`npm run test`

A line was commented in the store.js file as it was giving an error when running test cases

.bablerc -> added preset -> used to convert .jsx syntax to plain js (because jest needs them in plain js)

jest.config.json -> configuration file for jest -> testRegex to identify the test files (.spec) -> moduleNameMapper to mock the .css files


## In package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest --config ./jest.config.json",
    "test:watch": "npm run test -- --watch",
    "eject": "react-scripts eject"
  },

## Refered
https://stackoverflow.com/questions/46177148/how-to-exclude-css-module-files-from-jest-test-suites

https://stackoverflow.com/questions/55266641/shallowwrappersetstate-can-only-be-called-on-class-components

https://stackoverflow.com/questions/50025717/jest-enzyme-invariant-violation-you-should-not-use-route-or-withrouter-ou

https://medium.com/@koszkota/testing-react-applications-using-enzyme-and-jest-manual-mocks-ab7a8ba2c94c

https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined

https://www.robinwieruch.de/react-connected-component-test

https://stackoverflow.com/questions/50222545/enzyme-expects-an-adapter-to-be-configured

https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/

https://stackoverflow.com/questions/46572025/typeerror-enzyme2-default-configure-is-not-a-function

https://stackoverflow.com/questions/33958757/jest-not-preprocessing-my-jsx

https://babeljs.io/docs/en/config-files

https://medium.com/@krishankantsinghal/testing-login-react-component-using-jest-and-enzyme-888daaab72ba

https://www.robinwieruch.de/react-testing-jest


