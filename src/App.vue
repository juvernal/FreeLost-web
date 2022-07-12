<template>
<Search/> 
<!-- <AnnonceView/> --> 
  <router-view/>
</template>

<script>  
import AnnonceView from '@/components/AnnonceView.vue'
import Search from './views/Search.vue' 

export default {
  components: {
   AnnonceView,Search,
  }
}
</script>

