const firebaseConfig = {
      apiKey: "AIzaSyCJRNVFURS6k4j7hvcz4s46IIPSZfyCAas",
      authDomain: "kwitter-b4ed0.firebaseapp.com",
      databaseURL: "https://kwitter-b4ed0-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4ed0",
      storageBucket: "kwitter-b4ed0.appspot.com",
      messagingSenderId: "590185587201",
      appId: "1:590185587201:web:b595d84134d59157175600"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
