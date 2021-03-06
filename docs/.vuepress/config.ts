import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/zh': {
      lang: 'zh-CN',
      title: `仲灏`,
      description: 'Vue 驱动的静态网站生成器',
    },
    '/en': {
      lang: 'en-US',
      title: `Izhaong's Blog`,
      description: 'Vue-powered Static Site Generator',
    },
  },
  theme: path.resolve(
    __dirname,
    '../../packages/@vuepress/theme-default/src/node/index.ts'
  ),
  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    '@vuepress/vite',

  themeConfig: {
    logo: '/images/hero.png',

    repo: '',

    docsDir: 'docs',
    home: '/zh',

    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/zh': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      /**
       * English locale config
       */
      '/en': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
    footerHtml: `Copyright &copy;2021-2022 <a href="https://github.com/izhaong" target="_blank">Izhaong</a> 丨 <a href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备2021031194号</a>`,
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '3a539aab83105f01761a137c61004d85',
    //     indexName: 'vuepress',
    //     searchParameters: {
    //       facetFilters: ['tags:v2'],
    //     },
    //     locales: {
    //       '/zh/': {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档',
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消',
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除',
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接',
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者',
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               openIssueText: '你认为该查询应该有结果？',
    //               openIssueLinkText: '点击反馈',
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
  ],
})
