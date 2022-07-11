<template>
    <a-collapse>
        <a-collapse-panel  :header="'Показать график изменения ваших показателей по ' + data.title" :key="data.title">
            <apexcharts width=70% type="line" :options="options" :series="series"></apexcharts>
        </a-collapse-panel>
    </a-collapse>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "HealthChart",
    props: {
        data: Object
    },
    data() {
        return {
            options: {
                chart: {
                    id: 'basic-bar'
                },
                xaxis: {
                    categories: []
                }
            },
            series: [{
                name: 'date',
                data: []
            }],
        }
    },
    components: {
        Apexcharts: VueApexCharts,
    },
    mounted() {
        this.options.xaxis.categories = this.data.data.map((element)=> element.date)
        this.series[0].data = this.data.data.map((element)=> element.value)
    },

}
</script>

<style scoped>
</style>