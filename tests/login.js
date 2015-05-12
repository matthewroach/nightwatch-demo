
module.exports = {
  'Login Page Initial Render': function( _browser ) {
    _browser
      .url('http://dev.matthewroach.me/login/')
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('#username')
      .verify.visible('#password')
      .verify.value( 'input[type=submit]', 'Log In' )
      .verify.elementNotPresent('.error')
  },



  'Try to login with no username or password': function( _browser ) {
    _browser
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Username and Password is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
  },



  'Try to login with a username and no password': function( _browser ) {
    _browser
      .setValue( '#username', 'abc' )
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Password is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
  },



  'Try to login with a password and no username': function( _browser ) {
    _browser
      .setValue( '#password', 'test' )
      .click('input[type=submit]')
      .pause(1000)
      .verify.visible('.error')
      .verify.containsText( '.error', 'Username is empty' )
      .verify.valueContains( '#username', '' )
      .verify.valueContains( '#password', '' )
  },



  'Enter wrong username and password': function( _browser ) {
    _browser
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


}
