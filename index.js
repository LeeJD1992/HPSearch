/*
Author: Lee Donald
Javascript for HP project
*/

// variables
const characterlistUrl = "https://hp-api.onrender.com/api/characters";
const characterlist = document.getElementById("character-list");
const housesUrl = "https://hp-api.onrender.com/api/characters/house/:house";
const houses = document.getElementById("houses");
const studentsUrl = "https://hp-api.onrender.com/api/characters/students";
const students = document.getElementById("students");
const teachersUrl = "https://hp-api.onrender.com/api/characters/staff";
const teachers = document.getElementById("teachers");
const spellsUrl = "https://hp-api.onrender.com/api/spells";
const spells = document.getElementById("spells");

//when the page loads
window.addEventListener("load, updateCharacterList");

//retrieve all characters from API
function getcharacterlist(){
   return fetch('https://www.potterapi.com/v1/characters?key=$2a$10$uAU/L33xV7cvuG6lOHa7p.NgSsmOIfR8yAMWIG.pvY/JAm4dkx4C')
   .then(response => response.json())
   .then(data => console.log(data))
}
//add characters to drop down list

function updatecharacterlist(){
    getcharacterlist().then(function(data){
        //get eachcharacter name
        for (element in data.message){
            //append to select list
            let option = createOption(element);
            characterlist.appendChild(option);
          }
         }
    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}
//

//

//

//