<template>
    <a-card title="Информация об аккаунте" class="card-user" align="center">
        <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
        </template>
        <a-avatar src="https://joeschmoe.io/api/v1/random" class="avatar-user" />
        <profile-info-field logo='Основная информация' 
            :info="[
                { name: 'Полное имя', data: 'Саша' },
                { name: 'Никнейм', data: 'admin' },
                ]" 
        />
    </a-card>
</template>

<script>
import ProfileInfoField from './ProfileInfoField.vue';
export default {
    name: "ProfileBaseInfo",
    components: {
        ProfileInfoField
    }
}
</script>

<style scoped>
.card-user {
    width: 80%;
    box-sizing: border-box;
}

.avatar-user {
    width: 30%;
    height: 30%;
}
</style>