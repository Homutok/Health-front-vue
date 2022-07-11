<template>
    <a-card class="add-card" hoverable>
        <template #actions>
            <template v-if="editable">
                <check-circle-outlined key="complete" v-on:click="addNewToDo" />
                <close-circle-outlined key="delete" v-on:click="editableHandler" />
            </template>
            <template v-else>
                <div></div>
            </template>
        </template>

        <template #title>
            <template v-if="editable">
                <a-input v-model:value="label" />
            </template>
            <template v-else>
                Добавить новую задачу
            </template>
        </template>


        <a-row>
            <a-textarea v-if="editable" v-model:value="text"></a-textarea>
            <a-button v-else shape="round" type="primary" v-on:click="editableHandler">
                <plus-circle-outlined />
            </a-button>

        </a-row>
    </a-card>
</template>

<script>
export default {
    name: "ToDoAddCard",
    data() {
        return {
            editable: false,
            label: '',
            text: '',
        }
    },
    methods: {
        editableHandler() {
            this.editable = !this.editable
        },
        addNewToDo() {
            this.$emit('addToDo', this.label, this.text)
            this.editable = !this.editable
            this.text = ''
            this.label = ''
        }
    }
}
</script>

<style scoped>
.add-card {
    width: 250px;
    box-sizing: border-box;
}
</style>