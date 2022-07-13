<!-- 
<template>
    <Header2/>
        
          <div class="container col-12" style="margin-top:100px;">
            <div class="col-md-3">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>

                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-text">
                        Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                    </div>
                    <div class="card-text">
                        $67,400
                    </div>

                    <a href="#" class="card-button"> Purchase</a>
                </div>
            </div>
        </div> 
     


</template>


<script>

import Header2 from '@/components/Header2.vue'

    export default {
        name:'Search',

        components: {
      Header2
           },

        data() {
            return {
               
            }
        },

        methods:{
           
        }
    }
</script>

<style>

   
</style> -->







<template>
  <Header2/>
    <div class="container" style="margin-top:50px;">
    <!-- publicite riz meme-->
      <div class="banniere_horizontale" style="background-image: url('../assets/publicite/memecase.png');">           
      </div> 
    <!--  -->

         <!-- card des annonces -->
    
               <p>{{objects}}</p> 
        <div class="row">
          <button class="btn btn-primary" v-on:click="object()">get freelost objects </button>
          <div classs="col-8">
            <div class="col-md-4" ><!-- v-for="object in objects" :key="object"> 
              <div class="card mt-3 shadow-lg rounded" >

                  <!-- header de la publication -->
                  <div class="d-flex justify-content-between p-2 px-3">
                    <div class="d-flex flex-row align-items-center"> <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14417/production/_108376928_01ajaranchout.jpg" width="50" class="rounded-circle ">
                        <div class="d-flex flex-column ml-2 px-2"> <span class="font-weight-bold ">{{object.CentreDeCollecte}}</span> <small class="text-primary">{{object.Categorie}}</small> </div>
                    </div>
                    <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-3">20 mins</small> <!-- <i class="fa fa-ellipsis-h"></i> --> </div>
                </div>
                  <!--------------------------------------- -->

                <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
                <div class="card-body shadow-lg pl-2 rounded text-sm-start">
                      <h5 class="card-title ml-5"> {{object.nomObjet}}</h5>
                      <p class="card-text">Description: {{object.photo}}</p>
                      <p class="card-text"><small class="text-muted">{{object.categorie}}</small></p>
                </div>
                
                <a href="#" class="card-button btn-success"> plus de details ></a>
              </div>
            </div>
          </div>
          
             <!--BANNIERE PUBLICITAIRE GAUCHE -->
          <div class="col-4">
                <!--<img src="img/publicite/bannier2.gif" width="50%" height="100px" class="bannier- ">	-->
                 
                <div class="banniere-gauche">  
                  <!-- <div class="banniere_description haut"> FREELOST
                    <a href="#" class="bouton_rouge">Voir l'article <i class="fas fa-arrow-right fa-1x"></i>
                      </a>   
                    </div> -->                 
                  <img src="@/assets/publicite/amazon.png" alt="publicite" width="100%" height="400px" > 

                  <img src="@/assets/publicite/produits.png" alt="publicite" width="100%" height="400px">
                  <img src="@/assets/publicite/exemple.png" alt="publicite" width="100%" height="400px" >
                  <img src="@/assets/publicite/memecase2.png" alt="publicite" width="100%" height="300px">     
                </div>        

          </div>
            <!-- <div class="col-md-6">
              <div class="card mt-3">
                <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
                <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <button v-on:click="usdm" value="USDM"></button>
                <a href="#" class="card-button btn-success"> plus de details ></a>
              </div>
            </div> -->
        </div>
      

</template>

<script>
import axios from 'axios'
import Header2 from '@/components/Header2.vue'

    export default {
        name:'Search',
        components: {
      Header2
           },

        data() {
            return {
             
             objects:null
            }
        },

        methods:{
        },

        mounted(){
         axios.get('https://freelost-api.kouelab.com/Objects').then(response => (this.objects = response.data)) 
         /* axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.usd = response)) */
           
        }
    }
</script>

<style>

   
</style>