<template>
    <a-card style="width:240px">
        <p><b>Шаги: </b> ??? шагов</p>
        <p><b>Вес:</b> ??? кг</p>
        <p><b>Пульс:</b> ???  ударов/мин</p>
        <p><b>Сон:</b> ??? часов</p>
        <a-button shape="round" type="primary" @click="showModal" style="width:99%"> + </a-button>

        <a-modal v-model:visible="visible" title="Новая запись" @ok="createHealthData">

            <a-space style="width: 90%">
                <a-input v-on:value="steps" type="number" placeholder="Шаги" suffix='шагов' />
                <a-input v-on:value="weight" type="number" placeholder="Вес" suffix='кг' />
            </a-space>

            <a-space style="width: 90%">
                <a-input v-on:value="pulse" type="number" placeholder="Пульс" suffix='уд/мин.' />
                <a-input v-on:value="dream" type="number" placeholder="Сон" suffix='час' />
            </a-space>

        </a-modal>

    </a-card>
</template>

<script>
export default {
    name: "HealthAddCard",
    data() {
        return {
            visible: false,
            steps: 0,
            weight: 0,
            pulse: 0,
            dream: 0,
        }
    },
    methods: {
        showModal() {
            this.visible = !this.visible
        },
        createHealthData() {
            this.visible = !this.visible
        }
    }

}
</script>
