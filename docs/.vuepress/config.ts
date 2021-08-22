import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    theme: 'simple',
    themeConfig: {
        author: 'YOUR NAME', // will display on the page footer
    }
})