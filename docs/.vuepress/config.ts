import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    theme: '@calibur/eva',
    title: '{ do something }',
    themeConfig: {
      author: '冰淤', // will display on the page footer
    }
})