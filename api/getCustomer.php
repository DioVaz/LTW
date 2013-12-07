<? 
	$db = new PDO('sqlite:base2.db');

 	$stmt = $db->prepare('SELECT * FROM Customer WHERE CustomerID = :value');
	$stmt->bindParam(':value',$_GET['number'], PDO::PARAM_INT);
	
 	$stmt->execute();
 	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


	if(is_array($result)){
		echo json_encode($result);
	}
	else{
		$erro = array('code' => '404', 'reason' => 'Customer not found');
		echo json_encode($erro);
	}
	
	
?>