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

	<script type="text/javascript" src="./src/app.min.js"></script>	
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<section id="run-for-senate">
	<div class="container">
		<div class="row">
			<div class="col-0 col-md-1"></div>
			<div class="col-10 col-md-10" style="padding-left: 2em;">
				<div id="sin-rf-alert" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be logged in to view this form! <a href class="act-login">Login here</a>
					</div>
				</div>
				<div id="sin-rf-form" class="row d-none">

<form class="form-horizontal sin-rf-rainbow-label-group">
<fieldset>

<!-- Form Name -->
<legend class="h1">Fund Request Form</legend>

<br>

<div class="form-group row">
  <div class="col-md-6"> 
  	<label class="control-label h4 sin-rf-rainbow-label-1">Purpose</label>
    <span class="help-block d-block small sin-rf-helper2">Please choose which of the following closely describe the purpose of this fund request. If it's a community event/project administered by Club/Organisation, choose 'Club/Organisation'.</span>                      

    <select id="sin-rf-purpose" name="sin-rf-purpose" class="form-control">
      <option value="0">Select...</option>
      <option value="1">Club/Organisation Funding</option>
      <option value="2">Community Event</option>
      <option value="3">Community Project</option>
    </select>
  </div>

  <div class="col-md-6"> 
  <label class="control-label h4 sin-rf-rainbow-label-1">Reserve</label>
    <span class="help-block d-block small sin-rf-helper2">You may choose to recieve funding from different money pools. Please note each has its own requirements, eligibility criteria. The form submission assumes you have read and you understand them.</span>                      

    <select id="sin-rf-reserve" name="sin-rf-reserve" class="form-control">
      <option value="0">Select...</option>
      <option value="1">Identity Funds</option>
      <option value="2">Student Body Funds</option>
      <option value="3">Finance Committee</option>
    </select>


  </div>
</div>


<div class="form-group row">
  <div id="when-signator" class="col-md-6 d-none">                     
  <label class=" control-label h4 sin-rf-rainbow-label-3">Signator</label>
    <span class="help-block d-block small sin-rc-helper2">To request funds, you MUST be a trained signator. Please select the signator below. Training happens in the beginning of each semester. Contact the senate office to know more.</span>                      
    <input type="text" name="sin-rf-choose-signator" id="sin-rf-choose-signator" />
  </div>

  <div id="when-organisation" class="col-md-6 d-none">                     
  <label class=" control-label h4 sin-rf-rainbow-label-4">Organisation</label>
    <span class="help-block d-block small sin-rc-helper2">You have specified that you are applying on behalf of an organisation or a club. Please choose the club. If your club doesn't show up, then it is not eligible for the selected fund reserve.</span>                      
    <!--<input type="text" name="sin-rf-choose-organisation" id="sin-rd-choose-organisation" />-->
    <select id="sin-rf-choose-organisation" name="sin-rf-choose-organisation" class="form-control">
      <option value="0">Select...</option>
    </select>
  </div>

</div>



<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rf-rainbow-label-5">Message</label>
  <div class="col-md-12">                     
    <span class="help-block d-block small sin-rf-helper2">What is the purpose of these requested funds? Briefly describe in less than 150 words.</span>                      
    <input id="sin-rf-elaborate-purpose" name="sin-rf-elaborate-purpose" type="text" placeholder="Make sure to be clear and concise" class="form-control input-md" maxlength="800">
  </div>
</div>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rf-rainbow-label-6">Itemised Breakdown</label>
  <span class="help-block d-block small sin-rc-helper2 pl-3">An itemized budget is a list of the items you wish to purchase with Student Body funds, as well as a plan for how you intend to use those items. Each budget item should be listed with specific prices, and followed by a description. Descriptions should provide details about the specific thing you wish to purchase and why. When breaking down requests by item, please leave spacing between each item so it is easier to read. These prices of all items should add up to the total amount you requested. This lets Senate know exactly where the money will go.</span>                      
</div>

<div class="container-fluid" id="sin-rf-budget-form">
	<div class="row d-none" id="sin-rf-item-header">
		<div class="col-1"></div>
		<div class="col-4">Item</div>
		<div class="col-3">Category</div>
		<div class="col-3">Amount</div>
		<div class="col-1"></div>
	</div>
	<div class="alert alert-secondary" role="alert" id="sin-rf-empty-cart">
		There are no items in your budget. Add at least one item to continue.
	</div>
	<div class="row" id="sin-rf-item-footer">
		<div class="col-5"><button id="sin-rf-add-item" name="sin-rf-add-item" class="btn btn-success">Add Item</button></div>
		<div class="col-3">Total</div>
		<div class="col-3">
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
				<input type="number" class="form-control" placeholder="Amount" aria-label="Amount" name="sin-rf-item-cost-final" id="sin-rf-item-cost-final" value="00.00" readonly></div>
		</div>
		<div class="col-1"></div>
	</div>
</div> 

<Br><br>

<div class="form-group row">
  <label class="col-md-12 control-label h4 sin-rf-rainbow-label-7">Certifications</label>
  <div class="col-md-12">                           

	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rf-certification-0" id="sin-rf-certification-0" value="0">
		<label class="custom-control-label" for="sin-rf-certification-0">
			I understand that I may not submit any sensitive information through this form, like passwords or addresses.
		</label>
	</div>
	<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" name="sin-rf-certification-1" id="sin-rf-certification-1" value="0">
		<label class="custom-control-label" for="sin-rf-certification-1">
			The submission does not violate the <a href="https://www.reed.edu/honor_principle/">Honor Principle</a>.
		</label>
		

	</div>

  </div>
</div>



<!-- Button -->
<div class="form-group row">

  <label class="col-md-12 control-label h4 sin-rf-rainbow-label-7" for="sin-rf-form-submit"></label>
  <div class="col-md-12">
    <button id="sin-rf-form-submit" name="sin-rf-form-submit" class="btn btn-primary">Submit</button>
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








