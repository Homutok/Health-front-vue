<template>
    <a-list itemLayout="horizontal" header="Comments" type="flex" justify="start" align="left" style="margin: 1%">
        <a-list-item v-for="comment in comments" :key="comment.id">
            <a-list-item-meta :title="comment.comment_author">
                <template #avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
            </a-list-item-meta>
            {{ comment.comment_text }}
        </a-list-item>
    </a-list>
</template>
<script>
export default {
    name: "CommentsList",
    props: {
        comments: Array
    },
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
</style>