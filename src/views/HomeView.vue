<template>
  <div class="home">
    <IndexeView/>
  </div>
</template>

<script>
// @ is an alias to /src

import IndexeView from '@/components/IndexeView.vue'
export default {
  name: 'HomeView',
  components: {
    IndexeView
  }
}
</script>
