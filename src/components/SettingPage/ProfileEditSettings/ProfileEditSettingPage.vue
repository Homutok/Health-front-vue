<template>
    <page-bread-crumb parent='Настройки' child='Общие настройки'>
        <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }" layout="horizontal">

            <a-form-item label="Имя" :rules="[{ required: true, message: 'Пожалуйста введите !!' }]">
                <a-input v-model:value="firstName" />
            </a-form-item>

            <a-form-item label="Фамилия">
                <a-input v-model:value="secondName" />
            </a-form-item>

            <a-form-item label="Дата рождения">
                <a-date-picker v-model:value="dateBirth" />
            </a-form-item>

            <a-form-item label="Ваш пол">
                <a-select v-model:value="gender" style="width: 50%">
                    <a-select-option value="male">Мужской</a-select-option>
                    <a-select-option value="female">Женский</a-select-option>
                    <a-select-option value="other">Другие</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="Описание">
                <a-textarea v-model:value="summary"></a-textarea>
            </a-form-item>

            <a-form-item label="Страна">
                <a-tree-select v-model:value="country" show-search style="width: 100%"
                    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="Выберите страну" allow-clear
                    tree-default-expand-all :tree-data="countryList" />
            </a-form-item>


            <a-form-item label="Университет">
                <a-input v-model:value="university" />
            </a-form-item>

            <a-form-item label="Дата окончания учебы">
                <a-date-picker v-model:value="universityEnd" />
            </a-form-item>
            
            <a-form-item label="Сохранить">
                <a-button type="primary" @click="clickHandler">
                    Сохранить
                </a-button>
            </a-form-item>
        </a-form>

    </page-bread-crumb>
</template>

<script>

import countries from '../../../assets/countries.json'
export default {
    components: {
    },
    name: "ProfileEditSettingPage",
    data() {
        return {
            firstName: '',
            secondName: '',
            summary: '',
            university: '',
            universityEnd: '',
            gender: '',
            country: '',
            dateBirth: '',
            countryList: [],
        }
    },
    mounted() {
        this.countryList = countries
    },
    methods: {
        clickHandler() {
            console.log(this.summary)
            console.log(countries)
        }
    }

}
</script>

<style scoped>
</style>