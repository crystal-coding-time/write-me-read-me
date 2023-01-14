const inquirer = require('inquirer');
const markDown = require('./lib/ReadmeGen')
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

// README questions
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
        name: 'usage',
        message: "What is the program's intended use?"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the program?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to future development of the program?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username or link?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this program fall under?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];

// Run async query function that pulls questions from our questions array

async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) =>{
        const markDownAnswers = markDown.generateReadme(answers);
        fs.writeFile('README.md', markDownAnswers, function(err) {
            if(err) {
                console.log('Could not save README file')
            } else {
                console.log('Look at all the time you saved using this program!')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery()