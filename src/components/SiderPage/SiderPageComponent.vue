<template>
    <a-layout-sider collapsible v-model:collapsed="collapsed" class="menu">
        <a-menu mode="inline" :theme="theme" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys"
            @click="menuClickHandler">
            <!-- [] Сделать вывод через List -->

            <a-menu-item key="profile">
                Профиль
                <template #icon>
                    <user-outlined />
                </template>
            </a-menu-item>

            <a-menu-item key="favourite">
                Избранное
                <template #icon>
                    <pushpin-outlined />
                </template>
            </a-menu-item>

            <a-sub-menu key="diaries" title="Дневники">
                <template #icon>
                    <smile-outlined />
                </template>
                <a-menu-item key="todo">
                    Цели и задачи
                    <template #icon>
                        <check-circle-outlined />
                    </template>
                </a-menu-item>

                <a-menu-item key="health">
                    Дневник здоровья
                    <template #icon>
                        <heart-outlined />
                    </template>
                </a-menu-item>

                <a-menu-item key="training">
                    Дневник тренировок
                    <template #icon>
                        <insert-row-above-outlined />
                    </template>
                </a-menu-item>

                <a-menu-item key="food">
                    Дневник питания
                    <template #icon>
                        <hdd-outlined />
                    </template>
                </a-menu-item>

            </a-sub-menu>

            <a-menu-item key="blog">
                Новости
                <template #icon>
                    <compass-outlined />
                </template>
            </a-menu-item>

            <a-menu-item key="setting">
                Настройки
                <template #icon>
                    <setting-outlined />
                </template>
            </a-menu-item>

            <a-menu-item key="exit">
                Выход
                <template #icon>
                    <poweroff-outlined />
                </template>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { LayoutSider, Menu, MenuItem, SubMenu } from 'ant-design-vue'

import router from '../../router/router';
export default {
    name: "SiderPage",
    components: {
        ALayoutSider: LayoutSider,
        AMenu: Menu,
        ASubMenu: SubMenu,
        AMenuItem: MenuItem
    },
    data() {
        return {
            theme: 'dark',
            selectedKeys: ['1'],
            openKeys: ['sub1'],
        }
    },
    methods: {
        menuClickHandler(value) {
            value.keyPath.length == 1
                ? router.push({ path: '/' + value.key })
                : router.push({ path: '/' + value.keyPath[0] + '-' + value.keyPath[1] })

        }
    }
};
</script>


<style scoped>
.menu {
    overflow: auto;
    height: 100vh;
    position: sticky;
    left: 0;
    top: 0;
    bottom: 0;
}
</style>