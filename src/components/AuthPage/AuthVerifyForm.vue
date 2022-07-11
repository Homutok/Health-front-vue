<script>
import { mapActions, mapState } from 'vuex'
import router from '../../router/router';
export default {
    name: "AuthVerifyForm",
    computed: mapState({
        isAuthData: state => state.auth.isAuthData,

    }),
    mounted() {
        const refresh = localStorage.getItem("refresh");
        const access = localStorage.getItem("access");
        (refresh === null && access === null)
            ? this.$store.dispatch('auth/logout')
            : this.$store.dispatch('auth/verify')
    },
    methods: {
        ...mapActions([
            'verify',
            'logout',
            'login',
            'loginConfirm'
        ]),
    },
    watch: {
        isAuthData() {
            if (!!this.isAuthData.isAuth && !!this.isAuthData.loadAuth) {
                this.$store.dispatch('auth/loginConfirm')
                router.push({ path: "/login" })
            }
        }
    }
}
</script>