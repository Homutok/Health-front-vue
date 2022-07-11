<template>
    <a-button type="primary" shape="round" :span="24" :offset="16" @click="hadleVisibleClick">
        <plus-outlined />
    </a-button>

    <a-modal v-model:visible="visibleModal" title="Новая запись в блоге">
        <a-form>
            <a-form-item label='Название'>
                <a-input  v-model:value="label" placeholder="Введите название"/>
            </a-form-item>
            <a-form-item label='Текст' >
                <a-textarea v-model:value="text" placeholder="Введите текст"/>
            </a-form-item>
            <a-form-item label='Добавление тэгов'>
                <!-- <a-tree-select>
                    <a-tree-select-node key="" value=""></a-tree-select-node>
                </a-tree-select> -->
            </a-form-item>
            <a-form-item label='Тэги'>
                <a-button type="primary">
                    <close-circle-filled />
                </a-button>
            </a-form-item>
        </a-form>
    </a-modal>

</template>
<script>
export default {
    name: "BlogNewPostButton",
    data() {
        return {
            visibleModal: false,
            label:'',
            text:'',
            tags:[]
        }
    },
    methods: {
        hadleVisibleClick() {
            this.visibleModal = !this.visibleModal
        }
    }
}
</script>

<style scoped>
</style>