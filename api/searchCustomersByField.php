<?php 

$base = new PDO('sqlite:base2.db');

function DisplayCostumer($article){

	if(is_array($article))
		$x= array('CustomerID'=>$article['CustomerID'],'<br>'.'CustomerTaxID'=>$article['CustomerTaxID'],'<br>'.'CompanyName'=>$article['CompanyName'],'<br>'.'BillingAddressID'=>$article['BillingAddressID'],'<br>'.'Email'=>$article['Email']);
			echo json_encode($x);
			echo '<br />','<br />';
}
	
if($_GET['field'] == 'CustomerID'){

	$stmt = $base->prepare('SELECT * FROM customer WHERE CustomerID = :n');
	$stmt->bindParam(':n',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
	}
	
elseif($_GET['field'] == 'CompanyName'){

	$stmt = $base->prepare('SELECT * FROM customer WHERE CompanyName = :n');
	$stmt->bindParam(':n',$_GET['asd'], PDO::PARAM_STR);
	$stmt->execute();
	}	
	
 	while ($article=$stmt->fetch()){
	DisplayCostumer($article);
}	
	
?>