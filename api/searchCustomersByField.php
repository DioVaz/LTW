<?php 

$base = new PDO('sqlite:base2.db');

	
if($_GET['field'] == 'CustomerID'){

	$stmt = $base->prepare('SELECT * FROM customer WHERE CustomerID = :value1');
	$stmt->bindParam(':value1',$_GET['number2'], PDO::PARAM_INT);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	
elseif($_GET['field'] == 'CompanyName'){

	$stmt = $base->prepare('SELECT * FROM customer WHERE CompanyName = :value2');
	$stmt->bindParam(':value2',$_GET['company'], PDO::PARAM_STR);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}	
	

if(is_array($result)){
		echo json_encode($result);
	}
	else{
		$erro = array('code' => '404', 'reason' => 'Customer not found');
		echo json_encode($erro);
	}

	
?>