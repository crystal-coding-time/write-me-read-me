class MarkDown {
    static generateReadme(answers){
        return `
    # ${answers.title}
    
    ## Table of Contents
    - [Project Description](#description)
    - [Usage](#usage)
    - [Installation](#installation)
    - [Contributing](#contributing)
    - [Questions](#questions)
    - [License](#license)

    ## Description
    ${answers.description}

    ## Usage
    ${answers.usage}

    ## Installation
    ${answers.installation}

    ## Contributing
    ${answers.contributing}

    ## Questions
    ${answers.email}
    ${answers.github}

    ## License
    ${answers.license}
    `
    }
}

module.exports = MarkDown;


