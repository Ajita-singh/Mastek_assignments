function getJsonData(){
    const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const person = JSON.parse(this.responseText);
  document.getElementById("root").innerHTML = person.firstName+" "+person.lastName;
}
xmlhttp.open("GET", "person.json");
xmlhttp.send();
}