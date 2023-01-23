import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
  url: 'https://l2n.top',
  lang: 'zh-CN',
  title: 'L2N.Top!',
  author: {
    name: '霖念',
    status: {
      emoji: "😢",
      message: "emo"
    },
    avatar: "http://q2.qlogo.cn/headimg_dl?dst_uin=2544704967&spec=100"
  },
  description: 'L2N.Top!霖念的个人博客',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 605357291',
      link: 'https://jq.qq.com/?_wv=1027&k=RHz1DgQI',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Little-LinNian',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/222238689',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:2544704967@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '听风起',
    },

    footer: {
      since: 2020,
    },
  },
  

  unocss: { safelist },
})
