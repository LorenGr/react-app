# dogwalkr App [![Build Status](https://travis-ci.org/LorenGr/dogwalkr.svg?branch=master)](https://travis-ci.org/LorenGr/dogwalkr)

This is an app that provides a list of people that are offering their dog walking services. The main screen shows dogwalkers by their profile picture and each one is zoomable into a profile page. Each profile can be edited and deleted.
Viewed profiles offer information such as a description, location (linking to that city directly on google-maps) and service details.

## Demo
https://lorengrixti.herokuapp.com

### Initialisation

## Development
*Start webpack-server and Rest API*
``` javascript
npm install
npm webpack-server
npm start-dev
```

## Production
*Build application and Start Rest API*
``` javascript
npm start
```

## Source Code
- [Project Files](src/)
- [Tests](test/)
- [Deployment Files](public/)

## Libraries and Architecture
The application was created with React and is being served and compiled with webpack.
Communication between elements and state management is all being handled by a Redux architecture.

## Tests
All pages, reducers and sagas have been unit tested and components were tested with Enzyme.

### About the Author
My name is Loren Grixti, I am a Front-End developer coming from the island of Malta, currently living in Montreal, Canada.
I specialise in large scale web application developement, and am also an amateur landscape photographer, hence the creation of this app as a little side project to practice latest technology and experiment with the best stacks available
.
