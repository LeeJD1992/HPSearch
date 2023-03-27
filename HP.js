/*
Author: Lee Donald
Javascript for HP project
*/
/*
Author: Lee Donald
Javascript for HP project
*/

// variables

const characters = document.getElementById("characters");
const charactersList = document.getElementById('charactersList');
const houses = document.getElementById("houses");
const students = document.getElementById("students");
const teachers = document.getElementById("teachers");
const spells = document.getElementById("spells");

//event listeners for buttons
characters.addEventListener("click", getcharacters);
submit.addEventListener("submit", submit);

//search character function
const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

const button = document.getElementById('houses');

button.addEventListener('click', gethouses);
{
    fetch('https://hp-api.onrender.com/api/characters/house/:house')
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});

button = document.getElementById('students');

button.addEventListener('click', getstudents () {
    fetch('https://hp-api.onrender.com/api/characters/students')
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});

const button = document.getElementById('teachers');

button.addEventListener('click', function () {
    fetch('https://hp-api.onrender.com/api/characters/staff')
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});


const button = document.getElementById('spells');

button.addEventListener('click', function () {
    fetch('https://hp-api.onrender.com/api/spells')
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});
