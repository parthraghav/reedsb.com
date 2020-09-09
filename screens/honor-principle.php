<!-- File : honor-principle	.html -->

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

	<script type="text/javascript" src="./src/app.js"></script>	

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>

</head>

<body class="sin-app sin-app-mod">

	<?php include '../pagelets/header.php'; ?>

<section id="honor-principle">
	<div class="container">

		<div class="row">
			<div class="col-12 col-md-12" style="padding-left: 2em;">
				<div id="sin-hp-alert" class="row d-none">
					<div class="alert alert-warning" role="alert">
					  You must be logged in to edit this page! <a href class="act-login">Login here</a>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">

						<h1><span>Honor Principle</span><button type="button" class="btn btn-link">[Edit title]</button></h1>
						<p class="h3 text-muted">
							<span>A very short description of the document</span>
							<button type="button" class="btn btn-link">[Edit description]</button>
</p>
<br>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<nav id="navbar-example2" class="navbar navbar-light bg-primary rounded-top">
						<div class="nav-brand sin-wk-nav-brand">
							<i class="fa fa-star text-warning d-inline"></i>
							<ul class="nav nav-pills d-inline-block">
							  <li class="nav-item dropdown">
							    <a class="nav-link text-light dropdown-toggle sin-wk-version-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">/bf106f603f5a1ca065cb3 </a>
							    <div class="dropdown-menu">
							      <a class="dropdown-item" href="#">Action</a>
							      <a class="dropdown-item" href="#">Another action</a>
							      <a class="dropdown-item" href="#">Something else here</a>
							      <div class="dropdown-divider"></div>
							      <a class="dropdown-item" href="#">Separated link</a>
							    </div>
							  </li>
							</ul>
						</div>
						<div>
							<button type="button" class="btn btn-primary text-light"><i class="far fa-edit d-inline"></i> Edit</button>
							<button type="button" class="btn btn-primary text-light"><i class="fa fa-code-fork d-inline"></i> Changes</button>
							<button type="button" class="btn btn-primary text-light"><i class="far fa-comment d-inline"></i> Discussion</button>
							<div class="btn-group">
								<button type="button" class="btn btn-dark">Exit Edit Mode</button>
							</div>		
						</div>
						</nav>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<nav class="navbar navbar-light bg-light">
						  <ul class="nav nav-pills">
						    <li class="nav-item">
						      <a class="nav-link" href="#fat">@fat</a>
						    </li>
						    <li class="nav-item">
						      <a class="nav-link" href="#mdo">@mdo</a>
						    </li>
						    <li class="nav-item dropdown">
						      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
						      <div class="dropdown-menu">
						        <a class="dropdown-item" href="#one">one</a>
						        <a class="dropdown-item" href="#two">two</a>
						        <div role="separator" class="dropdown-divider"></div>
						        <a class="dropdown-item" href="#three">three</a>
						      </div>
						    </li>
						  </ul>
						</nav>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 p-4">
						<div class="mt-2"></div>
						<div class="h6" contenteditable="">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</div>
						<div class="h6">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</div>

						<div class="sin-wk-references small p-4 mt-4">
						<span><sup>1</sup> <a href="">What's The Difference Between Bit Rate And Baud Rate?"</a>. Electronic Design. 2012-04-27. Retrieved 2018-01-18.</span>
						<span><sup>2</sup> D. A. Bell (1962). Information Theory and its Engineering Applications (3rd ed.). New York: Pitman. <a href="">OCLC 1626214</a>. </span>
						</div>

					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<nav class="navbar navbar-light bg-light rounded-bottom">
							<div>
								<div class="editors-thumbnails d-inline-block">
									<img src="https://randomuser.me/api/portraits/women/75.jpg" class="rounded-circle">
									<img src="https://randomuser.me/api/portraits/women/2.jpg" class="rounded-circle">
									<img src="https://randomuser.me/api/portraits/women/56.jpg" class="rounded-circle">
									<img src="https://randomuser.me/api/portraits/women/63.jpg" class="rounded-circle">
								</div>
								<small class="text-dark ml-1"><a href="">490 contributors</a></small>
							</div>
							<small class="text-dark">Last updated on December 3, 2019</small>
						</nav>
					</div>
				</div>
				<div class="row">
					<div class="col-md-5 p-3 small">
						<span class="ml-3">Share this article</span>
						<div class="btn-group">
							<button class="btn btn-link"><i class="fab fa-twitter"></i></button>
							<button class="btn btn-link"><i class="fab fa-reddit-alien"></i></button>
							<button class="btn btn-link"><i class="fab fa-facebook-f"></i></button>
							<button class="btn btn-link"><i class="fas fa-paper-plane"></i></button>
						</div>
					</div>
					<div class="col-md-7 p-3 small">
						<div class="text-right">
							<button class="btn btn-link text-">[Markdown Tutorial]</button>
							<button class="btn btn-link">[Style Guide]</button>
							<button class="btn btn-link">[Requests]</button>
							<button class="btn btn-link">[Extensions]</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div id="disqus_thread"></div>
			<script>
			    /**
			     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT 
			     *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR 
			     *  PLATFORM OR CMS.
			     *  
			     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: 
			     *  https://disqus.com/admin/universalcode/#configuration-variables
			     */
			    /*
			    var disqus_config = function () {
			        // Replace PAGE_URL with your page's canonical URL variable
			        this.page.url = PAGE_URL;  
			        
			        // Replace PAGE_IDENTIFIER with your page's unique identifier variable
			        this.page.identifier = PAGE_IDENTIFIER; 
			    };
			    */
			    
			    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
			        var d = document, s = d.createElement('script');
			        
			        // IMPORTANT: Replace EXAMPLE with your forum shortname!
			        s.src = 'https://EXAMPLE.disqus.com/embed.js';
			        
			        s.setAttribute('data-timestamp', +new Date());
			        (d.head || d.body).appendChild(s);
			    })();
			</script>
			<noscript>
			    Please enable JavaScript to view the 
			    <a href="https://disqus.com/?ref_noscript" rel="nofollow">
			        comments powered by Disqus.
			    </a>
			</noscript>
		</div>
	</div>
</section>

	<?php include '../pagelets/footer.php'; ?>

</body>

</html>








