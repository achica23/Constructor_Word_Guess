const Word = require("./word.js");
var inquirer = require("inquirer");

let houseList = ["Targaryen", "Stark", "Lannister", "Baratheon", "Tyrell"]

function gameOfThrones() {
    let randomHouse = new Word(houseList[Math.ceil(Math.random() * houseList.length - 1)])
}
