<!-- File : index.html -->

<!DOCTYPE html>

<html>

<head>

	<title> Reed College Student Body </title>
	<base href="/" target="_blank">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.7">

	<!-- Importing stylesheets -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="https://use.typekit.net/plm3ftw.css">
	<link rel="stylesheet" href="./src/election-voting.css?p=refresh&t=1.2.2" type="text/css">

	<!-- Importing scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://hammerjs.github.io/dist/hammer.min.js"></script>

	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
	<!-- Add Firebase products that you want to use -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>

	<script type="text/javascript" src="./src/app.vendor.js?p=refresh&t=1.1.1"></script>	
	<script type="text/javascript" src="./src/app.min.js?p=refresh&t=2.1.4"></script>	
	<script type="text/javascript" src="./src/election-voting-vendor.js"></script>	
	<script type="text/javascript" src="./src/election-voting.js"></script>	


	<!-- extra modules specific to the page -->
	<!-- Propeller Global js --> 
	<script src="http://propeller.in/components/global/js/global.js"></script>
	<!-- Propeller accordion js -->
	<script type="text/javascript" src="http://propeller.in/components/accordion/js/accordion.js"></script>

	<link rel="stylesheet" type="text/css" href="./src/propeller.min.css">
	<script type="text/javascript" src="./src/propeller.min.js"></script>




</head>


<body class="sin-app" id="voting-area">

<div class="row h-100" id="sin-se-login-alert" style="display: none;">
	<div class="col-md-12 col-12">
		<a href="" class="act-login text-dark"><div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">You need to be logged in to vote! Click to login</p>
			</div>
		</div></a>
	</div>
</div>
<div class="row h-100" id="sin-se-double-alert" style="display: none">
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">Thank you for participating in the senate elections!</p>
			</div>
		</div>
	</div>
</div>
<div class="row h-100" id="sin-se-timeout-alert" style="display: none">
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">Senate Election has closed has now closed. Thank you for voting! </p>
			</div>
		</div>
	</div>
	<!--
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-results jumbotron-fluid">
			<div class="container-fluid text-center">
				<div id="sin-se-results-graphic"></div>
			</div>
		</div>
	</div>
	-->
</div>
<section id="preloader-screen" class="h-100 d-none" data-display="block">
	<div class="row h-100">
		<div class="col-12 my-auto text-center">

			<div class="lds-ring text-warning"><div></div><div></div><div></div><div></div></div>
					
		</div>
	</div>
</section>


<section id="intro-screen" class=" d-none h-100" data-display="block">
	<div class="row h-100">

		<div class="col-sm-12 my-auto">
			<div class="jumbotron jumbotron-fluid">
				<div class="container-fluid text-center">
					<h1 class="display-4">Welcome, <span id="sin-se-name"></span></h1>
					<p class="lead vt-text h4">If this is your first time on the platform,
					this is the Voting Area where you can vote for the senate! Help make a difference in our community during this senate election. It will take only a few minutes, but can impact your quality of life at Reed significantly.
					<br>
					<!--<a href="">? Why should I vote ?</a>-->
				</p>
				<br>

				<div class="row">
					<div class="col-md-4 col-0"></div>
					<div class="col-md-2 col-6">
						<h3 id="sin-se-voter-count">0</h3>
						<span class="h5 vt-text">people have voted</span>
					</div>
					<div class="col-md-2 col-6">
						<h3 id="sin-se-time-until">0:00</h3>
						<span class="h5 vt-text">until senate election finishes</span>
					</div>
					<div class="col-md-4 col-0"></div>
				</div>
				<br>
				<button class="btn btn-warning btn-lg btn-inline-block" role="button" id="sin-se-enter">Vote</a>

				</div>
			</div>
		</div>

	</div>
</section>

<!--This is the Voting Area-->
<section id="voting-screen" class=" flex-wrap justify-content-center text-center h-100" data-display="flex">
	<div class="d-none row h-100" id="se-vote-how">
		<div class="col-md-12">
			<div id="sin-se-quorum-no" class="container d-flex h-100">
				<div class="text-center justify-content-center align-self-center mx-0 mx-auto">
					<h1 class="text-light">How do you wish to vote?</h1>
					<p class="lead text-light">
						If you choose to vote qorum, you will be redirected to the screen where you will be able to select candidates for different positions. However, if you choose to participate in the election but not cast a vote, you can select NO QORUM.
					</p>
					<button id="sin-se-qor-button" type="button" class="btn btn-warning btn-lg btn-inline-block" data-dismiss="modal"><i class="fa fa-arrow-left"></i> QUORUM</button>
					<button id="sin-se-nqor-button" type="button" class="btn btn-danger btn-lg btn-inline-block" data-dismiss="modal">NO QORUM <i class="fa fa-arrow-right"></i></button>
				</div>
			</div>
		</div>
	</div>
	<div class="d-none row h-100" id="se-vote-done">
		<div class="col-md-12">
			<div id="sin-se-quorum-no" class="container d-flex h-100">
				<div class="text-center justify-content-center align-self-center mx-0 mx-auto">
					<h1 class="text-success"><i class="fa fa-check-circle"></i></h1>
					<h1 class="text-light">Thank you for voting!</h1>
					<p class="lead text-light">
						You will be redirected back to the homepage in <span id="sin-se-redirect-count"></span> seconds.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="d-none row h-100" id="se-voter">
		<!-- Rearranger -->	

		<div id="sin-se-comp1" class="">
			<div class="p-3" id="sin-se-position-box">
				<div class="p-4">
					<!--<span class="h1 badge badge-pill badge-warning">First Category</span>
					<br>-->
					<span id="sin-se-running-for" class="h1 text-light"></span>
				</div>
			</div>
								
					<p id="sin-se-instructions" class="text-primary px-3"><i class="fa fa-question-circle"></i> Please reorder the nominees from the most suitable for the position to the least suitable simply by dragging them.</p>
			<div class="p-3" id="sin-se-rearranger">
				<div class="pl-4 pr-4 pb-4">
					<div id="sin-se-items" class="m-0 p-0">
						  <!--
						  <div class="m-1 grabbable sin-se-item row no-gutters">
						  	<div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
						  		<h1 class="align-middle my-auto">1</h1>
						  	</div>
						  	<div class="col-10 col-sm-10 col-md-7 sin-se-details">
						  		<div class="card-body text-left">
						  			<h1 class="card-title mb-0">Parth Raghav '22</h1>
						  			<p class="card-text sin-se-description mb-0">Climate change is real! Let's make a change in the world</p>
						  			<p class="card-text mb-0"><small class="text-muted">654 other people voted for them.</small></p>
						  		</div>
						  	</div>
						  	<div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
						  		<img src="https://picsum.photos/id/1027/50/50" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">   	
						  	</div>
						  	<div class="col-md-12 sin-se-placeholder"></div>
						  </div>

						  <div class="m-1 grabbable sin-se-item row no-gutters">
						  	<div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
						  		<h1 class="align-middle my-auto">2</h1>
						  	</div>
						  	<div class="col-10 col-sm-10 col-md-7 sin-se-details">
						  		<div class="card-body text-left">
						  			<h1 class="card-title mb-0">Parth Raghav '22</h1>
						  			<p class="card-text sin-se-description mb-0">Climate change is real! Let's make a change in the world</p>
						  			<p class="card-text mb-0"><small class="text-muted">654 other people voted for them.</small></p>
						  		</div>
						  	</div>
						  	<div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
						  		<img src="https://picsum.photos/id/1027/50/50" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">   	
						  	</div>
						  	<div class="col-md-12 sin-se-placeholder"></div>
						  </div>


						  <div class="m-1 grabbable sin-se-item row no-gutters">
						  	<div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
						  		<h1 class="align-middle my-auto">2</h1>
						  	</div>
						  	<div class="col-10 col-sm-10 col-md-7 sin-se-details">
						  		<div class="card-body text-left">
						  			<h1 class="card-title mb-0">Parth Raghav '22</h1>
						  			<p class="card-text sin-se-description mb-0">Climate change is real! Let's make a change in the world</p>
						  			<p class="card-text mb-0"><small class="text-muted">654 other people voted for them.</small></p>
						  		</div>
						  	</div>
						  	<div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
						  		<img src="https://picsum.photos/id/1027/50/50" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">   	
						  	</div>
						  	<div class="col-md-12 sin-se-placeholder"></div>
						  </div>

						  <div class="m-1 grabbable sin-se-item row no-gutters">
						  	<div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
						  		<h1 class="align-middle my-auto">2</h1>
						  	</div>
						  	<div class="col-10 col-sm-10 col-md-7 sin-se-details">
						  		<div class="card-body text-left">
						  			<h1 class="card-title mb-0">Parth Raghav '22</h1>
						  			<p class="card-text sin-se-description mb-0">Climate change is real! Let's make a change in the world</p>
						  			<p class="card-text mb-0"><small class="text-muted">654 other people voted for them.</small></p>
						  		</div>
						  	</div>
						  	<div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
						  		<img src="https://picsum.photos/id/1027/50/50" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">   	
						  	</div>
						  	<div class="col-md-12 sin-se-placeholder"></div>
						  </div>

						  <div class="m-1 grabbable sin-se-item row no-gutters">
						  	<div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
						  		<h1 class="align-middle my-auto">3</h1>
						  	</div>
						  	<div class="col-10 col-sm-10 col-md-7 sin-se-details">
						  		<div class="card-body text-left">
						  			<h1 class="card-title mb-0">Parth Raghav '22</h1>
						  			<p class="card-text sin-se-description mb-0">Climate change is real! Let's make a change in the world</p>
						  			<p class="card-text mb-0"><small class="text-muted">654 other people voted for them.</small></p>
						  		</div>
						  	</div>
						  	<div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
						  		<img src="https://picsum.photos/id/1027/50/50" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">   	
						  	</div>
						  	<div class="col-md-12 sin-se-placeholder"></div>
						  </div>
						-->









					
					</div>
											<br><span class="sin-se-disabled">~ This is the end of nominee list for this position ~</span>
				</div>
			</div>

						<div class="p-3" id="sin-se-position-box">
				<div class="p-4">
					<button id="sin-se-submit-button" type="button" class="btn btn-warning btn-lg btn-block" data-dismiss="modal">Next</button>
				</div>
			</div>
		</div>

		<!-- Browser -->
		<div id="sin-se-comp2" class="">
			<div class="container d-flex h-100">
				<div id="sin-se-unopened-tab" class="d-none text-center justify-content-center align-self-center mx-0 mx-auto">
					<span class="h1"><i class="fa fa-road"></i></span><br>
					<span class="align-middle">Click on a nominee to view their spiel here...</span>
				</div>
				<div id="sin-se-loading-tab" class="d-none sin-se-contentbox-preloader-2 text-center justify-content-center align-self-center mx-0 mx-auto">
					<div class="lds-ring text-warning"><div></div><div></div><div></div><div></div></div>
				</div>

				<div id="sin-se-data-tab" class="d-none jumbotron jumbotron-fluid text-center justify-content-center align-self-center mx-0 mx-auto rounded sin-se-nominee-tab px-4 h-100">
				  <div class="container">
				  	<p><i>Why vote for</i></p>
				    <h1 class="display-4">{{name}}</h1>
				    <hr>
				    <p class="lead">{{msg}}</p>
				    <small class="text-light">Last updated on {{date}}.</small>
				  </div>
				</div>
			</div>
		</div>
	</div>

</section>






<script type="text/javascript">

</script>



</body>

</html>








