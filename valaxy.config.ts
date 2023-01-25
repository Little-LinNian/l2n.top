import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonTwikoo } from 'valaxy-addon-twikoo'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '霖念的小站',
      cloud: {
        enable: true,
      },
    },
    bg_image: {
      enable: true,
      url: "/fxt-light.png",
      dark: "/fxt-dark.png"
    },
    footer: {
      since: 2020
    },
  },
  addons: [
    addonTwikoo({ envId: "https://twikoo.l2n.top" }),
  ],
  unocss: { safelist },
})
