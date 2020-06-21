// function to generate the required readme headings
function generateMarkdown(data) {
	return `
# Project Title

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


${data.title}

# Description
${data.description}

# Table of contents
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-License)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

* For more information on license types, please reference this website for additional licensing information - [https://choosealicense.com/](https://choosealicense.com/).

# Contributing
${data.contributing}

# Tests
${data.tests}

# Contact Information
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
* Profile Picture: 

![Uploaded profile pic provided by user.](https://github.com/${data.userName}.png)
`;
}

module.exports = generateMarkdown;
