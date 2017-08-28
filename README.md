# Contact Book App [![Build Status](https://travis-ci.org/LorenGr/dogwalkr.svg?branch=master)](https://travis-ci.org/LorenGr/ContactBook)

This is a basic app that provides a list of people and their contact information.
Each profile tile is zoomable into a profile page which can be edited and deleted.
New contacts can be added to the book.

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
- [Rest API Files](server/)
- [MongoDB model Files](model/)

## Libraries and Architecture

###### Stack
* Webpack
* React
* Redux
* Node
* Express
* Mongoose
* MongoDB

The application was created with React and is being served and compiled with webpack. Communication between elements and state management is all being handled by a Redux architecture. The app is calling Node server through an Express API. Data is stored on MongoDB and communicates with the app through Mongoose middleware.

## Tests
All pages, reducers and sagas have been unit tested and components were tested with Enzyme.

### About the Author
My name is Loren Grixti, I am a Front-End developer coming from the island of Malta, living in Montreal, Canada.
I specialise in large scale web application developement. This space is my js playground where I try new stacks and experiment with emerging patterns.
.
