// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBTGdnqX1dpubSrPrdCGwIRSHWKWTbG-GA",
      authDomain: "kwitter-new-65784.firebaseapp.com",
      databaseURL: "https://kwitter-new-65784.firebaseio.com",
      projectId: "kwitter-new-65784",
      storageBucket: "kwitter-new-65784.appspot.com",
      messagingSenderId: "864219567310",
      appId: "1:864219567310:web:8457faec2995d2a93fec9f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room names"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"); 
      window.location="kwitter.html";
}