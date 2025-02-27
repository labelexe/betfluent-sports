'use strict'

const firebase = require('firebase')

let config;

if (process.env.BACKEND_ENV === 'debug') {
  config = {
    apiKey: "AIzaSyALTKmSmehVCCsXWr_aY9MDmHAfVJhiZOs",
    authDomain: "betfluent-staging.firebaseapp.com",
    databaseURL: "https://betfluent-staging.firebaseio.com",
    projectId: "betfluent-staging",
    storageBucket: "betfluent-staging.appspot.com",
    messagingSenderId: "644050862530"
  };
} else {
  config = {
    apiKey: "AIzaSyA3vie3Ie_GuZiBEf9DilFSLaaxtGLtACs",
    authDomain: "betfluent-prod.firebaseapp.com",
    databaseURL: "https://betfluent-prod.firebaseio.com",
    projectId: "betfluent-prod",
    storageBucket: "betfluent-prod.appspot.com",
    messagingSenderId: "1052075330350"
  };
}

firebase.initializeApp(config);

module.exports = firebase;