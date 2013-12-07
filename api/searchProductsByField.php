<?php 

$base = new PDO('sqlite:base2.db');

function DisplayProduct($article){

	if(is_array($article))
		$x= array('ProductCode'=>$article['ProductCode'],'<br>'.'ProductDescription'=>$article['ProductDescription'],'<br>'.'UnitPrice'=>$article['UnitPrice'],'<br>'.'UnitOfMeasure'=>$article['UnitOfMeasure']);
			echo json_encode($x);
			echo '<br />','<br />';
}
	
if($_GET['field'] == 'ProductCode'){

	$stmt = $base->prepare('SELECT * FROM product WHERE ProductCode = :n');
	$stmt->bindParam(':n',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
	}

elseif($_GET['field'] == 'UnitPrice'){
	
	$stmt = $base->prepare('SELECT * FROM product WHERE UnitPrice = :n');
	$stmt->bindParam(':n',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
}
 	
	while ($article=$stmt->fetch()){
	DisplayProduct($article);
}
	
 	
	
?>