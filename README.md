# 文件目录
```
├── docs
│   ├── .vuepress 项目配置
│   │   ├── public 静态文件
│   │   ├── dist 打包后的文件
│   │   └── config.js 基础配置
│   ├── doc-1 功能模块英文文档 doc-1
│   │    ├── doc1-1.md
│   │    └── doc1-2.md
│   ├── doc-2.md
│   │
│   ├── zh 中文归档
│   │   ├── doc-1 
│   │   │   ├── doc1-1.md
│   │   │   └── doc1-2.md
│   │   └── doc-2.md
│   │
│   ├── README.md
│   └── config.md
│ 
├── deploy.sh 部署配置
├── package.json
└── README.md
```
<br></br>

# 支持多语言

当前多语言支持英文与中文。默认为英文。
如需对多语言进行相关的配置，在 `docs/.vuepress/config.js` 文件中配置。

### 英文文档存放位置
`/docs/` 文件夹

 ### 中文文档存放位置
`/docs/zh/` 文件夹
<br></br>

# 左侧栏配置
因当前支持多语言，所以添加文档时，需要在  `docs/.vuepress/config.js` 文件中 `themeConfig.locales` 中对多个语言配置文档的菜单导航。
<br></br>

# 添加一个文档
如添加一个头部导航 guide 

## 创建英文文档

  在 `/docs/` 下创建 `/guide/` 文件夹，`/guide/` 下创建 `README.md` 和 `test.md`，其中 `README.md` 为文件夹默认文件，每个文件夹中必须有此文件。
  
## 创建中文文档

  在 `/docs/zh/` 下创建 `/guide/` 文件夹，`/guide/` 下创建 `README.md` 和 `test.md`,其中` README.md` 为文件夹默认文件，每个文件夹中必须有此文件。
  文件需与英文文件目录 `/docs/guide/` 的文件一致。

## 头部添加导航
在 `docs/.vuepress/config.js` 文件下 `themeConfig.locales` 中，在多语言导航配置 `nav`中均添加 guide 导航：
```
docs/.vuepress/config.js:

themeConfig: {
  locales: {
    '/': {
        nav: [
        { text: 'guide', link: '/guide/' }
        /* **** */
      ],
    },
    '/zh/': {
      nav: [
        { text: '指南', link: '/zh/guide/' }
        /* **** */
      ],
    }
  }
  /** ****  */
}

```

## 添加文件的导航
目前暂未使用自动化生成导航，先需要手动添加
在 `docs/.vuepress/config.js` 文件下 `themeConfig.locales` 中的 `/` 和 `/zh/` 下的 `sidebar` 分别添加添加:

```
docs/.vuepress/config.js:

themeConfig: {
  locales: {
    '/': {
       sidebar: {
         '/guide/': [
            { title: 'guide',  path: '/guide/'}, // 此时 path 默认指向 /guide/README.md 文件。
            { title: 'guide test',  path: '/guide/test'} // path 指向 /guide/test.md 文件。
          ]，
       }
    },
    '/zh/': {
      sidebar: {
        { title: '指南',  path: '/zh/guide/'},
      }
    },
  }
  /* ***** */
}

```