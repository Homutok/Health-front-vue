<template>
    <a-layout-content style="margin: 0 16px">
        <router-view />
    </a-layout-content>
</template>
<script>
import { LayoutContent } from 'ant-design-vue'
export default {
    name: "Contentpage",
    components: {
        ALayoutContent: LayoutContent,
    }
}
</script>
