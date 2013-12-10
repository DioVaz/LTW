<?php 

$base = new PDO('sqlite:base2.db');

	
if($_GET['field'] == 'ProductCode'){

	$stmt = $base->prepare('SELECT * FROM product WHERE ProductCode = :value1');
	$stmt->bindParam(':value1',$_GET['number'], PDO::PARAM_INT);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

elseif($_GET['field'] == 'UnitPrice'){
	
	$stmt = $base->prepare('SELECT * FROM product WHERE UnitPrice = :value2');
	$stmt->bindParam(':value2',$_GET['number'], PDO::PARAM_INT);
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