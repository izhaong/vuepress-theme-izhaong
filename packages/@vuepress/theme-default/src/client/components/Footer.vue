<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-14 15:03:56
 * @LastEditTime: 2022-04-15 18:49:52
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/client/components/Footer.vue
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useThemeLocaleData } from '../composables'
const themeLocale = useThemeLocaleData()
const footerHtml = computed(() => themeLocale.value.footerHtml)
</script>

<template>
  <footer class="footer">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span v-html="footerHtml" />
    <br />
    Powered by
    <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/izhaong/vuepress-theme-hasaki" target="_blank"
      >Hasaki</a
    >
  </footer>
</template>
