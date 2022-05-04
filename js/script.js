// OBJECT ORIENTED PROGRAMMING (OOP)
// 1. oggetti
// 2. classi
// 3. Incapsulamento
// 4. Eredità

class Animal {
    constructor(race, name, voice) {
        this.race = race;
        this.name = name;
        this.voice = voice;
    }

    speak() {
        return `${this.race} ${this.name} fa ${this.voice} ${this.voice}`;
    }
}

// Voglio creare una fattoria di animali
const farmAnimals = [];
const duck = new Animal("anatra", "Ducky", "qua");
const horse = new Animal("cavallo", "Bojack", "iiii");
const cat = new Animal("gatto", "Moshi", "miau");
farmAnimals.push(duck);
farmAnimals.push(horse);
farmAnimals.push(cat);


// Al click del bottone stampare i versi di tutti animali della fattoria

const animalsList = document.getElementById("animals-list");

document.getElementById("farm-speak").addEventListener("click", function() {
    farmAnimals.forEach( animal => {
        animalsList.innerHTML += `<li>${animal.speak()}</li>`; 
    });
});