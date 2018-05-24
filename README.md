# vue-multiple-page
最近遇到个项目，H5页面跟PC后台管理系统要处于同个VUE项目，就想到VUE多页面。
感谢JayZangwill的回答[https://segmentfault.com/q/1010000014863136?_ea=3731357][1]

## Install

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

```

PC端 [http://localhost:8666/modules/backend.html][1]

移动APP [http://localhost:8666/modules/index.html][2]

## 多页面配置
- 自己先用脚手架，vue-cli搭快速搭个环境

- vue2.0版本多页面入口,是由webpack配置来完成的，我的项目文件结构如下
```
    webpack
      |---build
      |---config
      |---dist  打包后的文件
      |---src
        |---api axios请求
        |---assets 资源
        |---components组件
        |---modules各个模块
          |---backend        后台管理系统页面
            |---pages 组件
            |---router 路由
            |---backend.html
            |---backend.js
            |---backend.vue
          |---index           H5页面
            |---pages 组件
            |---router 路由
            |---index.html
            |---index.js
            |---phindexone.vue
  ```

### module 下的文件夹，最好都使用同样的名字，比如backend就统一， backend.html,backend.js,backend.vue
## 更改位置有3个地方（glob模块是为了允许使用**等路径）
- 1、build/webpack.base.conf.js
```
/*==   修改添加  开始   ==*/
const glob = require('glob')
const entry = getEntries('./src/module/**/*.js') // 获得入口js文件
/*==   修改添加  结束   ==*/

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
/*==   修改添加  开始   ==*/
function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if(/(\module\/(?:.+[^.js]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, '')]=entry;
    }
  })
  return entries;
}
/*==   修改添加  结束   ==*/


module.exports = {
  context: path.resolve(__dirname, '../'),
  // entry: {
  //   app: './src/main.js'
  // },
  /*==   修改添加  结束   ==*/
  entry,
  /*==   修改添加  结束   ==*/
  ………………
}

```
- 2F:build/webpack.dev.conf.js
```
/*==   修改添加  开始   ==*/
const glob = require('glob')
const entry = getEntries('./src/module/**/*.html') // 获得入口hmtl文件
/*==   修改添加  结束   ==*/


 plugins: [
    ………………
    /*==   修改添加  开始   ==*/
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    /*==   修改添加  结束   ==*/

    // copy custom static assets
     ………………


module.exports = new Promise((resolve, reject) => {
      ………………
      /*==   修改添加  开始   ==*/
      for (let pathname in entry) {
        let conf = {
          filename: `${pathname}.html`,
          template: entry[pathname],
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
          },
          // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          chunksSortMode: 'dependency'
        }
        if (pathname in devWebpackConfig.entry) {
          conf.chunks = ['manifest', 'vendor', pathname];
          conf.hash = true;
        }
        devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
      }

      /*==   修改添加  结束   ==*/

      resolve(devWebpackConfig)
    }
  })
})


文末底部：
/*==   修改添加  开始   ==*/
function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if (/(\module\/(?:.+[^.html]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, '')] = entry;
    }
  })
  return entries;
}
/*==   修改添加  结束   ==*/

```

- 3、build/webpack.prod.conf.js
```
/*==   修改添加  开始   ==*/
const glob = require('glob')
const entry = getEntries('./src/module/**/*.html') // 获得入口hmtl文件
/*==   修改添加  结束   ==*/


plugins: [
   …………………………
    /*==   修改添加  开始   ==*/

    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),

    /*==   修改添加  结束   ==*/
   ………………
  ]

   ………………
   /*==   修改添加  开始   ==*/
for (let pathname in entry) {
  let conf = {
    filename: `${pathname}.html`,
    template: entry[pathname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }
  if (pathname in webpackConfig.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
/*==   修改添加  结束   ==*/
   ………………



  文本底部：
  /*==   修改添加  开始   ==*/
function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if (/(\module\/(?:.+[^.html]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, '')] = entry;
    }
  })
  return entries;
}
/*==   修改添加  结束   ==*/
```

### License
[MIT](http://opensource.org/licenses/MIT)

###BUG
```
因为使用了lib-flexible 和配置了px2rem-loader，所以导致PC端也一样跟着把px转成rem了。大家可以自行去掉。
参考配置链接： https://www.cnblogs.com/WQLong/p/7798822.html
```
