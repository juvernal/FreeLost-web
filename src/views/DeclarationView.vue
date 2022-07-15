<template>
  <HeaderView/>
<div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 header-text">
              <h2 style="color: green;">VOUS AVEZ TROUVE UN OBJET ?</h2>
               <p>Declarez le pour aide son proprietaire à le retrouver</p>
            </div>
          </div>
        </div>
</div>

<div class="banniere_horizontale" width="70px" height="50px" ></div> 


       <div class="contenair">
  <div class="row p-2  ">
    <!-- <h5 style="color: green;">- DECLARATION D'OBJET TROUVE -</h5> -->
    
      <div class="col-8 p-0 ">
        <!-- form declaration -->
            
        <div class="card contact-form p-5">
            <!-- <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div> -->
            <form method="post"  @submit.prevent="submit">
                <h5 style="color: green;">- DECLARATION D'OBJET -</h5>
               <div class="row p-5">

                <div class="">
                  <input type="radio" class="btn-check" name="status" value="trouve" v-model="status" id="success-outlined" autocomplete="off" >
                  <label class="btn btn-outline-success" for="success-outlined">TROUVE</label>

                  <input type="radio" class="btn-check ml-5" name="status" value="perdu" v-model="status" id="danger-outlined" autocomplete="off" checked>
                  <label class="btn btn-outline-danger" for="danger-outlined">PERDU</label>
                </div>

        <div class="m-3 col-6" >
           <div class="image-preview" v-if="photo.length > 0">
                <img class="preview" :src="photo">
            </div>
        </div>


                <div>
                  <label for="formFileLg" class="form-label ">AJOUTEZ UNE IMAGE</label>
                  <input class="form-control form-control-lg btn-success file-input" id="formFileLg" type="file" @change="onselectedfile">
                </div>

                    <div class="col-md-8 text-align-start">
                       <div class="mb-3 ">
                          <label for="nom" class="form-label">LIEU</label>
                          <input type="text" class="form-control" id="lieu" v-model="lieu" placeholder="saisissez l'adresse de la perte ou trouvaille">
                        </div>

                       <div class="mb-3">
                          <label for="date" class="form-label">QUAND ?</label>
                          <input type="date" class="form-control" id="date" v-model="date" placeholder="date">
                        </div>

                        <div class="mb-3">
                          <label for="categorie" class="form-label" >CATEGORIE</label>
                          
                          <select class="form-select" v-model="categorie" @change="ChangeCategorie" aria-label="Default select example">
                            <option selected>selectionnez une categorie</option>
                            <option value="carte">CARTE D'IDENTITE</option>
                            <option value="appareil">APPAREIL ELECTRONIQUE</option>
                            <!-- <option value="sac">SAC DE VOYAGE</option> -->
                          </select>
                        </div>
 
 <!--------------------------------carte--------------------------------------------->
<div class="mb-3" v-if="carte">
                         <div class="mb-3">
                          <label for="categorie" class="form-label" >NATIONALITE</label>
                          
                          <select class="form-select" v-model="nationalite"  aria-label="Default select example">
                            <option selected>selectionnez la nationalite</option>
                            <option value="camerounaise">CAMEROUNAISE</option>
                            <option value="ivoirienne">IVOIRIENNE</option>
                             <option value="gabonaise">GABONAISE</option>
                             <option value="algerienne">ALGERIENNE</option> 
                          </select>
                        </div>


                        <div class="mb-3">
                          <label for="nom" class="form-label">Nom sur la carte</label>
                          <input type="text" class="form-control" id="nom" v-model="nom" placeholder="indiquez le nom">
                        </div>

                        <div class="mb-3">
                          <label for="nom" class="form-label">Prenom sur la carte</label>
                          <input type="text" class="form-control" id="nom" v-model="prenom" placeholder="indiquez le prenom">
                        </div>

                        <div class="mb-3">
                          <label for="date" class="form-label">date de naissance</label>
                          <input type="date" class="form-control" id="date" v-model="datenaiss" placeholder="date de naissance">
                        </div>


                        <div class="mb-3">
                          <label for="description" class="form-label">Description de l'objet</label>
                          <textarea class="form-control" id="description" v-model="description" style="width: 100%; height: 150px;" rows="20" placeholder="Decrivez au mieux l'objet"></textarea>
                          
                          <div class="mt-3">
                              <input type="submit" name="Submit" class="btn btn-success" value="ENVOYER" />
                          </div>
                        </div>

</div>


<!------------------------------------appareil----------------------------------------->
<div class="mb-3" v-if="appareil">
                          <div class="mb-3">
                            <label for="date" class="form-label">MARQUE</label>
                            <input type="text" class="form-control" id="text" v-model="marque" placeholder="indiquez la marque">
                          </div>

                          <div class="mb-3">
                            <label for="date" class="form-label">MODELE</label>
                            <input type="text" class="form-control" id="text" v-model="marque" placeholder="indiquez le model">
                          </div>

                        <div class="mb-3">
                          <label for="nom" class="form-label">Votre Nom </label>
                          <input type="text" class="form-control" id="nom" v-model="nom" placeholder="indiquez votre nom">
                        </div>

                        <div class="mb-3">
                          <label for="nom" class="form-label">Votre Prenom </label>
                          <input type="text" class="form-control" id="prenom" v-model="prenom" placeholder="indiquez votre prenom">
                        </div>



                        <div class="mb-3">
                          <label for="description" class="form-label">Description de l'objet</label>
                          <textarea class="form-control" id="description" v-model="description" style="width: 100%; height: 150px;" rows="20" placeholder="Decrivez au mieux l'objet"></textarea>
                          
                          <div class="mt-3">
                              <input @click="objet" type="submit" name="Submit" class="btn btn-success" value="ENVOYER" />
                          </div>
                        </div>

</div>


                      </div>                  
                </div>
            </form>
        </div>



        <!--  -->

                 <div class="banniere_horizontale b2" width="70px" height="50px" ></div> 
    </div>


             <div class="col-2 p-0 m-0">
                <!--<img src="img/publicite/bannier2.gif" width="50%" height="100px" class="bannier- ">	-->
                 
                <div class="banniere-gauche ">  
                  <!-- <div class="banniere_description haut"> FREELOST
                       
                    </div> -->                 
                  <div class="banniere_horizontale p1 " width="100%" height="800px" ></div>

                  <div class="banniere_horizontale p2 " width="100%" height="800px"></div>
                  <div class="banniere_horizontale p3 " width="100%" height="800px" ></div>
                  
                </div>        

          </div>
    <!--  -->
    </div>

    <!-- ******** -->
</div>
  <FooterViewVue/>
</template>

<script>
import axios from 'axios'
import HeaderView from '@/components/HeaderView.vue';
import FooterViewVue from '@/components/FooterView.vue';

    export default {
        name:'DeclarationView',
        components: {
            HeaderView,FooterViewVue
           },

        data() {
            return {
             status:'',
             date:'',
             lieu:'',
             nom:'',
             description:'',
             categorie:'',
             photo:'',

             carte:false,
             appareil:false,
            }
        },

        methods:{
          ChangeCategorie(){
             if(this.categorie =='carte'){
              this.carte=true;
              this.appareil=false;
             }

             if(this.categorie =='appareil'){
              this.appareil=true;
              this.carte=false;
             }
          },
          



         onselectedfile(event){
          // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.photo = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }



            //this.photo = event.target.files[0]
         },

        async submit(){

          //const fd = new FormData();
          //fd.append('image',this.photo,this.photo.name);
            
            const data = {
                    photo: this.photo,
                    status: this.status,
                    DatePerteObjet: this.date,
                    Lieu: this.lieu,
                    nomObjet: this.nomObjet,
                    Description: this.description,
                    Categorie: this.categorie,
                    nomDoc: this.nomDoc,
                    Marque:this.marque,
                    Modele:this.modele,
                    UserNom:this.nom,
                    UserPrenom:this.prenom,
                    Nationalite:this.nationalite,
                    DateNaissance:this.datenaiss
                };


             /* console.log(data); */


               const response = await axios.post('https://freelost-api.kouelab.com/object/create',data)
                .then(
                    res=>{
                      this.$router.push('/annonce')
                      console.log(res)
                    }
                    
                ).catch(
                    err=>{console.log(err)
                    }
                );console.log(response);

          }
        },

    }
</script>

<style>
.banniere_horizontale{
		background: url('@/assets/publicite/memecase.png');
	}

    .b2{
		background: url('@/assets/publicite/bannier1.gif');
	}

    .p1{
		background: url('@/assets/publicite/amazon.png');
        
	}

    .p2{
		background: url('@/assets/publicite/produits.png');
	}

    .p3{
		background: url('@/assets/publicite/cisco.png');
	}

    
   
</style>