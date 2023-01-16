class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit:'[MIT](https://choosealicense.com/licenses/mit/)',
            isc: '[ISC](https://choosealicense.com/licenses/isc/)',
            gnuplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        }
        return licenseLinks[license];
    }

    static renderLicenseSection(license) {
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license.`
        } else {
            return ''
        }
    }

    static generateReadme(answers){
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}
    
## Table of Contents
- [Project Description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

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
${this.renderLicenseSection(answers.license)}
    `
    }
}

module.exports = MarkDown;


