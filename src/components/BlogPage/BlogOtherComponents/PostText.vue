<template>
    <div v-html="viewText" align='left' />
</template>

<script>
export default {
    name: "PostText",
    computed: {
        viewText: function () {
            if (this.fullTextType)
                return this.postText;
            else
                return this.postText.substring(0, 200) + "...";
        }
    },
    props: {
        fullTextType: Boolean,
        postText: String
    },
    data() {
        return {
            textType: false
        }
    },

}
</script>
<style scoped>
</style>