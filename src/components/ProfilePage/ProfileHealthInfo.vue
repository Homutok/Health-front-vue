<template>
    <a-card hoverable title="Информация о здоровье за последний день" style="width: 40%" align="middle"  bodyStyle="padding: 50px">
        <p><b>Дата измерения:</b> {{healthData.date_of_check}}</p>
        <p><b>Шаги: </b>{{healthData.person_steps_per_day}}шагов</p>
        <p><b>Вес:</b> {{healthData.person_weight}} кг</p>
        <p><b>Пульс:</b> {{healthData.person_pulse}} ударов/мин</p>
        <p><b>Сон:</b> {{healthData.person_dream}}часов</p>
    </a-card>
</template>
<script>
export default {
    name: 'ProfileHealthInfo',
    props: {
        healthData: Object
    },
    mounted(){
        console.log(this.healthData)
    }
}
</script>
<style>
</style>