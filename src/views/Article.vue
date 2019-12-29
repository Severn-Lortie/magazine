<template>
<div>
    <article-header 
    :title="article.title" 
    :section="article.section" 
    :heroSrc="article.heroSrc"
    />
    
    <article-body 
    :bodyText="article.bodyText" 
    />
</div>
</template>

<script>
import ArticleHeader from '../components/article/ArticleHeader'
import ArticleBody from '../components/article/ArticleBody'

import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        ArticleHeader,
        ArticleBody
    },
    computed: {
        article() {
            const title = this.$route.params.title;
            const article = this.$store.state.articles.filter(obj => this.encodeTitle(obj.title) === title);
            return article[0];
        }
    }
}
</script>
