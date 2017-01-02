
module.exports = {
  'Login Page Initial Render': function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .validateForm()

    browser.end();
  },



  'Try to login with no username or password': function(browser) {
    var login = browser.page.commandsLogin();
    
    login.navigate()
      .submit()
      .validateError('Username and Password is empty')

    browser.end();
  },



  'Try to login with a username and no password': function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm('abc', '')
      .submit()
      .validateError('Password is empty')

    browser.end();
  },



  'Try to login with a password and no username': function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm('', 'test')
      .submit()
      .validateError('Username is empty')

    browser.end();
  },



  'Enter wrong username and password': function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm('abc', '123')
      .submit()
      .validateError('Invalid Username and/or Password')

    browser.end();
  }


};
