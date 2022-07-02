/*
 * @Author: gezuxia
 * @Descripttion: 配置文件
 * @Date: 2022-06-28 15:06:12
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-07-02 22:07:38
 */
module.exports = {
  base: '/diplomat-docs/', // 部署到 github 相关的配置
   markdown: {
    lineNumbers: false // 代码块显示行号
  },
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Diplomat Edge',
      description: 'Opensource Diplomat Edge'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '外交官',
      description: '边缘计算开源框架'
    }
  },
  themeConfig: {
    // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 多语言
    locales: {
      '/': {
        nav: [
          { text: 'Document', link: '/diplomat/' },
          { text: 'About Us', link: '/about-us/' },
          { text: 'Join Us', link: '/join-us/' },
          { text: 'GitHub', link: 'https://github.com/99nil/diplomat-docs' } 
        ],
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
          // "" 对应 README.md
          '/diplomat/': [
            {
              title: '外交官文档',
              path: '/diplomat/',
            },
          ],
          '/about-us/': [
            {
              title: '介绍',
              path: '/about-us/',
            },
            {
              title: '团队介绍',
              path: '/about-us/members',
            },
          ],
        }
      },
      '/zh/': {
        nav: [
          { text: '文档', link: '/zh/diplomat/' },
          { text: '团队介绍', link: '/zh/about-us/' },
          { text: '加入我们', link: '/zh/join-us/' },
          { text: 'GitHub', link: 'https://github.com/99nil/diplomat-docs' } 
        ],
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: {
          // '/zh/guide/': [""],
          '/zh/diplomat/': [
            {
              title: '外交官文档',
              path: '/zh/diplomat/',
            },
          ],
          '/zh/about-us/': [
            {
              title: '介绍',
              path: '/zh/about-us/',
            },
            {
              title: '团队介绍',
              path: '/zh/about-us/members',
            },
          ],
        }
      },
    }
  },
  
}
