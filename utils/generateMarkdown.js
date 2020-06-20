// function to generate the required readme headings
function generateMarkdown(data) {
	return `
# Project Title

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)


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

# Contributing
${data.contributing}

# Tests
${data.tests}

# Contact Information
* ${data.profilePic}
* ${data.userName}
* ${data.userEmail}
`;
}

module.exports = generateMarkdown;
