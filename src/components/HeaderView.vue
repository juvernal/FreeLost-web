<template>
    <div class="row">
        <div class="header">
        
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                                <nav class="main-nav">
                                    <!-- ***** Logo FreeLost ***** -->
                                    <a href="/FreeLost/accueil" class="logo ml-1 pl-1">
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
                

                                    <div class="dropdown mt-3" v-if="connect">
                                        
                                        <img :src="free+connect.avatar" class="rounded-circle z-depth-0" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                                            style="width: 50px; height: 50px;"  alt="avatar image">
                                            <label for="username">{{ connect.username }}</label>
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

<style lang="scss" scoped>

</style>

