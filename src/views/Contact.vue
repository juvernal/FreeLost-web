<template >
    <div class="contact">
      <header2/>
      <!-- content -->
      <div id="" class="" style="display:none;">

      <section class="popupBody">
        <!-- Social Login -->
        <div class="social_login">
            <div class="">
                <a href="#" class="social_box fb">
                    <span class="icon"><i class="fab fa-facebook"></i></span>
                    <span class="icon_title">Connectez vous avec Facebook</span>

                </a>

                <a href="#" class="social_box google">
                    <span class="icon"><i class="fab fa-google-plus"></i></span>
                    <span class="icon_title">Connectez vous avec Google</span>
                </a>
            </div>

            <div class="centeredText">
                <span>Or use your Email address</span>
            </div>

            <div class="action_btns">
                <div class="one_half"><a href="#" id="login_form" class="btn">Login</a></div>
                <div class="one_half last"><a href="#" id="register_form" class="btn">Sign up</a></div>
            </div>
        </div>

        <!-- Username & Password Login form -->
        <div class="user_login">
            <form action="" method="post">
                <label>Email / Username</label>
                <input name="username" type="text" id="username" />
              <br />

                <label>Password</label>
                <input name="password" type="password" id="password" />
              <br />

                <div class="checkbox">
                    <input id="remember" type="checkbox" />
                    <label for="remember">Remember me on this computer</label>
                </div>

                <div class="action_btns">
                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Retour</a></div>
                    <div class="one_half last"><button type="submit" class="btn btn_red">Connexion</button></div>
                </div>
            </form>

            <a href="#" class="forgot_password">Mot de passe oublie?</a>
        </div>
      </section>
      </div>

      <div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 header-text">
              <h2>Vous pouvez joindre l'un de nos contacts a tout moment!</h2>
              <p>Si vous souhaitez<a rel="nofollow" href="" target="_blank" style = "color:green">Contactez nous</a>, ou laissez un message. Merci.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="user-info">
        <div class="container">
          <div class="row">

      <section class="contact-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">

            </div>
            <div class="col-lg-4">
              <div class="info-item">
                <i class="fa fa-phone" style = "background-color:#086501"></i>
                <h4>Numeros de telephone</h4>
                  <span><a href="#">+237 677880045</a><br><a href="#">+237 677880045</a></span>
              </div>  
            </div>
            <div class="col-lg-4">
              <div class="info-item">
                <i class="fa fa-envelope" style = "background-color:#086501"></i>
                <h4>Adresses Mails</h4>
                <span><a href="#">info@freelost.com</a><br><a href="#">freelost@company.com</a></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="info-item">
                <i class="fa fa-map-marked" style = "background-color:#086501"></i>
                <h4>Nos bureaux</h4>
                <span><a href="#">155 Paidground, Dschang,<br>Yaounde II, Cameroon</a></span>
              </div>
            </div>
            <div class="col-lg-12">
            
            
              <form id="contact" action="users" method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="text" name="name" id="name" placeholder="Your Name..." autocomplete="on" required>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="text" name="telephone" id="telephone" placeholder="Your Telephone..." autocomplete="on" required>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="email" name="email" id="email" placeholder="Your E-mail..." required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="text" name="subject" id="subject" placeholder="Subject..." autocomplete="on" >
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="btn btn_red">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
              </div>
              </div>
              </div>
              </section>
              </div>
              </div>
              
              </div>
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
<style lang="css">
    .btn{
      background-color: #08650e;
      color: #ffff;
    }
</style>