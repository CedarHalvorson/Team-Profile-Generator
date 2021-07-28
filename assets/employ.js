const inquirer = require('inquirer');

let arrayManager = [];
let arrayEngineer = [];
let arrayIntern = [];


class Employee{
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getRole(){
        return this.role;
    }
}
class Manager extends Employee{
    constructor(name, email, id, role, officeNum){
        super(name, email, id, role);
        this.officeNum = officeNum;
    }
}
class Engineer extends Employee{
    constructor(name, email, id, role, github){
        super(name, email, id, role);
        this.github = github;
    }
}
class Intern extends Employee{
    constructor(name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
}

function userPrompt(){
    return inquirer.prompt([
        {name: 'lastEntry',
        message: 'Will you enter anything else?',
        type: 'confirm',}
    ])
}


function employeeInfo(){
    return inquirer.prompt([
        {name: 'name',
        message: 'What name?',
        type: 'input'},
        {name: 'email',
        message: 'What is the email?',
        type: 'input'},
        {name: 'id',
        message: 'What is their id?',
        type: 'input'},
        {name: 'role',
        message: 'Whats their role?',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"]},
    ])
}

function managerInfo(){
    return inquirer.prompt([
        {name: 'officeNum',
        message: 'What is your office number?',
        type: 'input'},
        
    ])
}

function engineerInfo(){
    return inquirer.prompt([
        {name: 'github',
        message: 'What is github username?',
        type: 'input'},
        
    ])
}

function internInfo(){
    return inquirer.prompt([
        {name: 'school',
        message: 'what school do you attend?',
        type: 'input'},
        
    ])
}

async function questionsPrompt (){
    let employeeAnswers = await employeeInfo();
    if (employeeAnswers.role === "Manager"){
        let managerAnswers = await managerInfo();
        let manager = new Manager(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, employeeAnswers.role, managerAnswers.officeNum);
        arrayManager.push(manager);
    } else if (employeeAnswers.role === "Engineer") {
        let engineerAnswers = await engineerInfo();
        let engineer = new Engineer(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, employeeAnswers.role, engineerAnswers.github);
        arrayEngineer.push(engineer);
    } else if (employeeAnswers.role === "Intern") {
        let internAnswers = await internInfo();
        let intern = new Intern(employeeAnswers.name,employeeAnswers.email,employeeAnswers.id,employeeAnswers.role,internAnswers.school);
        arrayIntern.push(intern);
    }
    let promptUserAnswers = await userPrompt();
    if (promptUserAnswers.lastEntry) {
        await questionsPrompt();
    } else {
        return;
    }
}

module.exports = {
    questionsPrompt, 
    arrayManager,
    arrayEngineer,
    arrayIntern,
    Manager, 
    Engineer,
    Intern
}