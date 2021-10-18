(function (window) {
  "use strict";
  var App = window.App || {};

  // window.FireBaseConfig = {
  //   apiKey: "AIzaSyCvYhg0pZspFGJPQ4P4uuWmJjY-RSWVr00",
  //   authDomain: "coffee-run-af74f.firebaseapp.com",
  //   projectId: "coffee-run-af74f",
  //   storageBucket: "coffee-run-af74f.appspot.com",
  //   messagingSenderId: "201805469310",
  //   appId: "1:201805469310:web:fb8a22b99ecbcc0bc2ea2f",
  // };

  const FirebaseConfig = {

    apiKey: "AIzaSyCvYhg0pZspFGJPQ4P4uuWmJjY-RSWVr00",
  
    authDomain: "coffee-run-af74f.firebaseapp.com",
  
    projectId: "coffee-run-af74f",
  
    storageBucket: "coffee-run-af74f.appspot.com",
  
    messagingSenderId: "201805469310",
  
    appId: "1:201805469310:web:fb8a22b99ecbcc0bc2ea2f"
  
  };
  
  
  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  // FirebaseConfig.initializeApp(App.FirebaseConfig);
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;

})(window);
