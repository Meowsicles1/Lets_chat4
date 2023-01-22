const firebaseConfig = {
    apiKey: "AIzaSyBYwrlykAi6m7Qz_G9T7d1j-iV6mjGlBvQ",
    authDomain: "lets-chat-c2624.firebaseapp.com",
    databaseURL: "https://lets-chat-c2624-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c2624",
    storageBucket: "lets-chat-c2624.appspot.com",
    messagingSenderId: "548714402641",
    appId: "1:548714402641:web:f5db13dad417a4e4a0f970"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
        
    })
    localStorage.setItem("room_name",room_name)
    window.location = "Talk.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row
   //End code
   });});}
getData();
function rediectToRoomName(){
    localStorage.setItem("room_name",room_name)
    window.location = "Talk.html"
}

function logout(){
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    
}