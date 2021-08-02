<template>
  <a-layout style="min-height: 100vh">
		<!-- 菜单区域 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
			<!-- 菜单 -->
      <a-menu theme="dark" 
			v-model:selectedKeys="selectedKeys" 
			mode="inline"
			@click="memuClick"
			>
        <a-menu-item key="home">
          <pie-chart-outlined />
          <span>工作台</span>
        </a-menu-item>
        <a-menu-item key="login">
          <desktop-outlined />
          <span>预留</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>基础数据</span>
            </span>
          </template>
          <a-menu-item key="3">帐套管理</a-menu-item>
          <a-menu-item key="4">产品管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>用户管理</span>
            </span>
          </template>
          <a-menu-item key="6">用户中心</a-menu-item>
          <a-menu-item key="8">岗位定义</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
		<!-- 内容区域 -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    };
  },
	setup(){
		let route = useRoute();
		let router = useRouter();
		const memuClick = (keyPath: any) => {
			router.push({
				path: '/' + keyPath.key
			})
		};
		return {
			memuClick,
		}
	},
	
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>