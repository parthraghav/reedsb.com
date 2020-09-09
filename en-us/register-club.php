<!-- File : register-club	.html -->

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

	<!--<script type="text/javascript" src="./src/app.min.js"></script>	-->

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

	<script type="text/javascript" src="./src/app.min.js"></script>	

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<section id="run-for-senate">
	<div class="container">
		<div class="row">
			<div class="col-0 col-md-1"></div>
			<div class="col-10 col-md-10" style="padding-left: 2em;">
				<div id="sin-rc-alert-timeout" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  The club registration period has ended. We are not accepting more applications. Please try again next year!</a>
					</div>
				</div>
				<div id="sin-rc-alert" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be logged in to view this form! <a href class="act-login">Login here</a>
					</div>
				</div>
				<div id="sin-rc-form" class="row d-none">

<form class="form-horizontal sin-rc-rainbow-label-group">
<fieldset>

<!-- Form Name -->
<legend class="h1">Club Registration Form</legend>

<br>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-1">Signators</label>
  <div class="col-md-12"> 
    <span class="help-block d-block small sin-rc-helper2">To register a club, you must have had Signator Training in the beginning of the semester. If you are registering the club individually, select your name. Otherwise, select names of all the cofounders.</span>                      
    <input type="text" name="sin-rc-choose-signator" id="sin-rc-choose-signator" placeholder="Begin typing your name" autocomplete="off" />

  </div>
</div>


<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-2">Title</label>
  <div class="col-md-12">                     
    <span class="help-block d-block small sin-rc-helper2">Make sure that the name of your club or your organisation truly represents itself, it is short and memorable.</span>                      
    <input id="sin-rc-org-name" name="sin-rc-org-name" type="text" placeholder="Enter the name of your organisation" class="form-control input-md">
  </div>
</div>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-3">Contact</label>
  <div class="col-md-12">                     
    <span class="help-block d-block small sin-rc-helper2">Please validate the contact information before entering it.</span>                      
    <textarea class="form-control" id="sin-rc-contact" name="sin-rc-contact" placeholder="List the main points of contact, and their school emails."></textarea>  
  </div>
</div>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-4">About</label>
  <div class="col-md-12">      
    <span class="help-block d-block small sin-rc-helper2">This will be visible to all the voters in the funding poll. Briefly talk about the club. Make sure you are concise and clear in communicating through what your club does or plans to do. (Max: 130 words)</span>                      
    <textarea class="form-control" id="sin-rc-about" name="sin-rc-about" placeholder="How would you describe your club? "></textarea>  
  </div>
</div>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-5">Funding Poll</label>
  <div class="col-md-12">      
    <span class="help-block d-block small sin-rc-helper2">Do you wish to participate in the funding poll? Please note that there is a seperate mechanism to request funds. You can request Identity funding, student body funding for a club or otherwise <a href="request-funds">here</a>. </span>                      

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rc-poll-participate" id="sin-rc-poll-participate-0" value="0">
		<label class="custom-control-label" for="sin-rc-poll-participate-0">
			We wish to participate in the funding poll.
		</label>
	</div>

  </div>
</div>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-6">Identity Status</label>
  <div class="col-md-12">      
    <span class="help-block d-block small sin-rc-helper2">The Student Senate of the Autonomous Student Body of Reed College recognizes that students may face institutional barriers at Reed or in America that prevent equal access to services, aid, and opportunities on the basis of identity. On-campus clubs and organisations can request Identity status, such that once provided, they can have access to a separate funding pool. The purpose of this funding pool is to finance the work of student groups that belong to communities that are historically marginalized at Reed or in the nation at large. These include communities that share a racial, ethnic, cultural, religious, or other historically marginalized identity. In recognizing this, we hope to provide sufficient funds for student organizations to establish and maintain an ongoing campus presence by building community and providing resources that are otherwise insufficient or absent at Reed. This funding pool is intended as a first step in bridging the gap between specific community needs and administrative funding. </span>                      

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rc-identity-status-flag" id="sin-rc-identity-status-flag-0" value="0">
		<label class="custom-control-label" for="sin-rc-identity-status-flag-0">
			We wish to request Identity Status.
		</label>
	</div>
	<Br>
	<div id="sin-rc-id-only" class="d-none">
		<label class="col-md-12 control-label h5 font-weight-bold">WHAT IS YOUR MISSION STATEMENT? (300-550 words)</label>
		<span class="help-block d-block small sin-rc-helper3"><i>Ensure your mission statement reflects current group goals and planned events. There should be cohesion behind the goals of your group, and how your events will help accomplish those groups. This does not need to be an academic writing, but also please be detailed enough to give Senate a full picture of how you plan to build community. Bear in mind, this is a limited pool of money, so you can help us out by clearly prioritizing your budget items!</i></span>
		<textarea class="form-control" id="sin-rc-identity-mission" name="sin-rc-identity-mission" placeholder="What is your mission statement?" rows=8></textarea>  

		<!--<br>-->

		<label class="col-md-12 control-label h5 font-weight-bold d-none">2. How do you plan to build community, and what does "community building" mean to you? (200-400 words) <span class="opt-label">(Optional)</span></label>
		<textarea class="form-control d-none" id="sin-rc-identity-community" name="sin-rc-identity-community" placeholder="How do you plan to build community, and what does `community building` mean to you?" rows=4></textarea>  

		<!--<br>-->

		<label class="col-md-12 control-label h5 font-weight-bold d-none">3. How do your events/activities accomplish this? (100-300 words) <span class="opt-label">(Optional)</span></label>
		<textarea class="form-control d-none" id="sin-rc-identity-activity" name="sin-rc-identity-activity" placeholder="How do your events/activities accomplish this?"></textarea>  

		<!--<br>-->

		<label class="col-md-12 control-label h5 font-weight-bold d-none">4. How will you make sure your group feels open to everyone who identifies with it? (50-300 words) <span class="opt-label">(Optional)</span></label>
		<textarea class="form-control d-none" id="sin-rc-identity-open" name="sin-rc-identity-open" placeholder="How will you make sure your group feels open to everyone who identifies with it?"></textarea>  

		<!--<br>-->

		<label class="col-md-12 control-label h5 font-weight-bold d-none">4. Does your group receive outside funding? If so, it would be helpful for us to know how much, from where, and if those funds are earmarked for anything. <span class="opt-label">(Optional)</span></label>
		<span class="help-block d-block-remove small sin-rc-helper3 d-none"><i>Please be honest with your group's financial situation, some groups have outside funding connections but can still get approved (i.e. Res Life, CLBR, etc)</i></span>
		<textarea class="form-control d-none" id="sin-rc-identity-outside-funding" name="sin-rc-identity-outside-funding" placeholder="Name all the sources and deliverables."></textarea>  


	</div>
  </div>
</div>


<!-- Button -->
<div class="form-group row">

  <label class="col-md-12 control-label h4 sin-rc-rainbow-label-7" for="sin-rc-form-submit"></label>
  <div class="col-md-12">
    <button id="sin-rc-form-submit" name="sin-rc-form-submit" class="btn btn-primary">Submit</button>
  </div>
</div>

</fieldset>
</form>


				</div>
			</div>
			<div class="col-0 col-md-1"></div>
		</div>
	</div>
</section>



	<?php include '../pagelets/footer.php'; ?>

</body>

</html>








