<?php

$DATABASE_HOST = '127.0.0.1';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'mysql';
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
if (!isset($_POST['name'], $_POST['pass'], $_POST['email'])) {

	exit('Please complete the registration form!');
}
if (empty($_POST['name']) || empty($_POST['pass']) || empty($_POST['email'])) {

	exit('Please complete the registration form');
}
if ($stmt = $con->prepare('SELECT id, pass FROM signup WHERE name = ?')) {
	$stmt->bind_param('s', $_POST['name']);
	$stmt->execute();
	
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		exit('Username already exists!');
	}
} else {
	exit('Failed to prepare statement!');
}

$password = password_hash($_POST['pass'], PASSWORD_BCRYPT, array("cost" => 10));

if ($stmt = $con->prepare('INSERT INTO signup (name, pass, email) VALUES (?, ?, ?)')) {
	
	$stmt->bind_param('sss', $_POST['name'], $password, $_POST['email']);
	$stmt->execute();
	exit('New account has been created!');
} else {
	exit('Failed to prepare statement!');
}
$stmt->close();
$con->close();
?>