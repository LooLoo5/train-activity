
var config = {
    apiKey: "AIzaSyCtRpqnPtLyCP0VxP5C1Q7GDIIVJWIgqok",
    authDomain: "unit7-project.firebaseapp.com",
    databaseURL: "https://unit7-project.firebaseio.com",
    projectId: "unit7-project",
    storageBucket: "unit7-project.appspot.com",
    messagingSenderId: "630496562548"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).ready(function(){
      var train = {
          name: "9 3/4",
          destination: "Hogwarts",
          frequency: 6,
          firstTrain: "22:30"
      }
    //   database.ref().push(train);

      var userTime = new Date();
      console.log(userTime.getMinutes());
      console.log(train.firstTrain.split(':'));

      var splitTrain = train.firstTrain.split(':');
      var hoursTo = Math.abs(userTime.getHours() - parseInt(splitTrain[0]));
      console.log(parseInt(splitTrain[0]));

      var minsTo = Math.abs(userTime.getMinutes() - parseInt(splitTrain[1]));
      var totalMinutes = hoursTo * 60 + minsTo;
      console.log(typeof totalMinutes);
      var remainder = totalMinutes % train.frequency;
      console.log(remainder);

  })

