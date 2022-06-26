const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const generatePage = require("./src/template.js");

const inquirer = require('inquirer');
const fs = require('fs');

employeeArray = [];

//Question Arrays

const addManager = () => {
  inquirer
    .prompt ([
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
      }
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
      }
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
      }
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
      }
    }
  ])
  .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager (name, id, email, officeNumber);

      employeeArray.push(manager);
      console.log(manager);
  })
};




// const engineerQuestions = [
//   {
//     type: "text",
//     name: "name",
//     message: "What is the employee's name?",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter a name!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "id",
//     message: "What is the employee's id number?",
//     validate: (idInput) => {
//       if (idInput) {
//         return true;
//       } else {
//         console.log("Please enter an employee id number!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "email",
//     message: "What is the employee's email address?",
//     validate: (emailInput) => {
//       if (emailInput) {
//         return true;
//       } else {
//         console.log("Please enter a email address!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "github",
//     message: "What is the employee's GitHub username?",
//     validate: (githubInput) => {
//       if (githubInput) {
//         return true;
//       } else {
//         console.log("Please enter a GitHub username!");
//         return false;
//       }
//     },
//   },
// ];

// const internQuestions = [
//   {
//     type: "text",
//     name: "name",
//     message: "What is the employee's name?",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter a name!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "id",
//     message: "What is the employee's id number?",
//     validate: (idInput) => {
//       if (idInput) {
//         return true;
//       } else {
//         console.log("Please enter an employee id number!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "email",
//     message: "What is the employee's email address?",
//     validate: (emailInput) => {
//       if (emailInput) {
//         return true;
//       } else {
//         console.log("Please enter a email address!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "school",
//     message: "Where did the intern go to school?",
//     validate: (schoolInput) => {
//       if (schoolInput) {
//         return true;
//       } else {
//         console.log("Please enter a school!");
//         return false;
//       }
//     },
//   },
// ];

// getEmployeeInfo.prototype.addEngineer = function () {
//   inquirer.prompt(engineerQuestions).then(({ name, id, email, github }) => {
//     this.engineer = new Engineer(name, id, email, github);
//     employeeData.push(this.engineer);
//     this.addEmployee();
//   });
// };

addManager();
