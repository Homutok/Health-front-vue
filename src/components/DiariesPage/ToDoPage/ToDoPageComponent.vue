<template>
    <page-bread-crumb parent='Дневники' child='Цели и задачи'>
        <a-space direction="horizontal" :size="[8, 16]" wrap style="display: flex">
            <to-do-add-card @addToDo="addNewToDO" />
            <to-do-card v-for="todo in todoList" :key="todo.id" :todo="todo" />
        </a-space>
    </page-bread-crumb>
</template>

<script>
import PageBreadCrumb from '../../OtherComponents/PageBreadCrumb.vue'
import ToDoCard from './ToDoCard.vue'
import ToDoAddCard from './ToDoAddCard.vue'
export default {
    components: { PageBreadCrumb, ToDoCard, ToDoAddCard },
    name: "ToDoPage",
    data() {
        return {
            todoList: [
                {
                    id: 1,
                    task_name: 'Lear Vue',
                    complete_stage: true,
                    task_summary: 'Learn Vue'
                },
                {
                    id: 2,
                    task_name: 'Lear Vuex',
                    complete_stage: false,
                    task_summary: 'Learn Vuex'
                },
            ]
        }
    },
    methods: {
        addNewToDO(title, text) {
            this.todoList.push({
                id: 0,
                task_name: title,
                task_summary: text,
                complete_stage: false,
            })
        },
        completeToDo(todoId) {
            this.todoList.find(el => el.id === todoId)
        },
        deleteToDO() {

        }
    }
}
</script>

<style scoped>
</style>