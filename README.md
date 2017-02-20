# 上朝科技官网

> 本页面需要在服务器环境下访问( 可使用 `yarn run dev` 预览 ), 勿直接浏览静态页面

## 使用技术:
| 技术名称                                                      | 作用           |  版本  |
| --------                                                      | -----:         | :----:  |
| [Vuejs](http://cn.vuejs.org/)                                 | 框架            |   2.1.10     |
| [Sass](http://www.sass-zh.com/)                               | 样式预处理器     |  4.5.0  |
| [Webpack](http://webpackdoc.com/)                             | 模块打包         |  2.2.1  |
| [Babel](http://babeljs.cn/)                                   | ES6转译ES5      |  6.22.1 |
| [Yarn](https://yarn.bootcss.com/)                             | 模块依赖          |  0.17.6  |
| [Muse UI](https://museui.github.io/#/index)                   | UI框架          |  2.0.0-rc.5  |
| [Pug](https://pugjs.org/zh-cn/api/getting-started.html)       | Node模版语言    |  2.0.0-beta11  |

## Build Setup / 开发流程

``` bash
# install dependencies
# 国内环境建议使用cnpm install
npm install
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 命名约定
> Vue文件

1. 组件名称开头需大写
2. 组件引用名称开头需大写
3. 路由页面首字母需小写

***

> Sass文件( 禁止使用CSS文件编写样式 )

1. 颜色值需大写 ( 例子'#FFF' )
2. 类名需严格遵循BEM命名法
3. 减少使用驼峰命名( 引用混合 / 继承方法除外 )

***

> JS文件

1. 变量名 / 方法名 开头需小写
2. 使用驼峰命名法( 避免使用 破折号 / 下划线 连接两个单词 )
