/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-14 15:03:56
 * @LastEditTime: 2022-04-19 21:25:56
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vuepress-next/packages/@vuepress/theme-default/src/shared/page.ts
 */
import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface DefaultThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface DefaultThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
}

export interface DefaultThemeHomePageFrontmatter
  extends DefaultThemePageFrontmatter {
  home: true
  heroImage?: string
  heroImageDark?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  features?: {
    title: string
    details: string
  }[]
  banners?: {
    src: string
  }[]
  footer?: string
  footerHtml?: boolean
}

export interface DefaultThemeNormalPageFrontmatter
  extends DefaultThemePageFrontmatter {
  home?: false
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}
