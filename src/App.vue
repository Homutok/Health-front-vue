<template>
  <div class="App">
    <a-layout>
      <sider-page-component />

      <a-layout>
        <!-- <a-layout-header style="background: #fff; padding: 0"  /> -->
        <content-page-component />

        <a-layout-footer class='site-author' style="text-align: center">
          ©2022 Kuzmin Alexander
        </a-layout-footer>
      </a-layout>

    </a-layout>
  </div>
</template>

<script>
import { Layout, LayoutFooter } from 'ant-design-vue';
import SiderPageComponent from './components/SiderPage/SiderPageComponent.vue';
import ContentPageComponent from './components/ContentPage/ContentPageComponent.vue';
export default {
  name: "App",
  components: {
    ALayout: Layout,
    ALayoutFooter: LayoutFooter,
    SiderPageComponent,
    ContentPageComponent,
  },
};
</script>





<style  src="ant-design-vue/dist/antd.css"/>
