<! DOCTYPE html>
<html>
<body>


<?php
	$currentDay = date ('d');
	$currentMonth = date ('m');
	$currentYear = date ('Y');
?>


<form method="post">


	<!-- Bloc d'entrée du nom -->

	<label for="nameEntry">
		Nom
	</label>
	
	<input id="nameEntry" type="text">
	
	<br>
	<br>


	<label for="dayEntry">
		Date
	</label>
	
	
	<!-- Bloc de sélection du jour -->
	
	<select id=dayEntry>
	
		<option>
			-- Jour --
		</option>
		
		<?php
			for ($numJour = 1; $numJour <= 31; $numJour ++)
			{
		?>
			<option value='
				<?php
					echo $numJour;
				?>
			'>
				<?php
					echo $numJour;
				?>
			</option>
		<?php
			}
		?>
		
	</select>
	
	
	<!-- Bloc de sélection du mois -->
	
	<select id=monthEntry>
	
		<option>
			-- Mois --
		</option>
		
		<?php
			$months = array
			(
				'Janvier',
				'Février',
				'Mars',
				'Avril',
				'Mai',
				'Juin',
				'Juillet',
				'Août',
				'Septembre',
				'Octobre',
				'Novembre',
				'Décembre',
			);
			
			for ($monthNb = 0; $monthNb < 12; $monthNb ++)
			{
		?>
				<option value='
					<?php
						echo $monthNb;
					?>
				'>
					<?php
						echo $months[$monthNb];
					?>
				</option>
		<?php
			}
		?>
		
	</select>
	
	
	<!-- Bloc de sélection de l'année -->
	
	<select id=yearEntry>
	
		<option>
			-- Année --
		</option>
		
		<?php
			for ($yearNb = $currentYear - 200; $yearNb <= $currentYear; $yearNb ++)
			{
		?>
			<option value='
				<?php
					echo $yearNb;
				?>
			'>
				<?php
					echo $yearNb;
				?>
			</option>
		<?php
			}
		?>
		
	</select>
	
	<br>
	<br>
	
	
	<input type="submit" value="ok">


</form>


<!-- Calcul et affichage de l'âge -->

<?php
	$name = htmlspecialchars ($_POST['nameEntry']);
	$day = htmlspecialchars ($_POST['dayEntry']);
	$month = htmlspecialchars ($_POST['monthEntry']);
	$year = htmlspecialchars ($_POST['yearEntry']);
	
	$age = $currentYear - $year;
	if ((int) ($month . $day) > (int) ($currentMonth . $currentDay))
	{
		$age --;
	}
	
	echo "Bonjour "
	. $name
	. ", vous avez "
	. $age
	. " ans."
	;
?>


</body>
</html>