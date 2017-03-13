<template lang="pug">
#app
    AppBar
    Banner
    .moduleBox( v-bind:style=" { backgroundColor: '#FFF' } " )
        <TitleBox :title_info = aboutUs />
        AboutUs
    .moduleBox
        <TitleBox :title_info = service />
        Service
    .moduleBox( v-bind:style=" { backgroundColor: '#FFF' } " )
        <TitleBox :title_info = works />
        Works
    .moduleBox
        <TitleBox :title_info = team />
        Team
    .moduleBox( v-bind:style=" { backgroundImage: 'url( ' + joinUsBcImg + ' )', backgroundSize: 'cover' } " )
        <TitleBox :title_info = joinUs />
        JoinUs
    .moduleBox
        <TitleBox :title_info = contactUs />
        ContactUs
    MapView
    FooterBox
</template>

<script>
import AppBar       from './components/AppBar'
import Banner       from './components/Banner'
import TitleBox     from './components/TitleBox'
import AboutUs      from './components/AboutUs'
import Service      from './components/Service'
import Works        from './components/Works'
import Team         from './components/Team'
import JoinUs       from './components/JoinUs'
import ContactUs    from './components/ContactUs'
import MapView      from './components/MapView'
import FooterBox    from './components/FooterBox'
const components = { AppBar, Banner, TitleBox, AboutUs, Service, Works, Team, JoinUs, ContactUs, MapView, FooterBox }

export default {
    name: 'app'
    ,data() {
        return {
            // 关于我们
            aboutUs: {
                title: [
                    {
                        text   : '关于'
                        ,color : 'rgb( 51,51,51 )'
                    }
                    ,{
                        text   : '我们'
                        ,color : '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'WHO WE ARE'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'person'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'aboutUs-anchor'
            }
            // 服务项目
            ,service: {
                title: [
                    {
                        text   : '提供'
                        ,color : '#333'
                    }
                    ,{
                        text   : '服务'
                        ,color : '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'WHAT WE DOING'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'settings'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'service-anchor'
            }
            // 成功案例
            ,works: {
                title: [
                    {
                        text   : '行业'
                        ,color : '#333'
                    }
                    ,{
                        text   : '方案'
                        ,color : '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'WHAT WE SOLVE'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'photo'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'works-anchor'
            }
            // 团队介绍
            ,team: {
                title: [
                    {
                        text   : '团队'
                        ,color : '#333'
                    }
                    ,{
                        text   : '介绍'
                        ,color : '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'OUR TEAM'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'settings'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'team-anchor'
            }
            // 招贤纳士
            ,joinUs: {
                title: [
                    {
                        text   : '招贤'
                        ,color : 'rgb( 250, 250, 250 )'
                    }
                    ,{
                        text   : '纳士'
                        ,color : 'rgb( 250, 250, 250 )'
                    }
                ]
                ,subTitle: {
                    text    : 'JOIN US'
                    ,color  : 'rgb( 250, 250, 250 )'
                }
                ,icon: {
                    class: 'group'
                    ,color: 'rgb( 250, 250, 250 )'
                }
                ,idName: 'joinUs-anchor'
            }
            // 联系我们
            ,contactUs: {
                title: [
                    {
                        text   : '联系'
                        ,color : '#333'
                    }
                    ,{
                        text   : '我们'
                        ,color : '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'CONTACT US'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'call'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'contactUs-anchor'
            }
            // "加入我们" - 背景图片
            ,joinUsBcImg: require('./assets/img/bg.png')
            ,saveViewState  : ''                                                                    // 用于页面版块是否发生改变( 只有确认版块改变后, 触发改变; )
            ,cacheViewState : ''                                                                    // 用于缓存页面版块状态( 高频状态, 页面滚动就触发改变 )
        }
    }
    ,mounted: function() {
        this.watchScrollY()                                                                         // 监听向上滑动, 改变样式
    }
    ,methods: {
        // 目的: 监听屏幕滚动
        watchScrollY() {
            window.onscroll = () => {
                let yValue              = window.scrollY
                ,mobileAppbar  = document.getElementById('mobile--appbar')
                ,pcAppBar      = document.getElementById('pc--header')
                if( yValue == 0 ) {
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1' )
                    pcAppBar.setAttribute( 'class', 'pc-header' )
                    this.$data.saveViewState = ''                                                   // 修改 $data变成初始值 空字符串
                    // console.log('清空$data状态, 回到HOME状态')
                    this.changeBtmNavStyle( 1 )
                } else {
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1 moveViewStyle' )
                    pcAppBar.setAttribute( 'class', 'pc-header moveViewStyle-PC' )
                    if( yValue > 1000 && yValue <1700 ) {
                        this.cacheMethodsState('关于我们', 2)
                    } else if( yValue >= 1700 && yValue < 2300  ) {
                        this.cacheMethodsState('服务项目', 3)
                    } else if ( yValue >= 2300 && yValue < 3100 ) {
                        this.cacheMethodsState('成功案例', 4)
                    } else if ( yValue >= 3100 && yValue < 4100 ) {
                        this.cacheMethodsState('团队介绍', 5)
                    } else if ( yValue >= 4100 && yValue < 5600 ) {
                        this.cacheMethodsState('招贤纳士', 6)
                    } else if ( yValue >= 5600 ) {
                        this.cacheMethodsState('联系我们', 7)
                    }

                }
            }
        }
        // 目的: 根据页面滚动 触发判断
        ,cacheMethodsState( moduleName, btmNum ) {
            let saveViewState = this.$data.saveViewState
            if( moduleName != saveViewState ) {                                                     // 如果比较 缓存状态 与 $data 状态不同， 版块发生改变
                this.changeBtmNavStyle( btmNum )                                                    // console.log('版块发生改变, 修改 $data值')
                this.$data.saveViewState = moduleName
            }
        }
        // 目的: 改变页面btm按钮样式
        ,changeBtmNavStyle( btmNum ) {
            let btmArr = document.getElementsByClassName('mu-buttom-item')
            for( let i = 0; i < btmArr.length; i++ ) {                                              // 清空class
                btmArr[i].setAttribute( 'class', 'mu-buttom-item' )
            }
            btmArr[btmNum - 1].setAttribute( 'class', 'mu-buttom-item mu-bottom-item-active' )
        }
    }
    ,components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'
@import './sass/vendors/_MuseUI.sass'

#app
    +bC( $C-base )
</style>
