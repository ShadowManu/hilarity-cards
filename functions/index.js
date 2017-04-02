/**
 * Firebase Cloud Functions
 */
require('@google-cloud/debug-agent').start({ allowExpressions: true });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const _ = require('lodash');

// Realtime database admin configuration
admin.initializeApp(functions.config().firebase);

// Game init routes

exports.gameCreated = functions.database.ref('games/{key}').onWrite(event => {
  let gameSnap = event.data;

  // Skip if it already exists
  if (gameSnap.previous.exists()) return;

  let gameRef = gameSnap.adminRef;
  createRound(gameRef);
});

// Functions

/** Creates a new round in a game */
function createRound(gameRef) {
  let roundsRef = gameRef.child('rounds');

  chooseBlackCard().then(black => {
    return roundsRef.push({ black });
  });
}


/** Chooses a random black card */
function chooseBlackCard() {
  let blackRef = firebase.database().ref('/cards/blacks');

  return blackRef.once('value').then(snapshot => {
    let cards = _.values(snapshot.val());
    let index = Math.floor(Math.random()* cards.length);
    return cards[index];
  });
}
