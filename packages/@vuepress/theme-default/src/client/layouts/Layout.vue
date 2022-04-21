<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-21 19:40:07
 * @LastEditTime: 2022-04-21 22:44:24
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/client/layouts/Layout.vue
-->

<script setup lang="ts">
import Common from '@theme/Common.vue'
import Page from '@theme/Page.vue'
import { pageData } from '@vuepress/client'
import { Transition } from 'vue'
import { useScrollPromise } from '../composables'

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="pageData.path">
          <template #top>
            <!-- <ArticleHeader v-show="pageData.title" /> -->
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </template>
  </Common>
</template>
