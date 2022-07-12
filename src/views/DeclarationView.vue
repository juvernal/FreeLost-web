<template>

<div class="container">

<div class="page-header">
    <h1>Ajouter Annonce!</h1>
</div>

<!-- ajouter Form - START -->
 <div class="container" id="container1">
        <div class="row centered-form">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title text-center">Remplir les champs suivants</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                Cat&eacute;gorie:
                                    <select name="catégorie" >
                                    <option> *choisissez une cat&eacute;gorie* </option>
                                    <option style="background:#7FC6BC" disabled> --Immobilier-- </option>
                                    <option> Maison </option>
                                    <option> Appartement </option>
                                    <option> Immobilier de vacances</option>
                                    <option> Bureau&Locaux </option>
                                    <option> Terrain </option>
                                    <option style="background:#7FC6BC" disabled> --V&eacute;hicules-- </option>
                                    <option> Voitures </option>
                                    <option> V&eacute;hicules professionnels </option>
                                    <option> Bateaux </option>
                                    <option> Motos </option>
                                    <option> Autres v&eacute;hicules </option>
                                    <option> pi&agrave;ces auto/moto </option>
                                    <option style="background:#7FC6BC" disabled> --Maison-- </option>
                                    <option> Electrom&eacute;nager </option>
                                    <option> Interieur </option>
                                    <option> Jardin </option>
                                    <option style="background:#7FC6BC" disabled> --Multimedia-- </option>
                                    <option> T&eacute;l&eacute;phone </option>
                                    <option> Acessoires informatiques </option>
                                    <option> Jeux vid&eacute;o et consoles </option>
                                    <option style="background:#7FC6BC" disabled> --Emploi,Services-- </option>
                                    <option> Offre d'emploi </option>
                                    <option> Demande d'emploi </option>
                                    <option> Service </option>
                                    <option> Cours </option>
                                    <option style="background:#7FC6BC" disabled> --Loisires-- </option>
                                    <option> Hobbies </option>
                                    <option> Sports </option>
                                    <option> Animaux dom&eacute;stiques </option>
                                    <option> Films,Magazines,Livres </option>
                                    <option> Art&d&eacute;co </option>
                                    <option> Voyages </option>
                                    <option> Musique et Instruments</option>
                                    <option style="background:#7FC6BC" disabled> --V&eacute;tements et Objets-- </option>
                                    <option> V&eacute;tements </option>
                                    <option> Chaussures </option>
                                    <option> Montres et Lunettes </option>
                                    <option> Bijoux </option>
                                    <option> Sac et Accessoires </option>
                                    <option style="background:#7FC6BC" > --Autres-- </option>
                                    </select> 
                            </div>

                            <div class="form-group">
                                Type Annonce:
                                <input id="rad1" name="radGroupe" type="radio" value="demande" /> 
                                <label for="rad1">demande de vente</label> 

                                <input id="rad2" name="radGroupe" type="radio" value="offre de vente" /> 
                                <label for="rad2">offre de vente</label> 

                            </div>

                            <div class="form-group">
                                Titre: 
                                <input type="text" name="Titre" id="Titre">
                            </div>
                            <div class="form-group">
                                Description de L'annonce : 
                                    <TEXTAREA rows="3" name="descriptoin"></TEXTAREA>
                            </div>
                            <div class="form-group">
                            surface:
                            <input type="text" name="logement" id="logement">
                             </div>

                            <div class="form-group">
                            nombre de pièce:
                            <input type="text" name="nbpiece" id="nbpiece">
                             </div>

                             <div class="form-group">
                            kilomètrage:
                            <input type="text" name="kilometrage" id="kilometrage">
                             </div>
                             <div class="form-group">
                            Marque:
                            <input type="text" name="marque" id="marque">
                             </div>
                             <div class="form-group">
                            Année:
                            <input type="text" name="année" id="année">
                             </div>
                             <div class="form-group">
                            Cylindré:
                            <input type="text" name="cylindré" id="cylindré">
                             </div>
                             <div class="form-group">
                            Energie:
                            <select name="energie">
                            <option>  </option>
                            <option> essence </option>
                            <option> diesel</option>
                            </select>

                             </div>
                             <div class="form-group">
                            Boite Vitesse:
                            <select  name="boiteVitesse" >
                            <option>  </option>
                            <option> automatique </option>
                            <option> mannuelle</option>
                            </select>

                             </div>
                             <div class="form-group">
                            Immatruculation:
                             <input type="text" name="immatr" id="immatr">

                             </div>
                             <div class="form-group">
                            couleur:
                            <input type="text" name="Couleur" id="Couleur">
                             </div>
                            <div class="form-group">

                                Prix: 
                                 <input type="text" name="prix" id="Prix" >
                            </div>

                            <div class="form-group">
                                R&eacute;gion:
  <select name="Region" >
  <option> *choisissez votre gouv&eacute;rnorat * </option>
  <option> Ariana </option>
  <option> B&eacute;ja </option>
  <option> Ben Arous </option>
  <option> Bizerte </option>
  <option> Gab&eacute;s </option>
  <option>  Gafsa</option>
  <option> Jendouba</option>
  <option> Kairouan</option>
  <option> Kasserine</option>
  <option> K&eacute;bili</option>
  <option> Le Kef</option>
  <option> Mahdia </option>
  <option> La Mannouba</option>
  <option> Medenine </option>
  <option> Monastir </option>
  <option> Nabeul</option>
  <option> Sfax </option>
  <option> Sidi Bouzid</option>
  <option> Siliana </option>
  <option> Sousse</option>
  <option> Tataouine</option>
  <option> Tozeur</option>
  <option> Tunis</option>
  <option> Zaghouan </option>
 </select> 
                            </div>

                            <input type="submit" value="Enregister" class="btn btn-info btn-block">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

<!-- Registration Form - END -->

</div>

</template>


<script>
/* script */


   /*  $('select name="catégorie"').change(function(){
        var value = $(this).val();

        switch(value) {
            case "Terrain":
                $('input[name="surface"],input[name="Prix"],input[name="Titre"],input[name="description"],input[name="radGroup"]').show(); // ou fadeIn(), ou show(). A toi de voir
                $('input[name="nbpiece"],input[name="kilometrage"],imput[name="marque"],input[name="année"],input[name="cylindré"], input[name="couleur"],input[name="immatr"], select[name="energie"], select[name="boiteVitesse"]').hide(); // ou fadeOut(), ou hide(). A toi de voir
                break;

        case "Maison": case "Appartement": case "Immobilier de vacances": case "Bureaux&Locaux":
            $('input[name="surface"], input[name="nbpiece"],input[name="Prix"],input[name="Titre"],input[name="description"],input[name="radGroup"]').show(); // ou fadeIn(), ou show(). A toi de voir
            $('input[name="kilometrage"],imput[name="marque"],input[name="année"],input[name="cylindré"], input[name="couleur"],input[name="immatr"], select[name="energie"], select[name="boiteVitesse"]').hide(); // ou fadeOut(), ou hide(). A toi de voir
            break;
        case "voiture": case "Autres vehicules": case "Véhicules professionnels": 
            $('input[name="surface"], input[name="nbpiece"]').hide(); // ou fadeIn(), ou show(). A toi de voir
            $('input[name="Prix"],input[name="Titre"],input[name="description"],input[name="radGroup"], input[name="kilometrage"],imput[name="marque"],input[name="année"],input[name="cylindré"], input[name="couleur"],input[name="immatr"], select[name="energie"], select[name="boiteVitesse"]').show(); // ou fadeOut(), ou hide(). A toi de voir
        case "Moto":
            $('input[name="surface"], input[name="nbpiece"] ,input[name="couleur"],input[name="immatr"], select[name="energie"], select[name="boiteVitesse"]').hide();
            $('input[name="kilometrage"],imput[name="marque"],input[name="année"],input[name="cylindré"],input[name="Prix"],input[name="Titre"],input[name="description"],input[name="radGroup"]').show(); // ou fadeOut(), ou hide(). A toi de voir
       default: 
           $('input[name="Prix"],input[name="Titre"],input[name="description"],input[name="radGroup"]').show();
       $('input[name="surface"], input[name="nbpiece"] ,input[name="couleur"],input[name="immatr"], select[name="energie"], select[name="boiteVitesse"] input[name="kilometrage"],imput[name="marque"],input[name="année"],input[name="cylindré"]').hide(); // ou fadeOut(), ou hide(). A toi de voir

        }});
     */

/* fin */


    export default {
        name:'DeclarationView',

        data() {
            return {
              
            }
        },

        methods:{
           
        }
    }
</script>

<style>
#container1 {
    background-color: #e2dada;
}

.centered-form {
    margin-top: 120px;
    margin-bottom: 120px;
}

.centered-form .panel {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
}
</style>
