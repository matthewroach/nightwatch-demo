
module.exports = {
  'Login Page Initial Render': function(browser) {
    var login = browser.page.simpleLogin();

    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.value( '@submit', 'Log In' )
      .verify.elementNotPresent('@error')

    browser.end();
  },



  'Try to login with no username or password': function(browser) {
    var login = browser.page.simpleLogin();
    
    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .click('@submit')
      .verify.visible('@error')
      .verify.containsText( '@error', 'Username and Password is empty' )
      .verify.valueContains( '@username', '' )
      .verify.valueContains( '@password', '' )

    browser.end();
  },



  'Try to login with a username and no password': function(browser) {
    var login = browser.page.simpleLogin();

    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .setValue( '@username', 'abc' )
      .click('@submit')
      .verify.visible('@error')
      .verify.containsText( '@error', 'Password is empty' )
      .verify.valueContains( '@username', '' )
      .verify.valueContains( '@password', '' )

    browser.end();
  },



  'Try to login with a password and no username': function(browser) {
    var login = browser.page.simpleLogin();

    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .setValue( '@password', 'test' )
      .click('@submit')
      .verify.visible('@error')
      .verify.containsText( '@error', 'Username is empty' )
      .verify.valueContains( '@username', '' )
      .verify.valueContains( '@password', '' )

    browser.end();
  },



  'Enter wrong username and password': function(browser) {
    var login = browser.page.simpleLogin();

    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .setValue( '@username', 'abc' )
      .setValue( '@password', '123' )
      .click('@submit')
      .verify.visible('@error')
      .verify.containsText( '@error', 'Invalid Username and/or Password' )
      .verify.valueContains( '@username', '' )
      .verify.valueContains( '@password', '' )

    browser.end();
  }


};
