<!-- File : index.html -->

<!DOCTYPE html>

<html>

<head>

	<title> Reed College Student Body </title>
	<base href="/" target="_blank">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Importing stylesheets -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="https://use.typekit.net/plm3ftw.css">
	<link rel="stylesheet" href="./src/styles.css" type="text/css">

	<!-- Importing scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
	<!-- Add Firebase products that you want to use -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>

	<script type="text/javascript" src="./src/app.min.js?p=refresh&t=1"></script>

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<!--This is the Highlights Section-->
<section id="highlights">


	<div class="container">

		<div class="row">

			<div class="jumbotron">
				<h1 class="display-4"><span>Funding poll will NOT be recorded on reedsb.com for Fall 2020.</span></h1>
				<p class="lead">Please refer to the SB Info e-mail for the Funding Poll form.</p>
				<hr class="my-4">
				<a class="btn btn-dark btn-lg" href="en-us/funding-poll.php" role="button"></a>
			</div>

		</div>

	</div>


	<div class="container" style="display:none">

		<div class="row">

			<div class="jumbotron">
				<h1 class="display-4"><span>Register your club!</span></h1>
				<p class="lead">It's the club season. Funding poll is nearing and this is your time to register your club for funding poll or Identity funding!</p>
				<hr class="my-4">
				<a class="btn btn-dark btn-lg" href="/register-club" role="button">Register club</a>
			</div>

		</div>

	</div>


	<div class="container" style="display:none">

		<div class="row">

			<div class="jumbotron">
				<h1 class="display-4"><span>Run for senate!</span></h1>
				<p class="lead">Be a part of the Reed student governance. Do you have a thing you want to change about Reed? Be the change you want to see!</p>
				<hr class="my-4">
				<a class="btn btn-dark btn-lg" href="/run-for-senate" role="button">Apply</a>
			</div>

		</div>

	</div>

</section>

	<?php include '../pagelets/footer.php'; ?>

</body>

</html>
