	<script type="text/javascript">
		/***
		Loadif Javascript Utility
		Minimal Javascript Resource Loader that supports eval statements
		Github: https://github.com/parthraghav/Load-If
		Author: Parth Raghav (@parthraghav)
		***/
		!function(){class RL{constructor(){this.m={}}queue(t){var e=t.getAttribute("data-load-src")||t.getAttribute("data-load-href"),r=t.nodeName,s=["LINK","SCRIPT"],i=/(?:\.([^.]+))?$/.exec(e)[1],o=!1;if("string"!=typeof e||!["js","css"].includes(i)||!s.includes(r))throw new Error();function n(){o||(o=!0,Object.keys(this.m).includes(e)||(this.m[e]=Object()),this.m[e].loaded=!0,console.log(`Module successfully loaded\n(Source:${e})`))}t.onload=n.bind(this),t.onreadystatechange=function(){o||"complete"===t.readyState&&(o=!0,n())}.bind(this),t.onerror=function(){o||(o=!0,console.log(`Module could not be loaded\n(Source:${e})`))},r==s[1]?(t.setAttribute("type","text/javascript"),t.src=e):r==s[0]&&(t.setAttribute("type","text/css"),t.setAttribute("rel","stylesheet"),t.href=e)}}class DOM{static get(t,e){return(e||document).querySelector(t)}static get_all(t,e,r){return(r=0==r?function(t){return t}:null==r?function(t){return Array.prototype.slice.call(t)}:arguments[2]).apply(this,[(e||document).querySelectorAll(t)])}}class LI{constructor(){this.g={condition:"data-load-if",source:["data-load-src","data-load-href"],bp:"data-bind-persist"},this.listeners=[],this.loader=new RL;var t=this._get_loadees(),e=this;t.forEach(function(t){e._exec_load(t)})}_get_loadees(){var t=`script[${this.g.b}][${this.g.c[0]}]:not([${this.g.b}=""]):not([${this.g.c[0]}=""]),link[${this.g.b}][${this.g.c[1]}]:not([${this.g.b}=""]):not([${this.g.c[1]}=""])`;return DOM.get_all(t)}_exec_load(t){var e=t.getAttribute(this.g.b),r=t.getAttribute(this.g.c[0]||t.getAttribute(this.g.c[0])),s=this.listeners.includes(r);this._unsafe_eval(e)&&(null==t.getAttribute(this.g.bp)||s||(this._listen_mutation(t),this.listeners.push(r)),this.loader.queue(t))}_listen_mutation(t){var e=this;new MutationObserver(function(r,s){var i=e.g.c.concat(e.g.b);for(let s of r)"attributes"===s.type&&i.includes(s.attributeName)&&![null,String()].includes(s.oldValue)&&(e.listeners=e.listeners.filter(function(t,e,r){return t!=s.oldValue}),e.loader.queue(t))}).observe(t,{attributes:!0,attributeOldValue:!0})}_unsafe_eval(str){return eval(str)}_safe_eval(t){var e={who(){var t=window.location.pathname.split("/").pop();return t.indexOf(".")>-1?t.split(".").slice(0,-1).join("."):""==t?"index":t},ami:function(t){return t==this.who()}};return Function('"use strict";return ('+t+")").bind(e)()}}var l=new LI}();
	</script>
	<script type="text/javascript">
		var $URL = window.location.href;
		var $NAME = $URL.substr($URL.lastIndexOf("/")+1).split(".")[0];
		var is_module = ["funding-poll","senate-election"].includes($NAME);
		var is_page = !is_module;
	</script>
	<title> Reed College Student Body </title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Importing stylesheets -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="https://use.typekit.net/plm3ftw.css">
	<link rel="stylesheet" data-load-href="./src/styles.css" type="text/css" data-load-if="is_page" data-bind-persist>

	<!-- Importing scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
	<!-- Add Firebase products that you want to use -->
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>

	<!-- Other vendor components -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.min.css" integrity="sha256-ze/OEYGcFbPRmvCnrSeKbRTtjG4vGLHXgOqsyLFTRjg=" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js" integrity="sha256-+C0A5Ilqmu4QcSPxrlGpaZxJ04VjsRjKu+G82kl5UJk=" crossorigin="anonymous"></script>
	<!-- Core build with no theme, formatting, non-essential modules -->
	<link href="//cdn.quilljs.com/1.3.6/quill.core.css" rel="stylesheet">
	<script src="//cdn.quilljs.com/1.3.6/quill.core.js"></script>
	<!-- Main Quill library -->
	<script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
	<script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
	<!-- Theme included stylesheets -->
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
	<link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet">
	<!-- Datatables -->
	<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
	<script type="text/javascript" src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

	<script type="text/javascript" src="./src/app.min.js?p=refresh&t=3"></script>	


