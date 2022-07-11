<template>
    <a-col :span="8" :offset="8">
        <router-link :to="'/blog' + id" style="color: black">
            <message-outlined />
        </router-link>
    </a-col>
</template>

<script>
export default {
    name: "MoreButton",
    props: {
        id: Number
    }
}
</script>
<style scoped>
</style>