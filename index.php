<?php
//index.php
$a = 10;
$b = 20;

/*
if($a>$b){
	echo "a es mayor que b";
}else{
	echo "b es mayor que a";
}
*/
?>

<table border="1">
	<?php
		for($i=1;$i<=$a;$i++){
			echo "<tr>";
			for($j=1;$j<=$b;$j++){
			echo "<td> $j</td>";
			}
			echo "</tr>";
		}
	?>
</table>