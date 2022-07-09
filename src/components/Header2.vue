<template>
    <div class="header">
        
<header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo FreeLost ***** -->
                    <a href="/FreeLost/accueil" class="logo">
                        <img src="../assets/logo.png" alt="logo freeLost">
                    </a>
                    
                    <!-- ***** D�but du  Menu  ***** -->
                    <ul class="nav">
                        <li><a href="/" class="active">Accueil</a></li>
                        <li class="has-sub">
                            <a href="javascript:void(0)">Centre de collectes</a>
                            <ul class="sub-menu">
                                <li><a href="contests.html"></a></li>
                                <li><a href="contest-details.html"></a></li>
                            </ul>
                        </li>
                        <li>
                            
                            <a href="categories.html">Annonces</a>
                        </li>
                        <li>
                            <router-link :to=" {name: 'contact'}" >Contact</router-link>
                        </li>
                    </ul>   
                    
                    <div class="border-button">
                        <router-link :to="{name: 'signin'}">Connexion</router-link>
                    </div>
                   
                    <a class='menu-trigger'>
                        <span>S'inscrire</span>
                    </a>
                    <!-- ***** Fin du menu ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!--<b-modal id="modal" >
    <div id="modal" class="popupContainer" style="display:none;">
        <div class="popupHeader">
        <span class="header_title">Login</span>
        <span class="modal_close"><i class="fa fa-times"></i></span>
    </div>

    <section class="popupBody">
         Social Login 
        <div class="social_login">
            <div class="">
                <a href="#" class="social_box fb">
                    <span class="icon"><i class="fab fa-facebook"></i></span>
                    <span class="icon_title">Connect with Facebook</span>

                </a>

                <a href="#" class="social_box google">
                    <span class="icon"><i class="fab fa-google-plus"></i></span>
                    <span class="icon_title">Connect with Google</span>
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

         Username & Password Login form 
        <div class="user_login">
            <form action="dashboard" method="post">
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
                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                    <div class="one_half last"><button type="submit" class="btn btn_red">Login</button></div>
                </div>
            </form>

            <a href="#" class="forgot_password">Forgot password?</a>
        </div>

         Register Form 
        <div class="user_register">
            <form action="enregistrer" method="post">
                <label>Username</label>
                <input name="username" type="text" id="username" />
                <br />

                <label>Email Address</label>
                <input name="email" type="email" id="email" />
                <br />
                
                <label>Telephone</label>
                <input name="telephone" type="text" id="telephone" />
                <br />
                
                <label>Addresse</label>
                <input name="addresse" type="text" id="addresse" />
                <br />

                <label>Password</label>
                <input name="password" type="password" id="password" />
                <br />

                <div class="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label for="send_updates">Send me occasional email updates</label>
                </div>

                <div class="action_btns">
                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                    <div class="one_half last"><button type="submit" class="btn btn_red">Register</button></div>
                </div>
            </form>
        </div>
        
    </section>
  </div>
-->
 </div>
</template>

<script>
    
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>

