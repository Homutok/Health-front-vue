<template>
    <page-bread-crumb parent='Дневники' child='Здоровье'>
        <a-space wrap :size="0">
            <health-add-card />
            <health-per-day v-for="health in healths" :key="health.id" :data="health" />
        </a-space>
        <health-chart v-for="healthArray in healthDataArrays" :key="healthArray.title" :data="healthArray" />

    </page-bread-crumb>
</template>

<script>

import HealthAddCard from './HealthAddCard.vue'
import HealthPerDay from './HealthPerDay.vue'
import healthList from '../../../assets/testData.json'
import HealthChart from './HealthChart.vue'

export default {
    name: "HealthPage",
    components: {
        HealthAddCard,
        HealthPerDay,
        HealthChart
    },
    data() {
        return {
            healths: [],
            healthDataArrays: {
                weight: { title: "Вес", data: [] },
                dream: { title: "Сон", data: [] },
                steps: { title: "Шаги", data: [] },
            }
        }
    },
    created() {
        this.healths = healthList
        this.healthDataArrays.weight.data = healthList.map((stats => ({
            date: stats.date_of_check,
            value: stats.person_weight
        })))
        this.healthDataArrays.dream.data = healthList.map((stats => ({
            date: stats.date_of_check,
            value: stats.person_dream
        })))
        this.healthDataArrays.steps.data = healthList.map((stats => ({
            date: stats.date_of_check,
            value: stats.person_steps_per_day
        })))
    }
}
</script>