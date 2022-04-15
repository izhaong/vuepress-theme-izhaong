import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Guide',
      children: [
        '/en/guide/README.md',
        '/en/guide/getting-started.md',
        '/en/guide/configuration.md',
        '/en/guide/page.md',
        '/en/guide/markdown.md',
        '/en/guide/assets.md',
        '/en/guide/i18n.md',
        '/en/guide/deployment.md',
        '/en/guide/theme.md',
        '/en/guide/plugin.md',
        '/en/guide/bundler.md',
        '/en/guide/migration.md',
      ],
    },
  ],
  '/en/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/en/advanced/architecture.md',
        '/en/advanced/plugin.md',
        '/en/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/en/advanced/cookbook/README.md',
        '/en/advanced/cookbook/usage-of-client-app-enhance.md',
        '/en/advanced/cookbook/adding-extra-pages.md',
        '/en/advanced/cookbook/making-a-theme-extendable.md',
        '/en/advanced/cookbook/passing-data-to-client-code.md',
        '/en/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/en/reference/': [
    {
      text: 'VuePress Reference',
      collapsible: true,
      children: [
        '/en/reference/cli.md',
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
      text: 'Bundlers Reference',
      collapsible: true,
      children: [
        '/en/reference/bundler/vite.md',
        '/en/reference/bundler/webpack.md',
      ],
    },
    {
      text: 'Default Theme Reference',
      collapsible: true,
      children: [
        '/en/reference/default-theme/config.md',
        '/en/reference/default-theme/frontmatter.md',
        '/en/reference/default-theme/components.md',
        '/en/reference/default-theme/markdown.md',
        '/en/reference/default-theme/styles.md',
        '/en/reference/default-theme/extending.md',
      ],
    },
    {
      text: 'Official Plugins Reference',
      collapsible: true,
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
  ],
}
