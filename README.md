# 上朝科技官网

> 本页面需要在服务器环境下访问( 可使用 `yarn run dev( npm run dev )` 预览 ), 勿直接浏览静态页面

## 使用技术:
| 技术名称                                                      | 作用                    |  版本  |
| --------                                                      | -----:                | :----:  |
| [Vuejs](http://cn.vuejs.org/)                                 | 框架                  |   2.1.10     |
| [Muse UI](https://museui.github.io/#/index)                   | UI框架                |  2.0.0-rc.5  |
| [Pug](https://pugjs.org/zh-cn/api/getting-started.html)       | Node模版              |  2.0.0-beta11  |
| [Sass](http://www.sass-zh.com/)                               | 样式预处理器           |  4.5.0  |
| [Webpack](http://webpackdoc.com/)                             | 模块打包              |  2.2.1  |
| [Gulp](http://www.gulpjs.com.cn/)                             | 自动构建( 压缩图片 )   |  3.9.1  |

## Build Setup / 开发流程

``` bash
# install dependencies
npm install

# 国内环境建议使用cnpm install
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 命名约定
> Vue文件

1. 组件名称开头需大写
2. 组件引用名称开头需大写

***

> Sass文件( 禁止使用CSS文件编写样式 )

1. 颜色值需大写 ( 例子'#FFF' )
2. 类名遵循BEM命名法
3. 减少使用驼峰命名( 引用混合 / 继承方法除外 )

***

> JS文件

1. 使用驼峰命名法( 避免使用 破折号 / 下划线 连接两个单词 )

***

- [ ] **Shangchao-Website优化**
    - [ ]  需要优化`Team`组件内的图片样式, 改用`flex`方式
    - [x]  PC版本, `header`头部选中下划线 要在底部, 更改样式效果( 增粗. 更清晰 )
    - [x]  手机版本, `header`头部不需要 `shadow`效果
    - [x]  '招贤纳士' 文字大小样式需要统一, 只有标题需要大字体, 其他皆为统一字体大小
    - [x]  整体页面字体保持'微软雅黑'字体( 不做系统判断 )
