<?
	session_start();
	$db=new PDO('sqlite:base2.db');
	
	$email = $_GET['email'];
	$pass = $_GET['pass'];
	
	
	
	$sv = $db->prepare('SELECT email, pass, permission FROM user WHERE email = :email AND pass = :pass');
	$sv->bindParam(':email',$email,PDO::PARAM_STR, 20);
	$sv->bindParam(':pass',$pass,PDO::PARAM_INT);
	$sv->execute();
	$user_info = $sv->fetch(PDO::FETCH_ASSOC);

	if($user_info != null){
		echo "LogIn efectuado";
		$_SESSION['email']=$email;
		$_SESSION['permission']=$user_info[2];
	}
	else
		echo "Deu merda";

	echo $_SESSION['email'];
	echo $_SESSION['permission'];
?>