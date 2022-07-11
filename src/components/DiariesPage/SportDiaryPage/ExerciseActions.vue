<template>
    <a-space>
        <a-button shape="round" type="primary" @click="changeVisible">
            <plus-circle-outlined />
        </a-button>
        <a-button shape="round" type="dashed">
            <edit-outlined />
        </a-button>
        <a-modal v-model:visible="visible" title="Новая запись в дневнике упражнений" @ok="changeVisible" >
            <a-input aria-placeholder="Введите упраженение" />
        </a-modal>
    </a-space>
</template>

<script>
export default {
    name: "ExerciseActions",
    props: {
        editable: Boolean
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        changeVisible() {
            // editable ? props.hideEdit() : props.showEdit()
            this.visible = !this.visible
        }
    }
}
</script>
