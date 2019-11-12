const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCsS2OghjP209wZs_300gzLOJzj6SYo7rI",
    authDomain: "brians-cheeseshop.firebaseapp.com",
    databaseURL: "https://brians-cheeseshop.firebaseio.com",
    projectId: "brians-cheeseshop",
    storageBucket: "brians-cheeseshop.appspot.com",
    messagingSenderId: "468269153547",
    appId: "1:468269153547:web:b8deedab1179dd40dbf60e"
};

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;