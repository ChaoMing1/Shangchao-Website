<template lang="pug">
    .header
        .mobile-header
            mu-appbar.mobile--appbar
                .logoImg( slot="left" )
                    img( src="../assets/img/logo-shangchao-orange-44-px@3x.png" )
                .mu-appbar-title
                    span.mobile--title 青岛上朝信息科技有限公司
                mu-icon-button( icon='menu' class="mobile--btn" slot="right" @click="toggle( true )" )
            <mu-drawer right :open="open" :docked="docked" @close="toggle()" >
                mu-list( @itemClick="docked ? '' : toggle()" )
                    mu-list-item( title="关于我们" )
                    mu-list-item( title="服务项目" )
                    mu-list-item( title="成功案例" )
                    mu-list-item( title="团队介绍" )
                    mu-list-item( title="招贤纳士" )
                    mu-list-item( title="联系我们" )
                    mu-list-item( v-if="docked" @click.native="open = false" title="Close" )


        .pc-header
            <mu-row gutter>
                mu-col( width="20" tablet="25" desktop="33" ) col-20
                mu-col( width="30" tablet="25" desktop="33" ) col-30
                mu-col( width="50" tablet="25" desktop="33" ) col-50
</template>

<script>
export default {
    data () {
        return {
            open: false,
            docked: true
        }
    }
    ,methods: {
        toggle (flag) {
            this.open = !this.open
            this.docked = !flag
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
        @media only screen and ( min-width : 1024px )
            width: 100%
            +REM( height, 60px )
</style>
