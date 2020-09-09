<!-- File : dash-door	.html -->

<!DOCTYPE html>

<html>

<head>

	<title> Reed College Student Body </title>
	<base href="/" target="_blank">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Importing stylesheets -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">-->
	<script src="https://kit.fontawesome.com/4ed3a3c919.js"></script>
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

	<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

	<script type="text/javascript" src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

	<script type="text/javascript" src="./src/app.min.js?p=refresh"></script>	

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

</head>

<body class="sin-app">

	<?php include '../pagelets/header.php'; ?>

<section id="dash-door">
	<div class="container">

		<div class="row">
			<div class="col-12 col-md-12" style="padding-left: 2em;">
				<div id="sin-dd-alert" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be logged in to view this page! <a href class="act-login">Login here</a>
					</div>
				</div>
				<div id="sin-dd-alert-auth" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be authorised to view this page. Contact the webmaster for more information. </a>
					</div>
				</div>

				<div id="sin-dd-viewer" class="row d-none">

    <ul class="nav nav-pills">
        <li class="nav-item">
            <a href="#club_viewer_tab" class="nav-link active" data-toggle="tab">Clubs</a>
        </li>
        <li class="nav-item">
            <a href="#budgets_tab" class="nav-link" data-toggle="tab">Budgets</a>
        </li>

        <li class="nav-item">
            <a href="#campaigns_tab" class="nav-link" data-toggle="tab">Campaigns</a>
        </li>
        <li class="nav-item">
            <a href="#accounts_tab" class="nav-link" data-toggle="tab">Signatories</a>
        </li>
        <li class="nav-item">
            <a href="#hours_tab" class="nav-link" data-toggle="tab">Hours</a>
        </li>
    </ul>
    <br><br>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="club_viewer_tab">

		    <table width="100%" class="display" id="club_viewer" cellspacing="0">
		        <thead>
		            <tr>
		                <th></th>
		                <th></th>
		                <th>Name</th>
		                <th>Signators</th>
		                <th>Votes</th>
		                <th></th>                
		                <th></th>                
		                <th></th>                
		            </tr>
		        </thead>
		        <tfoot>
		            <tr>
		                <th></th>
		                <th></th>
		                <th>Name</th>
		                <th>Signators</th>
		                <th>Votes</th>
		                <th></th>                
		                <th></th>                
		                <th></th>               
		            </tr>
		        </tfoot>
		    </table>

        </div>
        <div class="tab-pane fade" id="budgets_tab">


		<div class="row">
		   	<div class="col-12 text-right pb-3"><button id="sin-dd-refresh" type="button" class="btn btn-warning"><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></div>
		</div>

		    <table width="100%" class="display" id="budgets_viewer" cellspacing="0">
		        <thead>
		            <tr>
		                <th></th>
		                <th></th>
		                <th>Name</th>
		                <th>Signators</th>
		                <th>Amount</th>
		                <th>Reserve</th>                
		                <th>Purpose</th>                
		                <th>Date</th>                
		                <th></th>                
		            </tr>
		        </thead>
		        <tfoot>
		            <tr>
		                <th></th>
		                <th></th>
		                <th>Name</th>
		                <th>Signators</th>
		                <th>Amount</th>
		                <th>Reserve</th>                
		                <th>Purpose</th>                
		                <th>Date</th>                
		                <th></th>               
		            </tr>
		        </tfoot>
		    </table>

        </div>
        <div class="tab-pane fade" id="campaigns_tab">

			<div class="row" id="sin-dd-alert-no-campaign">
				<div class="col-md-12 col-12">
					<a href="" class="act-login text-dark"><div class="jumbotron jumbotron-alert jumbotron-fluid">
						<div class="container-fluid text-center">
							<p class="lead pt-text h4">You have not setup any campaigns yet.</p>
						</div>
					</div></a>
				</div>
			</div>

        </div>
        <div class="tab-pane fade" id="accounts_tab">

			<div class="row" id="sin-dd-alert-no-accounts">
				<div class="col-md-12 col-12">
					<div class="jumbotron jumbotron-alert jumbotron-fluid">
						<div class="container-fluid text-center">

  <div class="form-group">
    <label for="sList">List of signators for this semester</label>
    <select multiple class="form-control" id="sList">
    </select>
  </div>

							 <p>Copy comma seperated names and emails of signatories down below. If a signator with the same email already exists, then their name will be revised.</p>
							 <br>

<form>
  <div class="form-group">
    <textarea class="form-control" id="signatorsList" rows="3" placeholder="Enter the list of signators here."></textarea>
    <br>
    <div class="alert-area"></div>
    <br>
    <a id="add-signators" class="btn btn-lg btn-primary btn-block text-white"> Add Signators </a>
  </div>
</form>

						</div>
					</div>
				</div>
			</div>
        </div>
        <div class="tab-pane fade" id="hours_tab">

			<div class="row" id="sin-dd-alert-n-hours">
				<div class="col-md-12 col-12">
					<a href="" class="act-login text-dark"><div class="jumbotron jumbotron-alert jumbotron-fluid">
						<div class="container-fluid text-center">
							<p class="lead pt-text h4">Hours Module not available.</p>
						</div>
					</div></a>
				</div>
			</div>
        </div>
    </div>

				</div>
			</div>
		</div>
	</div>
</section>

	<?php include '../pagelets/footer.php'; ?>

</body>

</html>








