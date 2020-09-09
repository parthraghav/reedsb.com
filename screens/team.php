<!-- File : team	.html -->

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

	<script type="text/javascript" src="./src/app.js"></script>	
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<section id="team">
	<div class="container">
		<div class="row">
			<div class="col-0 col-md-0"></div>
			<div class="col-10 col-md-12" id="sin-bylaws" style="padding-left: 2em;">
				<h1 class="text-center display-4">Team</h1><br>
				<h3 class="text-center">Meet our superheroes!</h3>

<div id="sin-tm-collection" class="d-none card-columns" data-list-repeat="users|div" data-list-resolved="false">
	<div class="card sin-tm-card" style="width: 18rem;" data-hover-active="true" data-hover-data="defer">
		<img class="card-img-top" src="{{imgUrl}}" alt="Card image cap">
		<div class="alert alert-primary bg-primary rounded-bottom mb-0 border border-secondary" role="alert">
  			{{bio}}
		</div>
		<a data-toggle="modal" data-target="#sinLetterModal-{{id}}" class="btn btn-primary badge-pill text-light">Read their story!</a>
		<div class="card-body">
			<span class="badge badge-success">{{class}}</span><span class="badge badge-warning">{{major}}</span>
			<h5 class="card-title mb-0">{{name}}</h5>
			<p class="card-text">{{position}}</p>
			<hr>
			<p class="card-text">
				<b>Office Hours</b><br>
				{{officeHours}}<br>
				<b>Contact Information</b><br>
				{{contact}}
			</p>
		</div>
	</div>
</div>

			</div>
			<div class="col-0 col-md-0"></div>
		</div>
	</div>
</section>

<div id="sinLetterModal-source" data-list-repeat="biographies|div" data-list-resolved="false">
	<div class="modal fade" id="sinLetterModal-{{id}}" tabindex="-1" role="dialog" aria-labelledby="sinLetterModalLabel-{{id}}" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header bg-primary rounded-0">
	        <h1 class="modal-title text-white" id="sinLetterModalLabel-{{id}}">Letter</h1>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        {{content}}
	      </div>
	    </div>
	  </div>
	</div>
</div>


	<?php include '../pagelets/footer.php'; ?>

</body>

</html>








