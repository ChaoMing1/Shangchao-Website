<template lang="pug">
#app
    AppBar
    router-view
    FooterBox
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppBar       from './components/AppBar'
import FooterBox    from './components/FooterBox'
const components = { AppBar, FooterBox }

export default {
    name: 'app'
    ,data() {
        return { }
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
        },
        // 目的: 改变页面btm按钮样式
        changeBtmNavStyle( btmNum ) {
            let btmArr = document.getElementsByClassName('mu-buttom-item')
            for( let i = 0; i < btmArr.length; i++ ) {                                              // 清空class
                btmArr[i].setAttribute( 'class', 'mu-buttom-item' )
            }
            btmArr[btmNum - 1].setAttribute( 'class', 'mu-buttom-item mu-bottom-item-active' )
        },
        // 根据 $store传回的 锚点名称 进行滚动
        moveScrollTop() {
            let anchorName  = this.$store.state.anchorName,                 // 首先保存 $store中锚点的名称
                anchorObj   = document.querySelector( "#" + anchorName )    // 检索这个节点对象
            document.body.scrollTop = anchorObj.offsetTop                   // 执行跳转
        }
    },
    computed: mapGetters({
        getAnchorName   : 'getAnchorName'
    }),
    watch: {
        // 监听: 锚点名称改变
        getAnchorName: function() {
            this.moveScrollTop()    // 移动卷轴到 锚点位置
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'
@import './sass/vendors/_MuseUI.sass'

#app
    +bC( $C-base )
</style>
