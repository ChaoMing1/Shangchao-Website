<template lang="pug">
#Service
    mu-row( gutter )
        mu-col( v-for="item in serviceArr" class="serviceBox" width="100" tablet="33" desktop="33" )
            div
                .imgBox
                    img( v-bind:src=" item.img " )
                h2 {{ item.title }}
                .string
                p( v-bind:style=" { display: 'block' } " ) {{ item.text_A }}
                p( v-bind:style=" { display: 'block' } " ) {{ item.text_B }}
</template>

<script>
export default {
    data() {
        return {
            serviceArr: [
                {
                    img     : require('../assets/img/ico-tool-30-px@3x.png')
                    ,title  : '行业解决方案'
                    ,text_A : '技术驱动商业创新'
                    ,text_B : '研发符合企业需求产品'
                }
                ,{
                    img     : require('../assets/img/ico-software-30-px@3x.png')
                    ,title  : '软件解决方案'
                    ,text_A : '多行业应用产品'
                    ,text_B : '满足不同行业的需求'
                }
                ,{
                    img     : require('../assets/img/ico-manager-30-px@3x.png')
                    ,title  : '个性化定制'
                    ,text_A : '产品经理跟踪制'
                    ,text_B : '为客户量身订制'
                }
            ]
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#Service
    @media only screen and ( min-width : 1180px )
        max-width: 1180px
        margin: 0 auto
    +moduleBoxStyle
    .serviceBox
        +flexCenter
        +textCenter
        +REM( padding, $M-padding )
        +REM( margin-bottom, $M-padding )
        +bC( $F )
        >div
            .imgBox
                @extend %dib
                +REM-W-H( 30px, 30px )
                >img
                    +imgCover( 100% )
            h2
                +REM( font-size, $F-title )
                +REM( padding-top, $M-contentMargin )
                +REM( padding-bottom, $M-contentMargin )
            .string
                @extend %dib
                width: 30%
                +REM( height, 2px )
                +REM( margin-bottom, $M-contentMargin )
                +bC( $C-theme )
            p
                +REM( font-size, $F-text )
                +REM( line-height, $F-title )
                color: $C-text
</style>
