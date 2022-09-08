console.log("hei");

localStorage.setItem("firstName", "Linus")
localStorage.setItem("lastName", "Hedlund")


localStorage.removeItem("firstName")
localStorage.removeItem("lastName")

const pet = {
    type: "dog",
    name: "Lilje"
};

const petJSON = JSON.stringify(pet);
localStorage.setItem("pet", petJSON)

const petRetrived = localStorage.getItem("pet")
const newPet = JSON.parse(petRetrived);
console.log(newPet);