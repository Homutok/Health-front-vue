<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>{{ parent }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ child }}</a-breadcrumb-item>
        </a-breadcrumb>
        <auth-verify-form />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import AuthVerifyForm from '../AuthPage/AuthVerifyForm.vue'

export default {
    name: "PageBreadCrumb",
    components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: BreadcrumbItem,
    AuthVerifyForm
},
    data() {
        return {

        }
    },
    props: {
        parent: String,
        child: String
    }
}
</script>

<style scoped>
</style>