<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" type="text/css" href="https://bootswatch.com/cosmo/bootstrap.min.css">
    <title></title>
</head>
<body>
    <div class="container" style="margin-top: 200px;">
        <div class="row">
            <button class="btn btn-danger btn-block totifica" tipo="error">Error</button>
            <button class="btn btn-warning btn-block totifica" tipo="general">General</button>
            <button class="btn btn-info btn-block totifica" tipo="info">Info</button>
            <button class="btn btn-success btn-block totifica" tipo="ok">Ok</button>
        </div>
    </div>
    <script src="src/js/jquery-3.2.1.min.js" ></script>
    <script src="src/js/notifica.js" ></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>

    <script>
        jQuery(document).ready(function($) {
            $('.totifica').click(function(event) {
               $.notifica({tipo: $(this).attr('tipo')});
            });

        });
    </script>
</body>
</html>

