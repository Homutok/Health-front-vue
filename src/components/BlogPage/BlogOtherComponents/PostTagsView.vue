<template>
    <a-row>
        <a-button v-for="tag in tags" shape="round" type="primary" :key="tag.id">
            {{ tag.tag_name }}
        </a-button>
    </a-row>
</template>

<script>
export default {
    name: "PostTagsView",
    props: {
        tags: Array
    }
}
</script>
<style scoped>
</style>