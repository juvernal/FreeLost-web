<template>
    <div class="jumbotron">
        <h2>Liste des articles</h2>
        <div v-for="article in articles" :key="article.id" class="card w-20">
            <div class="card-header">{{article.title}}</div>
            <div class="card-body">{{article.content}}</div>
            <div class="card-footer">
                <router-link class="btn btn-primary btn-sm" :to="{name:'detailsArticle', params:{id: article.id}}">Details</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            articles: []
        }
    },
    methods: {
        fetchArticles() {
            this.articles = [
{
                    id: 1,
                    title: "Article 1",
                    content: "contenu de l'article 1"
                }, {
                    id: 2,
                    title: "Article 2",
                    content: "contenu de l'article 2"
                }, {
                    id: 3,
                    title: "Article 3",
                    content: "contenu de l'article 3"
                }, {
                    id: 4,
                    title: "Article 4",
                    content: "contenu de l'article 4"
                }, {
                    id: 5,
                    title: "Article 5",
                    content: "contenu de l'article 5"
                },
            
            ]
        }
    },
    beforeCreate() {
        this.$nextTick(()=>{
            this.fetchArticles()
        })
    },
}
</script>
<style lang="">
    
</style>