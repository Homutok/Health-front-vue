<template>
    <page-bread-crumb parent='Дневники' child='Дневник тренировок'>
        <a-table :dataSource="dataTable" :columns="columnsTable" />
    </page-bread-crumb>
</template>

<script>
import sports from '../../../assets/testData2.json'
import constants from '../../../assets/SportDiaryConstants.json'
import ExerciseActions from './ExerciseActions.vue'
import ExerciseView from './ExerciseView.vue'
export default {
    components: { ExerciseActions, ExerciseView },
    name: "SportDiaryPage",
    data() {
        return {
            exercies: [],
            dataTable: [],
            editable: true,
            columnsTable: []
        }
    },
    mounted() {
        this.exercies = sports
        this.columnsTable = constants.columns
        this.dataTable = constants.days.map((day) => ({
            key: day.key,
            Days: day.name,
            Exercise: <exercise-view dataList={sports.filter((elem)=>elem.day == day.key)} editable={this.editable} />,
            Actions: <exercise-actions id={day.key} dataList={sports.filter((elem)=>elem.day == day.key)} editable={this.editable} />
        }))
    }
}
</script>