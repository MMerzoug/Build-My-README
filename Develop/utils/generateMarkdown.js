// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "Apache"){
    return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === "None"){
    return ``
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `MIT (https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `Apache (https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
  1. [Description](#description)
  2. [Installation Instructions](#installationInstructions)
  3. [Usage Information](#usageInformation)
  5. [Contribution Guidelines](#contributionGuidelines)
  6. [Test Instructions](#testInstructions)
  4. [License](#license)
 
## Description
${data.description}

## Installation
${data.installationInstructions}

## Usage Information
${data.usageInformation}

## Contribution Guidelines
${data.contributionGuidelines}

## Test Instructions
${data.testInstructions}

## License
${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
