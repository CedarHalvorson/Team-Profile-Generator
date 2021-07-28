const fs = require("fs");

const { questionsPrompt, arrayManager, arrayEngineer, arrayIntern } = require ("./assets/employ");
const { createHTML } = require ("./assets/htmlGen");


function writeToFile(data) {
    fs.writeFile("index.html", data, 
    (err) => err ? console.error(err) : console.log("created html"))
}
async function init() {
    await questionsPrompt();
    writeToFile(createHTML(arrayManager, arrayEngineer, arrayIntern));
}
init();
