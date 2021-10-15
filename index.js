const inquirer = require("inquirer");
const fs = require("fs");



// ask user questions 
inquirer.prompt([
    {
        type: "input",
        message:"What is the title of your project?",
        name:"title"
    },
    {
        type: "input",
        message:"Describe your project!",
        name:"description"
    },
    {
        type: "input",
        message:"How do I install this project?",
        name:"installation"
    },
    {
        type: "input",
        message:"What is the usage of your project?",
        name:"usage"
    },
    {
        type: "checkbox",
        message:"Which licenses are required?",
        choices:["Apache", "Boost", "Eclipse", "GNU"],
        name:"license"
    },
    {
        type: "input",
        message:"Who contributed to this project?",
        name:"contribution"
    },
    {
        type: "input",
        message:"Please describe which tests were used in this project!",
        name:"test"
    },
    {
        type: "input",
        message:"What is your GitHub URL?",
        name:"github"
    },
    {
        type: "list",
        message:"How to contact you?",
        choices:["email", "text", "social media", "other"],
        name:"contact"
    },
    {
        type: "input",
        message:"What is your email?",
        name:"email"
    }
    
]).then(({title, description, installation, usage, license, contribution, test, github, contact, email})=> {
    
const generateReadme = 
`
# **${title}**

## Description

#### ${description}
<br>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#email)
<br>

## Installation

#### ${installation}
<br>

## Usage

#### ${usage}
<br>

## License 

#### ${license}
<br>

## Contributing 

#### ${contribution}
<br>

## Tests

#### ${test}
<br>

## Questions

#### *GitHub: [https://github.com/${github}](https://github.com/${github}*
#### *Email: [${email}](${email})*
#### *Preferred Contact: [${contact}](${contact})*`

fs.writeFileSync(`README(${title}).md`, generateReadme)

// switch(license) {
//     case "Apache":
//         let licenseBlock = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//     break;

//     case "Boost":
//         let licenseBoost = [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//     break;

//     case "Eclipse":
//         let licenseEclipse = [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
//     break;

//     case "GNU":
//         let licenseGNU = [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//     break;
// }
 
})


