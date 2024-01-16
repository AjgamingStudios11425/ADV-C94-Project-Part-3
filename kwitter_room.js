
var firebaseConfig = {
      apiKey: "AIzaSyCy-THskKHhs7a9q_B07cwiFhBysezHJJ8",
      authDomain: "chat-app-bfb3a.firebaseapp.com",
      databaseURL: "https://chat-app-bfb3a-default-rtdb.firebaseio.com",
      projectId: "chat-app-bfb3a",
      storageBucket: "chat-app-bfb3a.appspot.com",
      messagingSenderId: "576564586086",
      appId: "1:576564586086:web:e6315c3d336b575ba1afa7"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"    
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}