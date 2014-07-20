Simple-jQuery-Ajax-Form
=======================
<h1>Exemplos</h1>
<h3>Parâmetro obrigatório</h3>
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

```php
<?php

$con = mysql_connect('127.0.0.1', 'usuario', 'senha');
$db = mysql_select_db('databasename', $con);

mysql_query("INSERT INTO tb_ajax(nome, email) VALUES('" . $_POST['nome'] . "', '" . $_POST['email'] . "')");

mysql_close($con);

sleep(3);

echo 'Salvou';
?>
```
<h3>Outros parâmetros</h3>
```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Formulário Ajax</title>
	<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="jquery-ajax-form.js"></script>
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
			$('#cadastro').simpleAjaxForm({
				context: '#textlightbox',
				before: function()
				{
					$('<div>',
					{
						css: {
							width: '100%',
							minHeight: '100%',
							position: 'fixed',
							top: 0,
							left: 0,
							backgroundColor: 'rgba(0,0,0,.8)'
						},
						id: 'window',
						appendTo: 'body'
					});

					$('<div>',
					{
						css: {
							width: '350px',
							minHeight: '150px',
							margin: 'auto',
							marginTop: '-150px',
							backgroundColor: '#FFF',
							borderRadius: '3px',
							boxShadow: '2px 2px 4px rgba(0,0,0,.6)'
						},
						id: 'lightbox',
						appendTo: '#window'
					});

					$('<div>',
					{
						css: {
							width: '350px',
							height: '150px',
							textAlign: 'center',
							display: 'table-cell',
							verticalAlign: 'middle',
							fontSize: '18pt',
							fontFamily: 'Arial'
						},
						id: 'textlightbox',
						appendTo: '#lightbox'
					});

					$('#window').hide();
					$('#textlightbox').html('Carregando...');

					var mt = ($(window).height() - 150) / 2;

					$('#window').fadeIn(300, function(){
						$('#lightbox').animate({
							marginTop: mt
						});
					});
				},
				after: function()
				{
					$('#window').delay(3000).fadeOut(300, function(){
						$(this).remove();
					});
				}
			});
		});
	</script>
</body>
</html>
```