<template>
    <a-card >
        <p><b>Дата измерения:</b> {{ data.date_of_check }} </p>
        <p><b>Шаги: </b> {{ data.person_steps_per_day }} шагов</p>
        <p><b>Вес:</b> {{ data.person_weight }} кг</p>
        <p><b>Пульс:</b> {{ data.person_pulse }} ударов/мин</p>
        <p><b>Сон:</b> {{ data.person_dream }} часов</p>
    </a-card>
    
</template>

<script>
export default {
    name: "HealthPerDay",
    props: {
        data: Object
    },
    mounted(){

    }

}
</script>