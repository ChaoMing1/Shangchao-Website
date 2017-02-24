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
                        ,color : 'rgb( 216, 59, 16 )'
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
                        text   : '服务'
                        ,color : 'rgb( 51,51,51 )'
                    }
                    ,{
                        text   : '项目'
                        ,color : 'rgb( 216, 59, 16 )'
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
                        text   : '成功'
                        ,color : 'rgb( 51,51,51 )'
                    }
                    ,{
                        text   : '案例'
                        ,color : 'rgb( 216, 59, 16 )'
                    }
                ]
                ,subTitle: {
                    text    : 'OUR LATEST WORKS'
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
                        ,color : 'rgb( 51,51,51 )'
                    }
                    ,{
                        text   : '介绍'
                        ,color : 'rgb( 216, 59, 16 )'
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
                        ,color : 'rgb( 51,51,51 )'
                    }
                    ,{
                        text   : '我们'
                        ,color : 'rgb( 216, 59, 16 )'
                    }
                ]
                ,subTitle: {
                    text    : 'GET IN TOUCH'
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
        }
    }
    ,mounted: function() {
        this.watchScrollY()             // 监听向上滑动, 改变样式
    }
    ,methods: {
        watchScrollY() {
            window.onscroll = () => {
                let yValue              = window.scrollY
                ,mobileAppbar  = document.getElementById('mobile--appbar')
                if( yValue == 0 ) {
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1' )
                } else {
                    mobileAppbar.setAttribute( 'class', 'mu-appbar mu-paper-1 moveViewStyle' )
                }
            }
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
