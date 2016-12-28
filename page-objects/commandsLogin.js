var loginCommands = {
	validateForm: function() {
		return this.waitForElementVisible('body', 1000)
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.value('@submit', 'Log In')
      .verify.elementNotPresent('@error')
	},
	fillInForm: function(username, password) {
		return this.waitForElementVisible('body', 1000)
			.setValue('@username', username)
			.setValue('@password', password)
	},
	submit: function() {
		return this.verify.value('@submit', 'Log In')
			.click('@submit')
	},
	validateError: function(errorMessage) {
		return this.verify.visible('@error')
			.verify.containsText('@error', errorMessage)
			.verify.valueContains('@username', '')
			.verify.valueContains('@password', '')
	}
};


module.exports = {
	commands: [loginCommands],
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: '#username'
		},
		password: {
			selector: '#password'
		},
		submit: {
			selector: 'input[type=submit]'
		},
		error: {
			selector: '.error'
		}
	}
};