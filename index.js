const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// App questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contribution?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license?'
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];

// Run async query function 

async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
        return answers;
    })
}