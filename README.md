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
vue2.0版本多页面入口,是由webpack配置来完成的，我的项目文件结构如下
```
    webpack
      |---build
      |---config
      |---dist 
      |---route 路由
      |---src
        |---api axios请求
        |---assets 资源
        |---common 公共js资源目录
        |---components组件
        |---modules各个模块
          |---index    index模块
            |---views 组件
            |---index.html
            |---index.js
            |---index.vue
          |---phone       phone模块
            |---phone.html
            |---phone.js
            |---phone.vue
            |---phone 组件
  ```


### Browser Support

Modern browsers and Internet Explorer 10+.

## snapshots
![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/login.png)

![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/main.png)

![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/edit.jpg)

### License
[MIT](http://opensource.org/licenses/MIT)
