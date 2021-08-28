import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions,  } from 'vuepress'


export default defineUserConfig<DefaultThemeOptions>({
    theme: '@calibur/eva',
    title: '{ do something }',
    bundlerConfig: {
      chainWebpack: (config) => {
        config.output.publicPath = '//cdn.jsdelivr.net/gh/falstack/falstack.github.io@gh-pages/'
      }
    },
    themeConfig: {
      author: '冰淤', // will display on the page footer
    }
})