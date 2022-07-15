<!---->
<template>
    <div class="foter">
        <!--
         <footer class="footerMain">
        <div class="footrow">

            <div class="footcol">
                <h4>LIENS</h4>
                <div class="linksFooter">
                    <div class="col"><a href="">Accueil</a></div>
                    <div class="col"><a href="">F.A.Q</a></div>
                    <div class="col"><a href="">Livres</a></div>
                    <div class="col"><a href="">Professionnel</a></div>
                    <div class="col"><a href="">Blog</a></div>
                    <div class="col"><a href="">Partenariats</a></div>
                    <div class="col"><a href="">SNCF</a></div>
                    <div class="col"><a href="">Connexion</a></div>
                    <div class="col"><a href="">Presse</a></div>
                    <div class="col"><a href="">Politiques de confidentialités</a></div>
                    <div class="col"><a href="">Lieux partenaires</a></div>
                </div>

                <h4>POUR LES PROFESSIONNELS</h4>
                <div class="linksFooter">
                    <div class="col"><a href="">Solution de gestion d'objets trouvés</a></div>
                    <div class="col"><a href="">Solution de prise de rendez-vous</a></div>
                </div>
            </div>

            <div class="social">
                <div class="el">
                    <h5>SUIVEZ-NOUS</h5>
                    <div class="social-link">
                        <a href="#">
                            <img src="../assets/icons/brand-instagram.svg">
                        </a>
                        <a href="#">
                            <img src="../assets/icons/facebook.svg">
                        </a>
                        <a href="#">
                            <img src="../assets/icons/brand-linkedin.svg">
                        </a>
                    </div>
                </div>
                
                <div class="el">
                    <h5>UNE QUESTION ?</h5>
                    <a href="#"><b>@</b> Ecrivez-nous</a> 
                </div>

                <div class="el">
                    <h5>APPLICATIONS MOBILES</h5>
                    <img src="../assets/img/fr_app_store_dl.png" width="100px" alt=""> 
                    <img src="../assets/img/fr-google-play-badge.png" width="120px" alt="">
                </div>
                

            </div>
        </div>
    </footer>-->
    <div class="container my-5">
  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-dark"
          style="background-color: #ECEFF1"
          >
    <!-- Section: Social media -->
    <section
             class="d-flex justify-content-between p-4 text-white"
             style="background-color: #08650e"
             >
      <!-- Left -->
      <div class="me-5">
        <span>Connectez vous au reseau de FreeLost:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">FreeLost</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              Vous satisfaire est notre priorité
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
                <router-link class="text-dark" :to="{name: 'home'}">Acceuil</router-link>
            </p>
            <p>
                <router-link class="text-dark" :to="{name: 'declaration'}">declaration</router-link>

            </p>
            <p>
                <router-link class="text-dark" :to="{name: 'contact'}">Contact</router-link>
              <a href="/contact" class="text-dark"></a>
            </p>
            <p>
                <router-link class="text-dark" :to="{name: 'annonce'}">Objet</router-link>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Lien Util</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">Votre Profil</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Regles</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Conditions</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Aide</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> Dschang UDS</p>
            <p><i class="fas fa-envelope mr-3"></i> freelost@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +237 672 75 03 90</p>
            <p><i class="fas fa-print mr-3"></i> +237 675 00 31 56</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright:
      <a class="text-dark" href="/"
         >FreeLost.com</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>