<template lang="pug">
.header( v-bind:style=" { width: '100%' } " id="HOME-anchor" )
    .mobile-header
        mu-appbar#mobile--appbar( class="" )
            .logoImg( slot="left" )
                img( src="../assets/img/logo-shangchao-orange-44-px@3x.png" )
            .mu-appbar-title
                span.mobile--title 青岛上朝信息科技有限公司
            mu-icon-button( icon='menu' class="mobile--btn" slot="right" @click="toggle( true )" )
        mu-drawer( right v-bind:open="open" v-bind:docked="docked" @close="toggle()" )
            mu-list( @itemClick="docked ? '' : toggle()" )
                mu-list-item( title="HOME"     @click="toId( 'HOME-anchor' )" )
                mu-list-item( title="关于我们"  @click="toId( 'aboutUs-anchor' )" )
                mu-list-item( title="服务项目"  @click="toId( 'service-anchor' )" )
                mu-list-item( title="成功案例"  @click="toId( 'works-anchor' )" )
                mu-list-item( title="团队介绍"  @click="toId( 'team-anchor' )" )
                mu-list-item( title="招贤纳士"  @click="toId( 'joinUs-anchor' )" )
                mu-list-item( title="联系我们"  @click="toId( 'contactUs-anchor' )" )
                mu-list-item( v-if="docked"    @click.native="open = false" title="Close" )
    .pc-header
        .warp--pc-header
            mu-row( gutter )
                // PC - 左侧
                mu-col( class="pc--header--box" desktop="40" )
                    .logoImg
                        img( src="../assets/img/logo-shangchao-orange-44-px@3x.png" )
                    .mu-appbar-title
                        span.mobile--title 青岛上朝信息科技有限公司
                // PC - 右侧
                mu-col( class="pc--header--box" desktop="60" )
                    mu-paper
                        mu-bottom-nav( v-bind:value="bottomNav" @change="handleChange" )
                            mu-bottom-nav-item( value="HOME"        title="HOME"    v-on:click="PCtoId( 'HOME-anchor' )"         )
                            mu-bottom-nav-item( value="aboutUs"     title="关于我们" v-on:click="PCtoId( 'aboutUs-anchor' )"      )
                            mu-bottom-nav-item( value="service"     title="服务项目" v-on:click="PCtoId( 'service-anchor' )"      )
                            mu-bottom-nav-item( value="works"       title="成功案例" v-on:click="PCtoId( 'works-anchor' )"        )
                            mu-bottom-nav-item( value="team"        title="团队介绍" v-on:click="PCtoId( 'team-anchor' )"         )
                            mu-bottom-nav-item( value="joinUs"      title="招贤纳士" v-on:click="PCtoId( 'joinUs-anchor' )"       )
                            mu-bottom-nav-item( value="contactUs"   title="联系我们" v-on:click="PCtoId( 'contactUs-anchor' )"    )
</template>

<script>
export default {
    data () {
        return {
            open        : false
            ,docked     : true
            ,bottomNav  : 'HOME'
        }
    }
    ,methods: {
        toggle (flag) {
            this.open = !this.open
            this.docked = !flag
        }
        ,toId( idName ) {
            // console.log(name)
            location.href = '#' + idName
        }
        ,handleChange (val) {
            this.bottomNav = val
        }
        ,PCtoId( idName ) {
            console.log( idName )
            // location.href = '#' + idName
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

.header
    position: absolute
    top: 0
    // 移动端 - header
    .mobile-header
        @media only screen and ( min-width : 320px )
            width: 100%
            +REM( height, 60px )
            // 顶部导航栏( 未滚动 )
            .mu-appbar
                position: fixed
                background-color: rgba( $C-base, .1 )
                // left下
                .logoImg
                        +flexCenter
                        +REM-W-H( 48px, 48px )
                        >img
                            padding: 20% 0
                            +imgCover( 75% )
                .mobile--title
                    font-size: $F-text
                .right
        @media only screen and ( min-width : 1024px )
            display: none

    // PC - header
    .pc-header
        @media only screen and ( min-width : 320px )
            display: none
        @media only screen and ( min-width : 1180px )
            position: fixed
            display: block
            width: 100%
            top: 0
            z-index: 1
            .warp--pc-header
                +global-maxWidth
                padding: 0 !important
                    top     : $M-contentMargin !important
                    bottom  : $M-contentMargin !important
                .pc--header--box
                    width: 50%
                    >div
                        +dib
                    .logoImg
                        +w-h( 60px, 60px )
                        >img
                            +imgCover( 100% )
                    .mu-appbar-title
                        +fS( 20px )
                        +REM-padding-LR( $M-contentMargin )
                        +text-vertical-align( bottom )
                        >span
                            color: $F !important
                    .mu-paper
                        // 导航文字栏背景颜色 设置为透明
                        .mu-bottom-nav
                            background-color: inherit !important
                        // 导航栏文字 字体设置
                        .mu-bottom-item-text
                            font-size: 20px !important
// 移动页面时, 添加改变class 样式
.mobile-header
    .moveViewStyle
        background-color: $F !important
        .mobile--title
            color: $C-title !important
        .mu-icon-button
            color: $C-theme !important

// position: fixed;
// display: block;
// width: 100%;
// background-color: red;
// top: 0;
// z-index: 1;
</style>
