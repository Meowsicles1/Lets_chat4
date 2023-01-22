const firebaseConfig = {
    apiKey: "AIzaSyBYwrlykAi6m7Qz_G9T7d1j-iV6mjGlBvQ",
    authDomain: "lets-chat-c2624.firebaseapp.com",
    databaseURL: "https://lets-chat-c2624-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c2624",
    storageBucket: "lets-chat-c2624.appspot.com",
    messagingSenderId: "548714402641",
    appId: "1:548714402641:web:f5db13dad417a4e4a0f970"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")

  firebase.initializeApp(firebaseConfig)
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function Logout(){
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    
}
function send(){
    water = document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
        name:user_name,
        message:water
    })
    document.getElementById("msg").value = ""
}