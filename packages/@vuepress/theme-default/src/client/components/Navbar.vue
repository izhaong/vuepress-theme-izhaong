<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-14 15:03:56
 * @LastEditTime: 2022-04-21 22:38:50
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/client/components/Navbar.vue
-->
<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleDarkModeButton from '@theme/ToggleDarkModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeLocaleData } from '../composables'

defineEmits(['toggle-sidebar'])

const themeLocale = useThemeLocaleData()

const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})
const enableDarkMode = computed(() => themeLocale.value.darkMode)
const frontmatter = usePageFrontmatter<any>()
const router = useRouter()

const previousTop = ref(0)

const isFixed = ref(false)
const isVisible = ref(false)
const isInvert = ref(true)

let unregisterRouterHook

const handleScroll = () => {
  const currentTop = window.pageYOffset

  if (currentTop < previousTop.value) {
    // Scrolling up
    if (currentTop > 0 && isFixed.value) isVisible.value = true
    else {
      isVisible.value = false
      isFixed.value = false
    }
  } else {
    // Scrolling down
    isVisible.value = false
    if (navbar.value && currentTop > navbar.value!.offsetHeight)
      isFixed.value = true
  }
  previousTop.value = currentTop
}

const handleInvert = () => {
  let invert = false

  // Home page
  if (frontmatter.value.layout === 'HomePage') invert = true

  // Post with header image
  if (frontmatter.value.layout === 'Post' && frontmatter.value.useHeaderImage)
    invert = true

  // Tags page with header image
  if (
    frontmatter.value.layout === 'Tags' &&
    themeLocale.value.pages &&
    themeLocale.value.pages.tags &&
    themeLocale.value.pages.tags.bgImage
  )
    invert = true

  // Links page with header image
  if (
    frontmatter.value.layout === 'Links' &&
    themeLocale.value.pages &&
    themeLocale.value.pages.links &&
    themeLocale.value.pages.links.bgImage
  )
    invert = true

  isInvert.value = invert
}

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}

onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT || !navbar.value) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)

  handleInvert()
  unregisterRouterHook = router.afterEach(() => {
    handleInvert()
  })

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  unregisterRouterHook()
})
</script>

<template>
  <header
    ref="navbar"
    class="navbar"
    :class="{
      'is-fixed': isFixed || isSidebar,
      'is-visible': isVisible || isSidebar,
      'invert': isInvert,
    }"
  >
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <ToggleDarkModeButton v-if="enableDarkMode" />
      <NavbarSearch />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/_variables';
@import '../styles/_mixins';

.navbar {
  --navbar-line-height: calc(
    var(--navbar-height) - 2 * var(--navbar-padding-v)
  );

  padding: var(--navbar-padding-v) var(--navbar-padding-h);
  line-height: var(--navbar-line-height);

  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  box-sizing: border-box;
  background-color: transparent;
  transition: background-color var(--t-color), border-color var(--t-color);

  .site-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--c-text);
    position: relative;
  }

  .navbar-items-wrapper {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    top: var(--navbar-padding-v);
    right: var(--navbar-padding-h);
    height: var(--navbar-line-height);
    padding-left: var(--navbar-padding-h);
    white-space: nowrap;
    font-size: 0.9rem;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }

  &.invert {
    span.site-name,
    .navbar-items .navbar-item > a,
    .navbar-items .navbar-item span.title {
      color: white;

      &:hover,
      &:focus {
        color: rgba(white, 0.8);
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    .can-hide {
      display: none;
    }

    .site-name {
      width: calc(100vw - 9.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left: -0.5rem;
    }
  }
}

/**
 * navbar-items
 */
.navbar-items {
  display: inline-block;
  font-weight: 600;

  a {
    display: inline-block;
    line-height: 1.4rem;
    color: inherit;

    &:hover,
    &.router-link-active {
      color: var(--c-text-accent);
    }
  }

  .navbar-item {
    position: relative;
    display: inline-block;
    margin-left: 1.5rem;
    line-height: var(--navbar-line-height);

    &:first-child {
      margin-left: 0;
    }

    .nav-icon {
      position: relative;
      display: inline-block;
      margin-right: 4px;
      width: 17px;
      vertical-align: middle;
      text-align: center;

      .ov-icon {
        width: 15px;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar-items {
    .navbar-item {
      margin-left: 0;
    }
  }
}

@media (min-width: $MQMobile) {
  .navbar {
    &.is-fixed {
      /* when the user scrolls down, we hide the header right above the viewport */
      position: fixed;
      top: calc(0rem - var(--navbar-height));
      background-color: var(--c-bg-navbar);
      border-bottom: 1px solid var(--c-border);
      box-shadow: var(--box-shadow);

      @include transition(transform 0.3s);

      .navbar-item a,
      span.title,
      span.site-name {
        color: var(--c-text) !important;

        &:hover,
        &:focus,
        &.router-link-active {
          color: var(--c-text-accent) !important;
        }
      }
    }

    &.is-visible {
      @include transform(translateY(100%));
    }
  }

  .navbar-items a {
    &:hover,
    &.router-link-active {
      color: var(--c-text);
    }
  }

  .navbar-item > a {
    &:hover,
    &.router-link-active {
      color: var(--c-text-accent);
    }
  }
}

.DocSearch {
  transition: background-color var(--t-color);
}
</style>
