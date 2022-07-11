<template>
    <a-col :span="8">
        <a-button type="text" @click="actionLike">
            <heart-two-tone two-tone-color="#eb2f96" />
        </a-button>
    </a-col>
</template>

<script>
export default {
    name: "LikeButton",
    props: {

    },
    computed: {
        likeOrDisLike() {
            return getLikeObject().length > 0
        },
        colorLike() {
            return this.likeOrDisLike() ? "#F91709" : "#8E8E8E";
        },
        getLikeObject () {
            // userLiked.filter(like => like.user === profileID)
        }
    },
    methods: {
        actionLike(indexPost) {
            // likeOrDisLike() ? getLikeObject()[0].id : like(indexPost);
        }
    }

}
</script>
<style scoped>
</style>