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
   var nTrain = "";
   var nDest = "";
   var nTime = "";
   var nFreq = "";
   var nArriv = 0;



  $(".btn btn-primary").on("click", function(event){
    event.preventDefault();

nTrain = $("#train-name").val().trim();
 nDest = $("#destination").val().trim();
 nTime = $("#train-time").val().trim();
 nFreq = $("#frequency").val().trim();


    console.log(random);
    console.log(nTrain);
    console.log(nDest);
    console.log(nTime);
    console.log(nFreq);
    // console.log(nArriv);

    database.ref().push({

      name: nTrain,
      Destination: nDest,
      Frequency: nFreq,
      NextArrival: nArriv,
      dateAdded: firebase.database.ServerValue.TIMESTAMP



    });
  });



