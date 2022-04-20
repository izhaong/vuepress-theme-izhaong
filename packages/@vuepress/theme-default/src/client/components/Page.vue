<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-14 15:03:56
 * @LastEditTime: 2022-04-15 21:10:45
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/client/components/Page.vue
-->
<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import Footer from './Footer.vue'
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
    <Footer />
  </main>
</template>
