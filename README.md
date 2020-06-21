# Homework 9 - Good ReadMe Generator

## Project Description

The goal for this homework assignment is to create a command-line application that dynamically generates a README.md file based on the user's input to a series of prompted questions populated in the command-line terminal. Additional details regarding this assignment are addressed in the following sections listed below.

## Table of Contents

- [Links to Submission Items](#links-to-submission-items)
- [Assignment Scope](#assignment-scope)
- [Executing the Script](#executing-the-script)

## Links to Submission Items

A link to the GitHub repo that I used to develop this assignments is included below. I will update this section to include additional details for accessing the final product once it is ready to deploy.

- Link to GitHub Repo - [https://github.com/KEDuran/ReadMe-Generator](https://github.com/KEDuran/ReadMe-Generator)
- Link to Sample Generated ReadMe.md file - [https://github.com/KEDuran/ReadMe-Generator/blob/master/sample/readme.md](https://github.com/KEDuran/ReadMe-Generator/blob/master/sample/readme.md)
- Link to Demo Video for ReadMe Generator App - [https://drive.google.com/file/d/1m-ComMeIbck5cEoKtMGK6WJj0mVhsWJC/view?usp=sharing](https://drive.google.com/file/d/1m-ComMeIbck5cEoKtMGK6WJj0mVhsWJC/view?usp=sharing)

## Assignment Scope

This assignment list various requriement items in order to meet acceptable MVP standards. I listed the various assignment requirements below according to the following subsection in which they apply:

- [User Story](#user-story)
- [Required ReadMe Sections](#required-readme-sections)
- [Acceptance Criteria](#acceptance-criteria)

### User Story

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

### Required ReadMe Sections

The following sections must be included in the generated ReadMe file. In the index.js file, I have included a list of questions that will prompt the user to include content that will be plugged into each of the ReadMe sections listed below.

- At least one badge
- Project title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
  - User GitHub profile picture
  - User GitHub email

### Acceptance Criteria

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```

## Executing the Script

### Node.js Module Used in Project

For this assignment, I used the following node.js module:

- **File System**
  - For this module, I used to _fs.writeFile_ method.

### NPM Module Used in Project

For this assignment, I used the following NPM module:

- **Inquirer**
  - For this module, I used the _inquirer.prompt_ method to prompt the user with specific readme content questions. I also used a _validate_ attribute that is available in the inquirer module in order to ensure each questions was answered.

### Main Commands to Execute Application

In order to execute the generate-readme application, the user must enter the following command into the command-line terminal.

Please make sure you have node.js installed in the local environment that is being used to execute this node.js application.

```sh
node index.js
```
