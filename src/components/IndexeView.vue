<template>
  <HeaderView/>
  <div class="index">
    <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
        <div class="search-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div class="row">
              <div class="col-lg-3">
                <fieldset>
                    <label for="contest" class="form-label">Adresse</label>
                    <input type="text" name="contest" class="searchText" placeholder="Saisissez l'adresse de la perte..." autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-3">
                <fieldset>
                    <label for="category" class="form-label">Transport</label>
                    <select name="category" class="form-select" aria-label="Choose a category" id="category" onchange="this.form.click()">
                        <option selected>Selectionnez un réseau...</option>
                        <option type="checkbox" name="Nature" value="Nature">Nature Photography (220 Contests)</option>
                        <option value="Portrait">Portrait Photography (172 Contests)</option>
                        <option value="Space">Space Photography (92 Contests)</option>
                    </select>
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                    <label for="category" class="form-label">Aéroport</label>`
                    <select name="category" class="form-select" aria-label="Choose a category" id="category" onchange="this.form.click()">
                        <option selected>Rechercher...</option>
                        <option type="checkbox" name="Nature" value="Nature">Nature Photography (220 Contests)</option>
                        <option value="Portrait">Portrait Photography (172 Contests)</option>
                        <option value="Space">Space Photography (92 Contests)</option>
                    </select>
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                    <label for="chooseprice" class="form-label">Mairie/police</label>
                    <select name="Price" class="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                        <option selected>Choose a price</option>
                        <option value="500">$500 to $1,000</option>
                        <option value="1500">$1,500 to $2,000</option>
                        <option value="2500">$2,500 to $3000</option>
                        <option value="3500+">$3,500+</option>
                    </select>
                </fieldset>
              </div>
              <div class="col-lg-2">                        
                <fieldset>
                    <button class="main-button">Rechercher</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
          <div class="header-text">
            <h2>Bienvenue sur  <em class="txt">FreeLost</em> / Welcome to <em class="txt">FreeLost</em></h2>
            <p>Vous avez perdu ou retrouver un Object?, vous pouvez rapidement faire la recherche de votre objet , ou bien declarez-le  et la communauté Freelost se mobilisera pour vous aidez a
le retrouver rapidement .</p>
            <div class="buttons">
              <div class="big-border-button">
                <router-link :to="{name: 'declaration'}" @click="checkConnect"> <i class="fa fa-stop"></i> J'ai perdu </router-link>
              </div>
              <div class="big-border-button1">
                <router-link :to="{name: 'declaration'}" @click="checkConnect"> <i class="fa fa-play"></i> J'ai trouvé </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!--  La patie concernant le silde des objets r�cement trouv�s-->
  

  </div>
  <FooterView/>
</template>

<script>
import HeaderView from './HeaderView.vue'
 import FooterView from '@/components/FooterView.vue'

  export default {
    components: {
    HeaderView, FooterView
  },
  data() {
    return {
    }
  },
  methods: {
    checkConnect(){
                if(!JSON.parse(localStorage.getItem('user')))
                    this.$router.push('/connexion')
            },
  }
  }



    

</script>

<style lang="scss" scoped>

</style>



  
  
        
        
        
        
 

