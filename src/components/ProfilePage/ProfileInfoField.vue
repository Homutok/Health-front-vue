<template>
    <a-card class="info-block">
        <a-typography-title level={3}>{{ logo }}</a-typography-title>
        <br />
        <a-row v-for="element in info" :key="element.name">
            <a-col :span="12">
                <a-typography-text strong>{{ element.name }}</a-typography-text>
            </a-col>
            <a-col :span="12">{{ element.data }}</a-col>
        </a-row>
    </a-card>
</template>
<script>
export default {
    name: "ProfileInfoField",
    props: {
        info: Array,
        logo: String
    }
}
</script>
<style scoped>
.info-block {
    width: '80%';
    box-sizing: 'border-box';
}
</style>