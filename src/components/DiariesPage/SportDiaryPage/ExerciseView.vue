<template>

        <template v-for="item in exerciseList" :key="item.id">

            <template v-if="editable">
            
                <template v-if="!!item.exercise">
                    <a-alert v-if="item.exercise == 'Отдых'" :message="item.exercise" type="warning" :key="item.id" />
                    <a-alert v-else :message="item.exercise" type="info" :key="item.id" />
                </template>

                <template v-else>
                    <a-alert v-if="item.exercise_text == 'Отдых'" :message="item.exercise_text" type="warning"
                        :key="item.id" />
                    <a-alert v-else :message="item.exercise_text" type="success" :key="item.id" />
                </template>
            </template>

            <template v-else>
                <a-button danger>
                    <template v-if="!!item.exercise">
                        {{ item.exercise }}
                    </template>

                    <template v-else>
                        {{ item.exercise_text }}
                    </template>
                    <close-cirle-outlined />
                </a-button>
            </template>
        </template>

</template>

<script>
export default {
    name: "ExerciseView",
    props: {
        editable: Boolean,
        dataList: Array,
    },
    data() {
        return {
            exerciseList:[]
        }
    },
    methods: {


    },
    mounted() {
        this.exerciseList = this.dataList
    }
}
</script>

