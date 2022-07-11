<template>
    <a-modal v-model:visible="visible" title="Вы дейстивтельно хотите выйти ?" @ok="hadleClickExit"
        @cancel="hadleClickCancel">
        Мы будем скучать :(
    </a-modal>
</template>

<script>
import { mapActions } from 'vuex'
import router from '../../../router/router'

export default {
    name: "LogoutComponent",
    data() {
        return {
            visible: true
        }
    },
    methods: {
        ...mapActions([
            'logout'
        ]),
        hadleClickExit() {
            this.$store.dispatch('auth/logout')
            router.push({ path: "/login" })
        },
        hadleClickCancel() {
            router.push({ path: "/profile" })
        }
    }

}
</script>

<style scoped>
</style>