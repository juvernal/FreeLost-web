<template>
    <div class="row1">
        <div class="header">
        
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row1">
                        <div class="col-12">
                                <nav class="main-nav">
                                    <!-- ***** Logo FreeLost ***** -->
                                    <a href="/" class="logo ml-0 pl-5">
                                        <img src="../assets/logo.png" alt="logo freeLost">
                                    </a>
                                    
                                    <!-- ***** D�but du  Menu  ***** -->
                                    <ul class="nav">
                                        <li><a href="/" class="active">Accueil</a></li>
                                        <li class="has-sub">
                                            <a href="javascript:void(0)" @click="checkConnect">Centre de collectes</a>
                                            <ul class="sub-menu">
                                                <li><a href="contests.html"></a></li>
                                                <li><a href="contest-details.html"></a></li>
                                            </ul>
                                        </li>
                                        
                                        <li>
                                            <router-link :to=" {name: 'annonce'}" @click="checkConnect">Objet Trouver</router-link>
                                        </li>
                                          
                                        <li>
                                            <router-link :to=" {name: 'contact'}" @click="checkConnect" >Contact</router-link>
                                        </li>
                                        <li v-if="admin == 'moderateur'">
                                            <router-link :to=" {name: 'admin'}" >Admin</router-link>
                                        </li>
                                    </ul>   
                                    
                                    <div class="border-button" id="connexion" v-if="!connect " >
                                        <router-link :to="{name: 'signin'}">Connexion</router-link>
                                    </div>   
                         <div class="nav-item dropdown" v-if="admin == 'moderateur'">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                         </div>
      </div>

                                    <div class="dropdown mt-3" v-if="connect" style="display: flex ;  flex-basis: 27%; padding-left: 15px;">
                                        
                                        <img :src="free+connect.avatar" class="rounded-circle z-depth-0" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                                            style="width: 50px; height: 50px;"  alt="avatar image">
                                            <label for="username" >{{ connect.username }}</label>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li class="dropdown-item"  @click="deconnect">Deconnexion</li>
                            
                                        </ul>
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
  
                           
        </div>
    </div>
</template>

<script>

    export default {
        methods: {
            checkConnect(){
                if(!JSON.parse(localStorage.getItem('user')))
                    this.$router.push('/connexion')
            },
            deconnect() {
                //this.change
                
                localStorage.removeItem('user') 
                localStorage.removeItem('admin')
                
                this.$router.push('/connexion')
            }
        },
        data() {
            return {
                connect: JSON.parse(localStorage.getItem('user')),
                free: "https://freelost-api.kouelab.com",
                admin: localStorage.getItem('admin')
            }
        }
        
    }
</script>

<style scoped>



    @import '../assets/plugins/fontawesome-free/css/all.min.css';
    @import '../assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
    @import '../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
    @import '../assets/plugins/jqvmap/jqvmap.min.css';
    @import '../assets/dist/css/adminlte.min.css';
    @import '../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
    @import '../assets/plugins/daterangepicker/daterangepicker.css';
    @import '../assets/plugins/summernote/summernote-bs4.css';


    @import '../assets/mainStyle/css/animate.css';
    @import '../assets/mainStyle/css/fontawesome.css';
    @import '../assets/mainStyle/css/templatemo-snapx-photography.css';
</style>

