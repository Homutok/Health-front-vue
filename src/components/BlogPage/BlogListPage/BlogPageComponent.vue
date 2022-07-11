<template>
    <page-bread-crumb parent='Блог' child='Все записи'>
        <a-space direction="vertical" size="middle" style="display: flex" wrap>
            <a-row type="flex" justify="start" style="margin: 1%">
                <blog-new-post-button />
            </a-row>
            <a-row type="flex" justify="center" align="middle">
                <blog-post v-for="post in postList" :key="post.id" :data="post"/>
            </a-row>
        </a-space>

    </page-bread-crumb>
</template>

<script>
import posts from '../../../assets/testData3.json'
import BlogNewPostButton from './BlogNewPostButton.vue';
import BlogPost from './BlogPost.vue';

export default {
    components: {
        BlogNewPostButton,
        BlogPost
    },
    name: "BlogPage",
    data() {
        return {
            postList: []
        }
    },
    mounted() {
        this.postList = posts
    }

}
</script>

<style>
</style>