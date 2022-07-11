<template>
    <page-bread-crumb parent="Страница профиля " child="Моя">
        <a-space direction="vertical" size="middle" class="profile-space" style="display: 'flex'">
            <a-row justify="center" align="center">
                <profile-base-info />
            </a-row>
            <a-row justify="center">
                <!-- <profile-health-info :healthData="datahealth[-1]" /> -->
                <profile-achivments-info :achievmentsData="[
                    { achievement_data: 'Молодец' },
                    { achievement_data: 'Молодец x2' },
                ]" />
            </a-row>
        </a-space>
    </page-bread-crumb>
</template>

<script>
import ProfileBaseInfo from './ProfileBaseInfo.vue'
import ProfileHealthInfo from './ProfileHealthInfo.vue'
import ProfileAchivmentsInfo from './ProfileAchivmentsInfo.vue'
import { mapState } from 'vuex'

export default {
    name: "ProfilePage",
    components: {
        ProfileBaseInfo,
        ProfileHealthInfo,
        ProfileAchivmentsInfo
    },
    data() {
        return {
            profiledata: {},
            healthList: []
        }
    },
    computed: mapState({
        dataProfile: state => state.profile.dataProfile,
        datahealth: state => state.profile.dataHealth,
    }),
    mounted() {
        this.$store.dispatch('profile/getProfileData')
         console.log(this.datahealth)
        this.$store.dispatch('profile/getHealthList')
    },
    watch: {
        datahealth() {
            console.log(this.datahealth)
        }
    }

}
</script>

<style scoped>
.profile-space {
    display: flex
}
</style>