const generatePage = require("./src/template");
const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

const employeeArray = [];

//Question Arrays
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please eneter a name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "What is the manager's id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an manager id number!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "What is the manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter an office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);
    })
};

const promptEmployees = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the role of the employee you would like to add?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "text",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "What is the employee's id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee id number!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a email address!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "github",
        message: "What is the employee's GitHub username?",
        when: (input) => input.role == "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "school",
        message: "Where did the intern go to school?",
        when: (input) => input.role == "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "confirmAddMore",
        message: "Would you like to add another employee?",
        choices: ["No", "Yes"],
      },
    ])

    .then((employeeInput) => {
      let { name, id, email, role, github, school, confirmAddMore } = employeeInput;
      let employee;

      if (role === "Intern") {
        employee = new Intern (name, id, email, school);
      } else if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
      }
      employeeArray.push(employee);

      if (confirmAddMore == "Yes") {
        return promptEmployees(employeeArray);
      } else {
        return employeeArray;
      }
    })
};


function generate() {
    // const pageHTML = generatePage(employeeArray);
    fs.writeFile("./dist/index.html", generatePage(employeeArray), (err) => {
      if (err) throw err;
      console.log("Portfolio complete! Check out index.html to see the output!");
    });
};

promptManager()
  .then(promptEmployees)
  .then (generate);



