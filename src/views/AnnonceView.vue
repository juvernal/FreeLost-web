<template>
  <HeaderViewVue/>

<div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 header-text">
              <h1 style="color: green;"> LES OBJETS TROUVEES DU MOMENT SUR FREELOST</h1>
              <!-- <p>Si vous souhaitez<a rel="nofollow" href="" target="_blank" style = "color:green">Contactez nous</a>, ou laissez un message. Merci.</p> -->
            </div>
          </div>
        </div>
</div>

<div class="banniere_horizontale" width="70px" height="50px" ></div> 


       <div class="contenair">
  <div class="row p-5  ">
    <h5 style="color: green;">- OBJETS -</h5>
   <!-- <p>{{objects}}</p>-->
      <div class="col-8 p-0 ">
        <!-- CARD -->
        
         <div class="col-4 d-inline-flex" v-for="object in objects" :key="object._ID"><!-- v-for v-if="object.Categorie == 'Papiers et documents officiels'"-->
            
            <div class="card mt-3" >
                
                <!-- header de la publication -->
                                <div class="d-flex justify-content-between p-2 px-3">
                                  <div class="d-flex flex-row align-items-center"> <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14417/production/_108376928_01ajaranchout.jpg" width="50" height="50" class="rounded-circle ">
                                      <div class="d-flex flex-column ml-2 px-2"> <span class="font-weight-bold ">CentreDeCollecte</span> <small class="text-primary">{{ object.Categorie }}</small> </div>
                                  </div>
                                  <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-3">20 mins</small> </div>
                                </div>
               <!-------------------https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940---------------------->

                <img :src="freelost+object.Photo" class="card-img-top" style="height:200px; width:100%;" alt="...">
                        <div class="card-body">
                            <h5 class="card-text mb-1">NOM : {{ object.UserNom }}</h5>
                            <p class="card-text">Prenom : {{ object.UserPrenom }}</p>
                            <p class="card-text">{{ object.Description }}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        
                        <a href="#" class="card-button btn-success"> plus de details ></a>
                    </div>
        </div>
<!-- fin card -->

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
import HeaderViewVue from '@/components/HeaderView.vue'
import FooterViewVue from '@/components/FooterView.vue'

    export default {
        name:'AnnonceView',
        components: {
          HeaderViewVue,FooterViewVue
           },

        data() {
            return {
             freelost : 'https://freelost-api.kouelab.com',
             objects:null
            }
        },

        methods:{
        },

        mounted(){
         axios.get('https://freelost-api.kouelab.com/object/all').then(response => (this.objects = response.data.objects)) 
         /* axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.usd = response)) */
          
        }
       
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