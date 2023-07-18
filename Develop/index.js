// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
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
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Please enter your contribution guidelines.',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please enter your test instructions.',
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
      name: 'github',
      message: 'Please enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
  ];

function writeToFile(fileName, data) {}
  
// Create a function to initialize app
  function init() {
    // Prompt user for input
    const answers = inquirer.prompt(questions).then((answers) => {
      console.log (answers)
      fs.writeFileSync("READMETest.md", generateMarkdown(answers))
    });
  }

// Function call to initialize app
init();
