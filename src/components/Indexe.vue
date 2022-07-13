<template>
  <Header2/>
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
                <a href="/Perdu.vue"><i class="fa fa-stop"></i> J'ai perdu</a>
              </div>
              <div class="big-border-button1">
                 <router-link :to="{name: 'trouver'}">  <i class="fa fa-play">J'ai trouvé</i> </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!--  La patie concernant le silde des objets r�cement trouv�s-->
  

 <section class="featured-items" id="featured-items">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-features owl-carousel">
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-01.jpg">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Sac à main perdu !! <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Ville: Dschang </span> Lieu: Campus</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Smile In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-03.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Happy In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $8,400 + Canon EOS R1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/sr/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Run In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $5,500 + Canon EOS R3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/sr/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Stay In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $4,400 + Canon EOS R5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/sr/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $3,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Shoot In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $2,400 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="../assets/images/featured-03.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Fly In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R10</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import Header2 from '@/components/Header2.vue'
 

  export default {
    components: {
      Header2
    }
  }



    

</script>

<style lang="scss" scoped>

</style>



  
  
        
        
        
        
 

