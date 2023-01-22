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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



