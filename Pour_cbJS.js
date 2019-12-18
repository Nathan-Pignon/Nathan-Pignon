
function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}



 if (window.onload = ok) {
 	function jeu() {

var saisie = prompt("Pour combien");
var nbr = Number(prompt(`Pour combien ${saisie} ?`));
var defi = nb_aleatoire(1, nbr);
 var resultat = Number(prompt(`Paris sur un nombre entre 1 et ${nbr} compris`));
if (resultat == defi) {
	alert("Perdu ! tu dois réaliser le défi");
} else {
alert(`T'as eu de la chance pour cette fois, le chiffre était ${defi}`);
}
}
jeu();
var recommencer = confirm("Voulez-vous rejouer ?");
while (recommencer == true) {

	jeu();
	recommencer = confirm("Voulez-vous rejouer ?");
}
 }