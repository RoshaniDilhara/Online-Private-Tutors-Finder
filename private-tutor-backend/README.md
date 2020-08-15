# Backend-Online-Private-Tutors-Finder

### ` npm i bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator`
### `npm install -g nodemon`

## In package.json
"scripts": {
    "start": "concurrently \"npm run server\" \"cd ../private-tutor-frontend && npm start\"",
    "server": "nodemon server.js"
  },
  
  Change the name of the frontend folder according to yours(private-tutor-frontend this)
  Then inside the backend folder run,
  ## npm start
  ## This will start frontend and backend concurrently

## reference for Login/Auth with the MERN Stack — (Backend)
https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

# Unit Test with mocha
install below things to the back end
### `npm i mocha --save`
### `npm i delay`

To run the tests

open another CLI and go to backend folder and then `npm run test`

## In package.json
"scripts": {
    "start": "concurrently \"npm run server\" \"cd ../private-tutor-frontend && npm start\"",
    "server": "nodemon server.js",
    "test": "mocha"
  }
  
## Refered
https://www.youtube.com/watch?v=6JUIxSOu4Q0&t=8s

https://www.youtube.com/watch?v=2oYtk83FZCA&t=254s

https://blog.bitsrc.io/build-a-unit-testing-suite-with-mocha-and-mongoose-eba06c3b3625

