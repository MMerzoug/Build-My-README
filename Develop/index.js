// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a brief description of your project.',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Please enter the instructions for installing your project.',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Please enter the usage information for your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project.',
      choices: [
        'MIT',
        'GPLv3',
        'Apache License 2.0',
      ],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Please enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please enter your email address.',
    },
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file written successfully');
      }
    });
  }

  // Create a function to initialize app
  function init() {
    // Prompt user for input
    const answers = inquirer.prompt(questions);
  
    // Write README file
    writeToFile('README.md', answers);
  }

// Function call to initialize app
init();
