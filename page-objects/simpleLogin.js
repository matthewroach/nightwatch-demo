module.exports = {
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