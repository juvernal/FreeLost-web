import { createApp } from 'vue'
import JQuery from 'jquery'
window.jQuery = window.$ = require('jquery');
import App from './App.vue'
import router from './router'
import { freelost } from './constante/const';
// import './assets/css/fontawesome.css'
// import './assets/css/templatemo-snapx-photography.css'
//import './assets/css/owl.css'
// import './assets/css/animate.css'
// import './assets/logo.png'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'

/* import form js */


//import './assets/login/js/main.js'
// import './assets/login/vendor/jquery/jquery-3.2.1.min.js'
// import './assets/login/vendor/animsition/js/animsition.min.js'
// import './assets/login/vendor/select2/select2.min.js'
// import './assets/login/vendor/daterangepicker/moment.min.js'
//import './assets/login/vendor/daterangepicker/daterangepicker.js'
// import './assets/login/vendor/countdowntime/countdowntime.js'
// import './assets/login/vendor/bootstrap/js/popper'
// import './assets/login/vendor/bootstrap/js/bootstrap.min.js'


/* formulaire CSS*/
/* import './assets/login/css/util.css'
import './assets/login/css/main.css'
import './assets/login/vendor/daterangepicker/daterangepicker.css'
import './assets/login/vendor/select2/select2.min.css'
import './assets/login/vendor/animsition/css/animsition.min.css'
//import './assets/vendor/css-hamburgers/hamburgers.min.css'
import './assets/login/vendor/animate/animate.css'
//import './assets/login/"fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
//import './assets/login/images/icons/favicon.ico' */







//import 'bootstrap/js/src/popup.js'
import 'bootstrap/js/src/tab.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
//import './assets/js/owl-carousel.js'

//import './assets/js/isotope.min.js'
//import './assets/js/custom.js'

/*import javascript*/

/*
import './assets/js/popup.js'
<script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/tabs.js"></script>
    <script src="assets/js/popup.js"></script> 
    <script src="assets/js/custom.js"></script>

*/






createApp(App).use(router).mount('#app')
