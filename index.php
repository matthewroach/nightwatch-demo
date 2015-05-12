<?php

	$loggedIn = false;
	$error = '';

	if ( $_POST ) {
		if ( empty($_POST['username']) && empty($_POST['password']) ) {
			$error = 'Username and Password is empty';
		} else if ( !empty($_POST['username']) && empty($_POST['password']) ) {
			$error = 'Password is empty';
		} else if ( empty($_POST['username']) && !empty($_POST['password']) ) {
			$error = 'Username is empty';
		} else {

			if ( $_POST['username'] == 'testing' && $_POST['password'] == 'test' ) {
				$loggedIn = true;
			} else {
				$error = 'Invalid Username and/or Password';
			}
		}
	}

?>
<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Login Demo</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

	<div class="container">


		<?php
			if ( $loggedIn ) {
		?>

			<h1>Dashobard</h1>

		<?php
			} else {
		?>


		<form method="POST" action="">

			<fieldset>
				<legend>Login</legend>

				<?php
					 if ( $error ) {
				?>
				<div class="error">
					<?php echo $error ?>
				</div>
				<?php
					}
				?>

				<div>
					<label for="username">Username</label>
					<input type="text" name="username" id="username" />
				</div>

				<div>
					<label for="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>

				<div>
					<input type="submit" value="Log In" />
				</div>

			</fieldset>
		</form>

	<?php
		}
	?>

	</div>

</body>
</html>
