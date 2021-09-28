
var json = [{
    "firstName": "John",
    "lastName": "Doe"
  }, {
    "firstName": "Anna",
    "lastName": "Smith"
  }, {
    "firstName": "Peter",
    "lastName": "Jones"
  }];
  
  var people = [];
  var numberOfPeople = json.length;
  
  for (var i = 0; i < numberOfPeople; i++) {
    people[i] = {};
    people[i].firstName = $(".firstname")[i].value;
    people[i].lastName = $(".lastname")[i].value;
  }
  
  var passThisToTheServer = JSON.stringify(people);
  console.log(passThisToTheServer);

     