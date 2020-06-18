function generateMarkdown(data) {
	return `
# ${data.Title}
# ${data.Description}

# Table of contents

* [Installation]()
* Usage

# ${data.Installation}
# ${data.Usage}
# ${data.License}
# ${data.Contributing}
# ${data.Tests}
# ${data.Questions}

`;
}

module.exports = generateMarkdown;
