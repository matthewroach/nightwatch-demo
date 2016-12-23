var seleniumServer = require('selenium-server');


module.exports = {
	"src_folders": ["tests"],
	"output_folder": "reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"page_objects_path": "",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": seleniumServer.path,
		"host": '127.0.0.1',
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./bin/drivers/chromedriver",
			"webdriver.gecko.driver" : "./bin/drivers/geckodriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "localhost",
			"selenium_host": "127.0.0.1",
			"selenium_port": 4444,
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome",
				"marionette": true
			}
		},

		"ci": {
			"desiredCapabilities": {
				"browserName": "firefox",
				"marionette": true
			}
		}
	}
}
