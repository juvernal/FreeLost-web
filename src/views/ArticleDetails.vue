<template lang="">
    <div>
        details de l'article {{id}}
    </div>
</template>
<script>

export default {
    data () {
        return {
            id: 0      
        }
    },
    beforeCreate() {
        this.$nextTick(()=>{
            this.id = this.$route.params.id
        })
    }
}
</script>
<style lang="">
    
</style>