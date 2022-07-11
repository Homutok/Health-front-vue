<template>
    <a-card class="todo-card">

        <template v-if="todo.complete_stage" #title>
            <div class="todo-end">
                {{ todo.task_name }}
            </div>
        </template>

        <template v-else #title>
            <a-typography-text type="success">
                {{todo.task_name}}
            </a-typography-text>
        </template>

        <template #actions>
            <template v-if="!todo.complete_stage">
                <check-circle-outlined key="complete" />
                <close-circle-outlined key="delete" />
            </template>
            
            <template v-else>
                <close-circle-outlined key="delete" />
            </template>
        </template>

        <template v-if="todo.complete_stage">
            <div class="todo-end">
                {{ todo.task_summary }} - Завершено
            </div>
        </template>
        <template v-else>
            <a-typography-text>
                {{ todo.task_summary }}
            </a-typography-text>
        </template>

    </a-card>
</template>

<script>
export default {
    name: "ToDoCard",
    props: {
        todo: Object
    },
    data() {
        return {
            state: true
        }
    }
}
</script>

<style scoped>
.todo-card {
    width: 250px;
    box-sizing: border-box
}

.todo-end {
    text-decoration: line-through
}
</style>