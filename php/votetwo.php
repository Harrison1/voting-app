<?php 

	include './main.php';

	$main = new Main;

	if(isset($_POST['submit']) {
		// @$value = $_POST['prestwo'];

		$value = 'prestwo';
		
		$main->vote($value);
	}

	// $value = 'prestwo';

	// $main->vote($value);

// if (isset($_POST['action'])) {
//     echo '<br />The ' . $_POST['submit'] . ' submit button was pressed<br />';
// }

?>