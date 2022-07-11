<template>
    <a-card hoverable title="Информация  о достижениях" class="achievments-profile" bodyStyle="padding: 50px" >
        <p v-for="achievment in achievmentsData" :key="achievment.id">
            <TrophyOutlined /><b>{{ achievment.achievement_data }}</b>
        </p>
    </a-card>
</template>
<script>
export default {
    name: 'ProfileAchivmentsInfo',
    props: {
        achievmentsData: Array
    }
}
</script>
<style>
.achievments-profile {
    width: 40%;
    box-sizing: border-box;
}
</style>