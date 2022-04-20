<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-15 21:11:52
 * @LastEditTime: 2022-04-20 15:52:47
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/client/layouts/Default.vue
-->
<script setup lang="ts">
import Footer from '@theme/Footer.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed, onMounted, ref } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const banners = computed(() => {
  if (isArray(frontmatter.value.banners)) {
    return frontmatter.value.banners
  }
  return []
})

const headerOpacity = ref(0)
const bannerIndex = ref(0)

onMounted(() => {
  if (banners.value && banners.value.length > 0)
    bannerIndex.value = Math.floor(Math.random() * banners.value.length)
})

const bgSrc = computed(() => {
  return banners.value[bannerIndex.value]?.src
})
</script>

<template>
  <main class="home" :style="{ 'background-image': bgImagePath }">
    <div
      v-if="bgSrc"
      class="banner_wrapper"
      :style="{ 'background-image': `url(${bgSrc})` }"
    ></div>
    <div class="theme-default-content custom">
      <Content />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.home {
  .banner_wrapper {
    background-attachment: fixed;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }
}
</style>
