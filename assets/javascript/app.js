var firebaseConfig = {
  apiKey: "AIzaSyA173r7N_AGTj4qCzfa7sS9VPh8-dblrzY",
  authDomain: "roman-s-project.firebaseapp.com",
  databaseURL: "https://roman-s-project.firebaseio.com",
  projectId: "roman-s-project",
  storageBucket: "roman-s-project.appspot.com",
  messagingSenderId: "415611312010",
  appId: "1:415611312010:web:3003d9d2d3cbaefb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);   

var database = firebase.database();
var currentTime = moment();

$("#submitTrain").on("click", function(event){
  event.preventDefault();

   var nTrain = "";
   var nDest = "";
   var nTime = "";
   var nFreq = 0 + "mins";
   var nArriv = 0;
   var minAway = 0;

  // $("#submitTrain").on("click", function(event){
  //   event.preventDefault();

nTrain = $("#train-name").val().trim();
 nDest = $("#destination").val().trim();
 nTime = $("#train-time").val().trim();
 nFreq = $("#frequency").val().trim();
 

 var firstTrainConverted = moment(nTime, "hh:mm a").subtract("1, years");
    var difference = currentTime.diff(moment(firstTrainConverted), "minutes");
    var remainder = difference % frequency;
    var minAway = nFreq - remainder;
    var nArriv = moment().add(minAway, "minutes").format("hh:mm a");



 if(nTrain === "" ||  nDest === "" || nTime === 0 || nFreq ===""){

  alert("Fill out the form ya foo!");
return false};
 

    // console.log(random);
    console.log(nTrain);
    console.log(nDest);
    console.log(nTime);
    console.log(nFreq);
    

    database.ref().push({



      name: nTrain,
      Destination: nDest,
      Frequency: nFreq,
      NextArrival: nArriv,
      dateAdded: firebase.database.ServerValue.TIMESTAMP




    });
    

    $("#resulttable").append("<tr><td>" + nTrain  + "</td><td>" + nDest + "</td><td>" + nFreq + "</td><td>" + nArriv + "</td><td>" + minAway + "</td></tr>");
  });



