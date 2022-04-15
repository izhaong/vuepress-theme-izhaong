import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en/guide/',
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: 'CLI',
            link: '/en/reference/cli.html',
          },
          '/en/reference/config.md',
          '/en/reference/frontmatter.md',
          '/en/reference/components.md',
          '/en/reference/plugin-api.md',
          '/en/reference/theme-api.md',
          '/en/reference/client-api.md',
          '/en/reference/node-api.md',
        ],
      },
      {
        text: 'Bundlers',
        children: [
          '/en/reference/bundler/vite.md',
          '/en/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Default Theme',
        children: [
          '/en/reference/default-theme/config.md',
          '/en/reference/default-theme/frontmatter.md',
          '/en/reference/default-theme/components.md',
          '/en/reference/default-theme/markdown.md',
          '/en/reference/default-theme/styles.md',
          '/en/reference/default-theme/extending.md',
        ],
      },
    ],
  },
  {
    text: 'Plugins',
    children: [
      {
        text: 'Common Features',
        children: [
          '/en/reference/plugin/back-to-top.md',
          '/en/reference/plugin/container.md',
          '/en/reference/plugin/external-link-icon.md',
          '/en/reference/plugin/google-analytics.md',
          '/en/reference/plugin/medium-zoom.md',
          '/en/reference/plugin/nprogress.md',
          '/en/reference/plugin/register-components.md',
        ],
      },
      {
        text: 'Content Search',
        children: [
          '/en/reference/plugin/docsearch.md',
          '/en/reference/plugin/search.md',
        ],
      },
      {
        text: 'PWA',
        children: [
          '/en/reference/plugin/pwa.md',
          '/en/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: 'Syntax Highlighting',
        children: [
          '/en/reference/plugin/prismjs.md',
          '/en/reference/plugin/shiki.md',
        ],
      },
      {
        text: 'Theme Development',
        children: [
          '/en/reference/plugin/active-header-links.md',
          '/en/reference/plugin/git.md',
          '/en/reference/plugin/palette.md',
          '/en/reference/plugin/theme-data.md',
          '/en/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: 'Learn More',
    children: [
      {
        text: 'Advanced',
        children: [
          '/en/advanced/architecture.md',
          '/en/advanced/plugin.md',
          '/en/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/en/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          '/en/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
]
