<template>
    <a-card hoverable type="inner" justify="center" align="middle" class="post" :title="data.post_name">
        <template v-if="!!data.post_image" #cover >
            <img alt="example" :src="data.post_image" style="width=70%" />
        </template>
        {{!!data.post_image}}

        <router-link :to="'/blog/' + data.id" style="color: black">
            <post-text :fullTextType="false" :postText="data.post_summary" />
        </router-link>
        <hr/>
        <a-row>
            <like-button />
            <more-button />
        </a-row>
    </a-card>
</template>

<script>
import LikeButton from '../BlogOtherComponents/LikeButton.vue'
import MoreButton from '../BlogOtherComponents/MoreButton.vue'
import PostText from '../BlogOtherComponents/PostText.vue'

export default {
    components: { PostText, MoreButton, LikeButton },
    name: "BlogPost",
    props: {
        data: Object
    },
    methods: {

    },

}
</script>

<style scoped>
.post {
    width: 70%;
    margin: 3%;
}
</style>