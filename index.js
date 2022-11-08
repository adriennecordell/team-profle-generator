const inquirer  = require('inquirer');
const fs = require('fs')
const jest = require('jest')

const generateHTML =({ name,id, github, email, role, office, school}) => 
`
    <h1>${name}</h1>
    <h3>${id}</h3>
    <h3>${email} <a href="mailto:${email}"></a> </h3>
    <h3>${github}</h3>
    <h3>${role}</h3>
    <h3>${office}</h3>
    <h3>${school}</h3>
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is employees name?',
            
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is employees id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is employees email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is employees role?',
            choices: ['Intern', 'Manager', 'Engineer'],
            default: 'Employee'
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
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.appendFile('profile.html', htmlPageContent, (err) => err ? console.log(err) : console.log('Created profile html page!'));
    })