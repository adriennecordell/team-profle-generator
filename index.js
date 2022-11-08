const inquirer  = require('inquirer');
const fs = require('fs')
const util = require('util')
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

const generateHTML =require('./src/index-html')

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let employeeArray = [];
let employeeString = ``;

async function main() {
    try{
        for(let i = 0; i < employeeArray.length; i++) {
            employeeString = employeeString + 
            `<div class="card" style="width: 18rem;">
               <div class="card-body">
                <h5 class="card-title"> ${employeeArray[i].role}</h5>
                <h5 class="card-title">${employeeArray[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${employeeArray[i].id}</h6>
                <p class="card-text">${employeeArray[i].email}</p>`
          if (employeeArray[i].role === "Manager") {
            employeeString += `<p class="card-link"> ${employeeArray[i].officeNumber}</p>
              </div>
            </div>`
          }
          else if (employeeArray[i].role ==="Engineer") {
            employeeString += 
            `<p class="card-link">${employeeArray[i].github}</p>
                </div.
            </div>`
          } else {
            employeeString += 
            `<p class="card-link">${employeeArray[i].school}</p>
                </div>
            </div>`
          }
        }

        let finalHtml = generateHTML(employeeString)
        console.log(finalHtml)

        writeFileAsync("./dist/index.html", finalHtml);
    } catch (err) {
        console.log(err);
    }
};

async function prompt() {
    let responseDone = "";

    try{
        inquirer
            .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?',
            
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the employees ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the employees email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Intern', 'Manager', 'Engineer']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is employees github username ?',
            when(answers) {
                return answers.role === 'Engineer'
            } 
        },
    
        {
            type: 'number',
            name: 'office',
            message: 'What is employees office number?',
            when(answers) {
                return answers.role === 'Manager'
            } 
            
        },
        {
            type: 'input',
            name: 'school',
            message:'what school do they attend?',
            when(answers) {
                return answers.role === 'Intern'
            } 
        }

    ]).then(response => {
        switch(response.role) {
            case "Engineer":
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                employeeArray.push(engineer);
                addEmployee();
                break;
            case "Intern":
                const intern = new Intern(response.name, response.id, response.email, response.school);
                employeeArray.push(intern);
                addEmployee();
                break;
            case "Manager":
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                employeeArray.push(manager);
                addEmployee();
                break;
        }
    })
    } catch (err) {
        console.log(err)
    }
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "finish",
            message:"Would you like to continue?: ",
            choices: ["Yes", "No"]
        }
    ]) .then(res => {
        switch (res.finish) {
            case "Yes":
                prompt();
                break;
                case "No":
                    main()
        }
    })
}
 prompt()

