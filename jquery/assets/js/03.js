/*-----------------------------------
    CHAINAGE DE METHODE AVEC JQUERY
-------------------------------------*/

// $(function(){
//     console.log($('div'));
//     // Je souhaite cacher toutes les div de mon HTML
//     $('div').hide ('slow', function(){
//     // une fois la méthode hide() terminée l'alert s'execute
//     // NB : l'alert ce fait autant de fois que le nombre d'élément concernés 
//     // par le selecteur
//     alert('Fin du Hide');
//     // pour aller modifier le CSS
//     // $('div').css('background','yellow');
//     // $('div').css('color','red');
//     // $('div').show('slow');

//     // possibilité de faire un enchainement de fonction ordonnées
//     $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
//     $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

//     });
// });

/* -----------------------------------
  LE CHAINAGE DE METHODE AVEC JQUERY
------------------------------------ */

$(function() {

    console.log($('div'));

    // -- Je souhaite cacher toutes les div de ma page HTML
    $('div').hide('slow', function() {

        /**
         * Une fois que la méthode hide() est terminé, mon alerte peut
         * s'executer !
         * NOTA BENE : La fonction s'executera pour l'ensemble
         * des éléments du sélecteur.
         */
        // alert('Fin du Hide');

        $('div').css('background','yellow');
        $('div').css('color','red');
        $('div').show('slow');

        $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
        $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

    });

});


    /* Pour slow avoir le fichier jquery.slim (pas slim.min, car besoin animation)*/

