Simple-jQuery-Ajax-Form
=======================
```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Formulário Ajax</title>
	<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="jquery-ajax-form.min.js"></script>
</head>
<body>
	<form action="cadastro.php" id="cadastro" method="post">
		<div id="resultado"></div>
		<div><input type="text" name="nome" id="nome"></div>
		<div><input type="email" name="email" id="email"></div>
		<div><input type="submit" value="Enviar"></div>
	</form>
	<script type="text/javascript">
		$(document).ready(function(){
			$('#cadastro').simpleAjaxForm(
			{
				context: '#resultado'
			});
		});
	</script>
</body>
</html>
```
<form action="cadastro.php" id="cadastro" method="post">
	<div id="resultado"></div>
	<div><input type="text" name="nome" id="nome"></div>
	<div><input type="email" name="email" id="email"></div>
	<div><input type="submit" value="Enviar"></div>
</form>
