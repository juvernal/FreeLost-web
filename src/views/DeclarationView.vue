<template>


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
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post"  @submit.prevent="submit">
                <h5 style="color: green;">- DECLARATION D'OBJET -</h5>
               <div class="row p-5">

                <div class="">
                  <input type="radio" class="btn-check" name="status" value="trouve" v-model="status" id="success-outlined" autocomplete="off" >
                  <label class="btn btn-outline-success" for="success-outlined">TROUVE</label>

                  <input type="radio" class="btn-check ml-5" name="status" value="perdu" v-model="status" id="danger-outlined" autocomplete="off" checked>
                  <label class="btn btn-outline-danger" for="danger-outlined">PERDU</label>
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
                          <label for="categorie" class="form-label">CATEGORIE</label>
                          
                          <select class="form-select" v-model="categorie" aria-label="Default select example">
                            <option selected>selectionnez une categorie</option>
                            <option value="carte d'identite">CARTE D'IDENTITE</option>
                            <option value="sac">SAC DE VOYAGE</option>
                            <option value="appareil">APPAREIL ELECTRONIQUE</option>
                          </select>
                        </div>
 

                        <div class="mb-3">
                          <label for="nom" class="form-label">Nom sur l'objet</label>
                          <input type="text" class="form-control" id="nom" v-model="nom" placeholder="NOM ">
                        </div>

                        <div class="mb-3">
                          <label for="description" class="form-label">Description de l'objet</label>
                          <textarea class="form-control" id="description" v-model="description" style="width: 100%; height: 150px;" rows="20" placeholder="ajoutez une petite description de l'objet"></textarea>
                          
                          <div class="mt-3">
                              <input type="submit" name="Submit" class="btn btn-success" value="ENVOYER" />
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
</template>

<script>
import axios from 'axios'


    export default {
        name:'DeclarationPerte',
        components: {
      
           },

        data() {
            return {
             status:'',
             date:'',
             lieu:'',
             nom:'',
             description:'',
             categorie:'',
             photo:null,

             
            }
        },

        methods:{
         onselectedfile(event){
            this.photo = event.target.files[0]
         },

        async submit(){
            
            const data = {
                    status: this.status,
                    date: this.date,
                    lieu: this.lieu,
                    nom: this.nom,
                    description: this.description,
                    categorie: this.categorie,
                    photo: this.photo,
                };

             console.log(data);
               const response = await axios.post('https://freelost-api.kouelab.com/Objec',data)
                .then(
                    res=>{console.log(res)}
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