
module.exports = {
  'Login Page Initial Render': function(browser) {
    browser
      .init()
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('#username')
      .verify.visible('#password')
      .verify.value( 'input[type=submit]', 'Log In' )
      .verify.elementNotPresent('.error')
      .end()
  },



  'Try to login with no username or password': function(browser) {
    browser
      .init()
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Username and Password is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
      .end()
  },



  'Try to login with a username and no password': function(browser) {
    browser
      .init()
      .setValue( '#username', 'abc' )
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Password is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
      .end()
  },



  'Try to login with a password and no username': function(browser) {
    browser
      .init()
      .setValue( '#password', 'test' )
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Username is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
      .end()
  },



  'Enter wrong username and password': function(browser) {
    browser
      .init()
      .setValue( '#username', 'abc' )
      .setValue( '#password', '123' )
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Invalid Username and/or Password' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
      .end();
  }


};
