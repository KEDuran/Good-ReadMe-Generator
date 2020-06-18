function generateMarkdown(data) {
	return `
# ${data.Title}
# ${data.Description}

# Table of contents
* [Installation](#-${data.Installation})
* [Usage](#-${data.Usage})
* [License](#-${data.License})
* [Contributing](#-${data.Contributing})
* [Tests](#-${data.Tests})
* [Questions](#-${data.Questions})

# ${data.Installation}
# ${data.Usage}
# ${data.License}
# ${data.Contributing}
# ${data.Tests}
# ${data.userName}
# ${data.userEmail}
`;
}

module.exports = generateMarkdown;
