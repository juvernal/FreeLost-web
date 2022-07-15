import { createApp } from 'vue'
//import JQuery from 'jquery'
window.jQuery = window.$ = require('jquery');
import App from './App.vue'
import router from './router'


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
