<!-- File : index.html -->

<!DOCTYPE html>

<html>

<head>

	<title> Reed College Student Body </title>

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

	<?php include './pagelets/header.php'; ?>

<!--This is the Highlights Section-->
<section id="highlights">


	<div class="container">
		
		<div class="row">
			
			<div class="jumbotron">
				<h1 class="display-4"><span>Vote for your favorite clubs!</span></h1>
				<p class="lead">Funding Poll is live. Vote for your favorite clubs. The more votes they get, the more chance they will have at reaching their funding goal.</p>
				<hr class="my-4">
				<a class="btn btn-dark btn-lg" href="/funding-poll" role="button">Vote</a>
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

<!--This is the About Section-->
<!--
<section id="about">

	<div class="container">
		
		<div class="row">
			
			<div class="col-lg-8 mx-auto text-center">
				
				<h1>About us</h1>

				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</p>

				<br>

				<h3>Meet our superheroes</h3>

				<br>

				<div class="big-image-frame" data-list-repeat="users|figure" data-list-resolved="false">
					
					<figure class="figure text-center" data-hover-active="true" data-hover-data="defer">
						<a href="#{{imgUrl}}"><img src="{{imgUrl}}" alt="..." width="175" height="175" class="ml-md-1 my-md-1 figure-img img-fluid rounded"></a>
						<figcaption class="figure-caption text-center superhero-caption">
							<h4>{{name}}</h4>
							<h6>{{position}}</h6>
						</figcaption>
						<div class='hover-fluid-box' data-hover-id={{id}}>
							<h5>{{name}}</h5>
							<span>{{pronouns}}</span>
							<h6>Class of '{{class}} ({{major}})</h6>
							<span>{{position}}, {{reign}}</span>
							<span>{{bio}}</span>
						</div>
					</figure>

				</div>

				<p>
					<a href="">View previous senate members</a>
				</p>

			</div>

		</div>

	</div>
	
</section>
-->

<!--This is the Archive Section-->
<!--
<section id="archive">

	<div class="container">
		
		<div class="row">
			
			<div class="col-lg-8 mx-auto text-center">
				
				<h1>Archive</h1>

				<p>
					Access SB Info's email on our little time machine
				</p>

				<select id="inputState" class="form-control">
					<option selected>Select an issue...</option>
					<option>...</option>
				</select>

			</div>

		</div>

	</div>
	
</section>
-->

<!--This is the bylaws section-->

<!--

<section id="archive">

	<div class="container">
		
		<div class="row">
			
			<div class="col-lg-8 mx-auto text-center">
				
				<h1>Archive</h1>

				<p>
					Access SB Info's email on our little time machine
				</p>

				<select id="inputState" class="form-control">
					<option selected>Select an issue...</option>
					<option>...</option>
				</select>

			</div>

		</div>

	</div>
	
</section>

-->

	<?php include './pagelets/footer.php'; ?>

</body>

</html>








