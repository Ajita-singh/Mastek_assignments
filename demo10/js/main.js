const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
    
function onSubmit(){
    console.log(firstName.value);
    const person={firstName:firstName.value,lastName:lastName.value};
    console.log(person);
    const jsoString=JSON.stringify(person);
    const root=document.getElementById("root");    
    root.innerHTML="The JSON Data is ";
    const h3=document.createElement("h3");
    h3.id="h3"
    h3.innerHTML=jsoString;
    root.appendChild(h3)
    firstName.value="";
    lastName.value="";
}
function onJSObject(){
    const h3=document.getElementById("h3");
    const jsonString=h3.innerText;
    console.log(jsonString);
    const PERSON=JSON.parse(jsonString);
    firstName.value=PERSON.firstName;
    lastName.value=PERSON.lastName;
    h3.innerText="";
}