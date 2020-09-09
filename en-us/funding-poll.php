<!-- File : index.html -->

<!DOCTYPE html>

<html>

<head>

	<title> Reed College Student Body </title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.7">
	<base href="/" target="_blank">

	<!-- Importing stylesheets -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="https://use.typekit.net/plm3ftw.css">
	<link rel="stylesheet" href="./src/funding-poll.css?p=refresh&t=2.1.4" type="text/css">

	<!-- Importing scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://hammerjs.github.io/dist/hammer.min.js"></script>
    <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>

	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
	<!-- Add Firebase products that you want to use -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>

	<script type="text/javascript" src="./src/app.min.js?p=refresh&t=2.8.3"></script>	

	<!-- extra modules specific to the page -->
	<!-- Propeller Global js --> 
	<script src="http://propeller.in/components/global/js/global.js"></script>
	<!-- Propeller accordion js -->
	<script type="text/javascript" src="http://propeller.in/components/accordion/js/accordion.js"></script>

	<link rel="stylesheet" type="text/css" href="./src/propeller.min.css">
	<script type="text/javascript" src="./src/propeller.min.js"></script>




</head>

<body class="sin-app" id="voting-area">

<div class="row" id="sin-fp-login-alert" style="display: none;">
	<div class="col-md-12 col-12">
		<a href="" class="act-login text-dark"><div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">You need to be logged in to vote! Click to login</p>
			</div>
		</div></a>
	</div>
</div>
<div class="row" id="sin-fp-double-alert" style="display: none">
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">Thank you for participating in the funding poll!</p>
			</div>
		</div>
	</div>
</div>
<div class="row" id="sin-fp-timeout-alert" style="display: none">
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-alert jumbotron-fluid">
			<div class="container-fluid text-center">
				<p class="lead pt-text h4">Funding poll has now closed. 558 people voted. Thank you for participating. If your club made it to the Top 30, congratulations! Please click here to request funds. </p>
			</div>
		</div>
	</div>
	<div class="col-md-12 col-12">
		<div class="jumbotron jumbotron-results jumbotron-fluid">
			<div class="container-fluid text-center">
				<div id="sin-fp-results-graphic"></div>
			</div>
		</div>
	</div>
</div>
<section id="preloader-screen" class="h-100 d-none" data-display="block">
	<div class="row h-100">
		<div class="col-12 my-auto text-center">

			<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
					
		</div>
	</div>
</section>


<section id="intro-screen" class="h-100 d-none" data-display="block">
	<div class="row h-100">

		<div class="col-sm-12 my-auto">
			<div class="jumbotron jumbotron-fluid">
				<div class="container-fluid text-center">
					<h1 class="display-4">Welcome, <span id="sin-fp-name"></span></h1>
					<p class="lead vt-text h4">If this is your first time on the platform,
					this is the Voting Area where you can vote for the clubs of your choice! Help choose the clubs that you want to participate in and want to see at Reed. It will take only a few minutes, but can impact your experience at Reed significantly.
					<br>
					<!--<a href="">? Why should I vote ?</a>-->
				</p>
				<br>

				<div class="row">
					<div class="col-md-4 col-0"></div>
					<div class="col-md-2 col-6">
						<h3 id="sin-fp-voter-count"></h3>
						<span class="h5 vt-text">people have voted</span>
					</div>
					<div class="col-md-2 col-6">
						<h3 id="sin-fp-time-until"></h3>
						<span class="h5 vt-text">until funding poll finishes</span>
					</div>
					<div class="col-md-4 col-0"></div>
				</div>
				<br>
				<p><a class="btn btn-primary btn-lg" href="#" role="button" id="fp-enter">Vote</a> <a class="btn btn-light btn-lg" href="#" role="button" id="fp-exit">Exit</a></p>
				<!--
				<p class="h6 vt-text">
					During the funding poll, we will log user data and share it with Election service providers via Firebase. Click “Vote” above to accept SIN’s <a href="">Terms of Service</a> & <a href="">Privacy Policy</a>.
				</p>
				-->


				</div>
			</div>
		</div>

	</div>
</section>


<!--This is the Voting Area-->
<section id="voting-screen" class="d-none flex-wrap justify-content-center text-center" data-display="flex">

<!-- Modal -->
<div class="modal fade" id="instruction_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-fp-style">
      <div class="modal-header">
        <h5 class="modal-title font-weight-bold" id="exampleModalLabel">PLEASE READ THE INSTRUCTION</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Below you see the list of clubs that have entered the funding poll. Each card contains the name of the club, a brief description, and a list of signators. Once you have reviewed a club, you can upvote it, downvote it, give it a boost, or just pass. The more points each club gets, the closer it gets to reaching its expected student body funding. You can boost AT MOST 6 clubs of choice.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue</button>
      </div>
    </div>
  </div>
</div>

<footer class="footer mt-auto py-3 fixed-bottom sin-fp-voter-footer">
  <div class="container">
  	<div class="row">
  		<div class="col-12 col-md-6 mb-2">
  			<div class="row text-center">
  				<div class="col-0 col-sm-0 col-md-0 col-lg-1"></div>	
  				<div class="col-4 col-sm-4 col-md-4 col-lg-3"><div class="container"><span id="sin-fp-dislikes">0</span><span>👎</span></div></div>	
  				<div class="col-4 col-sm-4 col-md-4 col-lg-4"><div class="container"><span id="sin-fp-boosts">0</span><span>⭐</span></div></div>	
  				<div class="col-4 col-sm-4 col-md-4 col-lg-3"><div class="container"><span id="sin-fp-likes">0</span><span>👍</span></div></div>	
  				<div class="col-0 col-sm-0 col-md-0 col-lg-1"></div>	
  			</div>
  		</div>
  		<div id="sin-fp-submit-button-container" class="col-12 col-md-6 sin-fp-submit-button-container text-right">
  			<button id="sin-fp-submit-button" type="button" class="btn btn-warning pmd-ripple-effect btn-primary btn-lg btn-blockr" data-dismiss="modal">Finish</button>
  		</div>
  	</div>
  </div>
</footer>


</section>


</body>

</html>







