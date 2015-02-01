<?php
header('Content-Type: text/xml');
echo '<?xml  version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	# $food is what we are passed by AJAX
	$food = $_GET['food'];
	# this is our array of food items we have in stock
	$foodArray = array('tuna', 'bacon', 'beef', 'loaf', 'ham',' spaghetti');
	# checking to see if the requested food item matches the contents of our array
	if (in_array($food, $foodArray)) {
		echo 'We do have ' . $food . '!';
	} elseif($food == "") {
		echo 'Enter a food you putz';
	} else {
		echo "Sorry punk we don't sell no " . $food . "!";
	}

echo '</response>';

?>
