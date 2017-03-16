// 首页内容( 路由 - 引入 )
<template lang="pug">
#Home
    Banner
    .moduleBox( v-bind:style=" { backgroundColor: '#FFF' } " )
        TitleBox( v-bind:title_info = "aboutUs" )
        AboutUs
    .moduleBox
        TitleBox( v-bind:title_info = "service" )
        Service
    .moduleBox( v-bind:style="{ backgroundColor: '#FFF' }" )
        TitleBox( v-bind:title_info = "intro" )
        Intro
    .moduleBox( v-bind:style=" { backgroundColor: '#F5F5F5' } " )
        TitleBox( v-bind:title_info = "works" )
        Works
    .moduleBox( v-bind:style=" { backgroundColor: '#FFF' } " )
        TitleBox( v-bind:title_info = "team" )
        Team
    .moduleBox( v-bind:style=" { backgroundImage: 'url( ' + joinUsBcImg + ' )', backgroundSize: 'cover' } " )
        TitleBox( v-bind:title_info = "joinUs" )
        JoinUs
    .moduleBox
        TitleBox( v-bind:title_info = "contactUs" )
        ContactUs
    MapView
</template>

<script>
import Banner       from '../components/Banner'         // Banner组件
import TitleBox     from '../components/TitleBox'       // 标题组件( 通用 )
import AboutUs      from '../components/AboutUs'        // 关于我们
import Service      from '../components/Service'        // 提供服务
import Intro        from '../components/Intro'          // 服务简介
import Works        from '../components/Works'          // 行业方案
import Team         from '../components/Team'           // 团队介绍
import JoinUs       from '../components/JoinUs'         // 招贤纳士
import ContactUs    from '../components/ContactUs'      // 联系我们
import MapView      from '../components/MapView'        // 地图组件
const components = { Banner, TitleBox, AboutUs, Service, Intro, Works, Team, JoinUs, ContactUs, MapView }

export default {
    name: 'Home',
    data() {
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
            // 服务简介
            ,intro: {
                title: [
                    {
                        text: '服务',
                        color: '#333'
                    }, {
                        text: '简介',
                        color: '#333'
                    }
                ]
                ,subTitle: {
                    text    : 'WHO WE DOING'
                    ,color  : 'rgb( 85,85,85 )'
                }
                ,icon: {
                    class: 'settings'
                    ,color: 'rgb( 110,110,110 )'
                }
                ,idName: 'intro-anchor'
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
            ,joinUsBcImg: require('../assets/img/bg.png')
            ,saveViewState  : ''                                                                    // 用于页面版块是否发生改变( 只有确认版块改变后, 触发改变; )
            ,cacheViewState : ''
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

</style>
