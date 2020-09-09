<!-- File : run-for-senate	.html -->

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

	

	<!-- Core build with no theme, formatting, non-essential modules -->
	<link href="//cdn.quilljs.com/1.3.6/quill.core.css" rel="stylesheet">
	<script src="//cdn.quilljs.com/1.3.6/quill.core.js"></script>

	<!-- Main Quill library -->
	<script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
	<script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>

	<!-- Theme included stylesheets -->
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
	<link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

	<script type="text/javascript" src="./src/app.min.js?p=refresh&t=2.4"></script>	

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<section id="run-for-senate">
	<div class="container">
		<div class="row">
			<div class="col-1 col-md-1"></div>
			<div class="col-10 col-md-10">
				<div id="sin-rfs-alert-timeout" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  The senate nomination period has ended. We are not accepting more applications. Please try again next year!</a>
					</div>
				</div>
				<div id="sin-rfs-alert" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be logged in to view this form! <a href class="act-login">Login here</a>
					</div>
				</div>
				<div id="sin-rfs-form" class="row d-none">

<form class="form-horizontal sin-rfs-rainbow-label-group">
<fieldset>

<!-- Form Name -->
<legend class="h1">Nomination Form</legend>

<p>
	<span class="small">To run for the senate, you must meet the following requirements:</span>
	<ul class="small">
		<li>Must be a current student at Reed College with active Kerberos credentials.</li>
		<li>You must fill out a petition and get it signed by at least 50 current Reed students. Printed petitions will be located around campus. You can also email Elections Czars at <a href="mailto:jacastell@reed.edu">jacastell@reed.edu</a> and <a href="mailto:cunningk@reed.edu">cunningk@reed.edu</a>.</li>
	</ul>
</p>
<br>

<!-- Text input-->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-1" for="sin-rfs-form-name">Name</label>  
  <div class="col-md-8">
  <input id="sin-rfs-form-name" name="sin-rfs-form-name" type="text" placeholder="Enter your name" class="form-control input-md" readonly>
  <span class="help-block d-block small sin-rfs-helper">Please contact the webmaster if you would want your preferred name used instead. Email: <a href="mailto:raghavp@reed.edu?subject=SBAppIssue [Priority]">raghavp@reed.edu</a>.</span>  
  </div>
</div>

<!-- Multiple Checkboxes (inline) -->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-2" for="sin-rfs-form-year">School Year</label>
  <div class="col-md-8">
  	<div class="custom-control custom-radio">
  		<input type="radio" class="custom-control-input" name="sin-rfs-form-year" id="sin-rfs-form-year-0" value="0">
    	<label class="radio custom-control-label" for="sin-rfs-form-year-0">Freshman</label>
    </div>

  	<div class="custom-control custom-radio">
  		<input type="radio" class="custom-control-input" name="sin-rfs-form-year" id="sin-rfs-form-year-1" value="1">
    	<label class="radio custom-control-label" for="sin-rfs-form-year-1">Sophomore</label>
    </div>

  	<div class="custom-control custom-radio">
  		<input type="radio" class="custom-control-input" name="sin-rfs-form-year" id="sin-rfs-form-year-2" value="2">
    	<label class="radio custom-control-label" for="sin-rfs-form-year-2">Junior</label>
    </div>

  	<div class="custom-control custom-radio">
  		<input type="radio" class="custom-control-input" name="sin-rfs-form-year" id="sin-rfs-form-year-3" value="3">
    	<label class="radio custom-control-label" for="sin-rfs-form-year-3">Senior</label>
    </div>

  </div>
</div>

<!-- Select Basic -->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-4" for="sin-rfs-form-position">Senate Position</label>
  <div class="col-md-8">
    <select id="sin-rfs-form-position" name="sin-rfs-form-position" class="form-control">
    </select>
    <span class="help-block d-block small sin-rfs-helper">You can either run for any <i>primary senate positions</i> (President/Vise President/Senate Member) or any of the already created <i>Vanity positions</i>. You can also create a vanity position by just typing it in. <b>If you create a position, you must also run for it!</b></span>  

  </div>
</div>

<!-- Textarea -->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-5" for="sin-rfs-form-campaign-msg">Campaign <i>(spiel)</i></label>
  <div class="col-md-8">                     
    <textarea class="form-control" id="sin-rfs-form-campaign-msg" name="sin-rfs-form-campaign-msg" placeholder="Enter your campaign message here." rows=8></textarea>
<div class="progress" id="sin-rfs-campaign-prog">
  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span class="h6 small text-primary" id="sin-rfs-campaign-info" style="display:none">0/2500</span>
    <span class="help-block d-block small sin-rfs-helper">Your campaign message will be read by the student body. Briefly talk about yourself and make your claims here. Make sure it is concise and clear in communicating through what you stand for and what makes you stand out from your fellow candidates.</span>  
  </div>
</div>

<!-- Multiple Checkboxes -->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-6" for="sin-rfs-form-certification">Certifications</label>
  <div class="col-md-8">
	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rfs-form-certification" id="sin-rfs-form-certification-0" value="0">
		<label class="custom-control-label" for="sin-rfs-form-certification-0">
			I understand that I may not submit any sensitive information through this form, like passwords or addresses.
		</label>
	</div>

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rfs-form-certification" id="sin-rfs-form-certification-1" value="1">
		<label class="custom-control-label" for="sin-rfs-form-certification-1">
			I have read the eligibility criterion, and I am eligible to run for the senate.
		</label>
	</div>

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rfs-form-certification" id="sin-rfs-form-certification-2" value="2">
		<label class="custom-control-label" for="sin-rfs-form-certification-2">
			The submission does not violate the <a href="https://www.reed.edu/honor_principle/">Honor Principle</a>.
		</label>
	</div>

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rfs-form-certification" id="sin-rfs-form-certification-3" value="3">
		<label class="custom-control-label" for="sin-rfs-form-certification-3">
			I have read Student Information Network's (SIN) <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, and understand how this information will be used.
		</label>
	</div>

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rfs-form-certification" id="sin-rfs-form-certification-4" value="4">
		<label class="custom-control-label" for="sin-rfs-form-certification-4">
			I have filled out and turned in a petition signed by 50 Reed students.
		</label>
	</div>

  </div>
</div>

<!-- Button -->
<div class="form-group row">
  <label class="col-md-4 control-label h4 sin-rfs-rainbow-label-7" for="sin-rfs-form-submit">Finalise</label>
  <div class="col-md-4">
    <button id="sin-rfs-form-submit" name="sin-rfs-form-submit" class="btn btn-primary">Submit</button>
  </div>
</div>

</fieldset>
</form>


				</div>
			</div>
			<div class="col-1 col-md-1"></div>
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

	<?php include '../pagelets/footer.php'; ?>

</body>

</html>








