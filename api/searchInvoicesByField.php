<?php 

$base = new PDO('sqlite:base2.db');

function DisplayInvoice($article){

	if(is_array($article))
		$x= array('InvoiceNo'=>$article['InvoiceNo'],'<br>'.'InvoiceDate'=>$article['InvoiceDate']);
			echo json_encode($x);
			echo '<br />','<br />';
}
	
if($_GET['field'] == 'InvoiceNo'){

	$stmt = $base->prepare('SELECT * FROM invoice WHERE InvoiceNo = :n');
	$stmt->bindParam(':n',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
	}
	
elseif($_GET['field'] == 'CustomerID'){
	$stmt = $base->prepare('SELECT * FROM invoice WHERE CustomerID = :n');
	$stmt->bindParam(':n',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
}
 	
	while ($article=$stmt->fetchAll(PDO::FETCH_ASSOC){
	DisplayInvoice($article);
}
	
 	
	
?>