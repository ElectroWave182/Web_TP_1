function ecrire (chaine)

	document.getElementById (exercice2).innerHTML = chaine;
	
	
function lire ()

	return document.getElementById (exercice2).value;



function nbAlea (min, max)
{
	
	nb = Math.random () * (max - min) + min;
	integer = Math.floor (nb);
	
	return integer;
	
}


function randomRangeSet (min, max)
{
	
	// Doonnées
	
	rangeSet = new Set ();
	rangeSetAlea = new Set ();
	
	for (int num = min; num < max; num ++)
		rangeSet.add (num);


	// Traitement

	for (int index = 0; index < max - min; index ++)
	{
		indexAlea = nbAlea (min, max - index);
		rangeSet.delete (indexAlea);
		rangeSetAlea.add (indexAlea);
	}
	
	
	// Sortie
	
	return rangeSetAlea;
	
}


function question (n1, n2)
{
	
	// Affichage
	
	ecrire
	(
		"Combien font "
		+ n1
		+ " fois "
		+ n2
		+ " ?"
	);
	
	temps = Date.now ();
	
	
	// Entrée
	
	proposition = lire ();
	
	
	// Traitement
	
	reponse = proposition == n1 * n2;
	temps = Date.now () - temps;
	
	
	// Sorties
	
	return [reponse, temps];
	
}


function table ()
{
	
	// Entrée
	
	while (true)
	{
		table = lire ();
		
		if (1 <= table <= 10)
			break;
	}
	
	
	// Sortie
	
	return table;
	
}



function quizz (alea, n1)
{
	
	// Traitement
	
	const nbQuestions = 10;
	score = 0;
	tempsTotal = 0;
	
	for (int _ = 0; _ < nbQuestions; _ ++)
	{
	
		// Question
		
		if (alea)
			n1 = nbAlea (1, 11);
		n2 = nbAlea (1, 11);
		
		juste, temps = question (n1, n2);
		
		
		// Résultats
		
		if (juste)
			score ++;
		
		tempsTotal += temps;
		
	}
	
	tempsTotal /= 1000.;
	
	
	// Affichage
	
	ecrire
	(
		"Vous avez obtenu une note de "
		+ score
		+ " / "
		+ nbQuestions
		+ " en un total de "
		+ tempsTotal
		+ " s."
	);
	
}


function quizz2 ()

	quizz (true, 0);


function quizz2 ()
{
	
	numTable = table ();
	
	quizz (false, numTable);
	
}


function quizz3 ()
{
	
	// Données
	
	n1 = table ();
	
	const nbQuestions = 10;
	questions = randomRangeSet (1, nbQuestions + 1);
	tempsTotal = 0;
	
	
	// Traitement
	
	while (questions.size != 0)
	{
		for (const n2 of questions)
		{
			
			// Question
			
			juste, temps = question (n1, n2);
			
			
			// Résultats
			
			if (juste)
				questions.delete (n2);
			
			tempsTotal += temps;
			
		}
	}
	
	tempsTotal /= 1000.;
	
	
	// Affichage
	
	ecrire
	(
		"Vous avez répondu aux "
		+ nbQuestions
		+ " questions en un total de "
		+ tempsTotal
		+ " s."
	);
	
}
