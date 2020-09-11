# Future Milestones
Content will be added here by the new webmasters

-enclosures

top.php file

does nothing but retrieve .js files
- go through 10 .php files, and see files they are requiring, see dependent files

ex/ senate-election/
<script type="text/javascript" src="./src/election-voting-vendor.js"></script>	
that js file is election-voting-vendor.js,

then go to top.php 

conditional formatting

<?php

if(window-location is "senate-election")
echo("senate-election.php")
<?php 	 		if(window location is a "senate-election") { 			echo('<script type="text/javascript" src="./src/election-voting-vendor.js"></script>'); 			echo('<script type="text/javascript" src="./src/election-voting.js"></script>)'); 		} 	 	?>

make pagelet for app.js


>

-vision (restructure):
build codebase, make changes to codebase
build script, concatenates file content
takes all files
converts to app.bundle.js
makes app.min.js



ideally: top.php and paglets should be compacted in main-js.php


bootstrap for making websites with minimal css, 

styling:
