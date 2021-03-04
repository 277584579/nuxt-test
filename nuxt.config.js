module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  dev: (process.env.NODE_ENV) !== 'production',
  head: {
    title: '营销云',
    meta: [
      {
        name: 'baidu-site-verification',
        content: 'code-Nj9neDXbwf'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        name: 'force-rendering',
        content: 'webkit'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=Edge,chrome=1'
      },
      /* 以上是设置双核浏览器默认状态下使用极速模式打开 */
      {
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: '为不同体量的零售企业营销云：为不同体量的零售企业提供数字化转型方案的SAAS平台。'
      },
      {
        name: 'Keywords',
        content: '营销云、零售云、服务云、客户云、数据云、零售运营平台、触达、营销自动化、自动化营销、数字营销、营销中台、用户画像、SCRM、CDP、Martech、行销科技、营销科技、科技营销、科技行销、拉新、复购、活跃、粘滞、转换、私域、直播、投放、零售触达、营销数据、数据采集、数据分析工具、数据分析模型、零售数据分析、用户行为分析、用户画像、私域数据分析、会员数据分析'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      // {
      //   name: 'viewport',
      //   content: 'width=device-width, initial-scale=1.0, user-scalable=no',
      // },

      /* 新增搜狗、神马、360 */
      {
        name: '360-site-verification',
        content: '850970beabd63bd397272b6dd73a1aba',
      },
      {
        name: 'sogou_site_verification',
        content: 'y3fi8ttkxP'
      },
      {
        name: 'shenma-site-verification',
        content: '15230d9dfb2e66bfecf2408862f2462c_1537497601',
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: "/js/flexible.js",
      type: 'text/javascript',
      charset: 'utf-8'
    }]
  },
  polyfill: {
    features: [{
        require: 'url-polyfill'
      },
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },
      {
        require: 'smoothscroll-polyfill',
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },
  mode: 'universal',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', '@/assets/style.scss'], // 全局引入的css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '@/plugins/axios',
      ssr: true
    },
    {
      src: '@/plugins/common',
      ssr: true
    }, {
      src: '~/plugins/vueFullPage',
      ssr: false
    },
  ], // 全局引入的js 在plugins文件夹写入在这里导入

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
  ],
  // target: 'static',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'fullpage-nuxt-module',
    'nuxt-polyfill',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
    // See https://github.com/nuxt-community/axios-module#options

    //是否允许跨域
    // proxy: true,
    //最多重发三次
    // retry: { retries: 3 },
    //开发模式下开启debug
    // debug: process.env._ENV == "production" ? false : true,
    //设置不同环境的请求地址
    // baseURL:
    //   process.env._ENV == "production"
    //     ? "http://clue-web-dev.rc.oneretail.cn"
    //     : "http://clue-web-dev.rc.oneretail.cn",
    //     //是否是可信任
    // withCredentials: true,



    proxy: true, // 表示开启代理
    prefix: '', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/retailcloud-official': {
        target: 'http://clue-web-dev.rc.oneretail.cn', // 目标接口域名
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '', // 把 /api 替换成‘’
        // }
    }
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  vender: ['axios'],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['axios'], // 为防止重复打包
    postcss: [
      require("postcss-px2rem")({
        // remUnit: 55 //开发
        remUnit: 60 //线上
      })
      // require('autoprefixer')
    ],
  },
  // router: {
  //   // 自定义路由
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: '404',
  //       path: '/404',
  //       component: resolve(__dirname, 'pages/home/404.vue'),
  //     },
  //     {
  //       name: 'codePage',
  //       path: '/codePage',
  //       component: resolve(__dirname, 'pages/codePage.vue'),     
  //     })
  //   },
  // },
}
