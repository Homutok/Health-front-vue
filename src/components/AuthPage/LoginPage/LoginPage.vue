<template>
    <page-bread-crumb parent='Профиль' child='Авторизация'>
        <a-space direction='vertical' wrap style="width:100%; align-items: center">
            <a-card hoverable title="Авторизация" align="middle" style="width:100%">
                <a-input-group compact>
                    <a-input v-model:value="username" placeholder="Enter your username" />
                    <a-input-password v-model:value="password" placeholder="Input password" />
                    <a-button type="primary" style="width:100%" @click="login"> Войти</a-button>
                </a-input-group>
                <a-row>
                    Если у вас нет аккаунта, то вы можете
                    <router-link to="/register"> зарегистрироваться</router-link>
                </a-row>
            </a-card>
        </a-space>
    </page-bread-crumb>
</template>

<script>
import { notification } from 'ant-design-vue'
import { mapState } from 'vuex'
import router from '../../../router/router'
import PageBreadCrumb from '../../OtherComponents/PageBreadCrumb.vue'
export default {
    components: { PageBreadCrumb },
    name: "LoginPage",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed:
        mapState({
            isAuthData: state => state.auth.isAuthData.isAuth,
            errors: state => state.auth.isAuthData.errors,
        }),
    methods: {
        login() {
            this.$store.dispatch('auth/login', { username: this.username, password: this.password })
        }
    },
    watch: {
        errors() {
            if (!!this.errors)
                notification.open({
                    message: 'Ошибка',
                    description: this.errors,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
        },
        isAuthData() {
            if (this.isAuthData)
                router.push({ path: "/profile" })
        }
    }
}
</script>
