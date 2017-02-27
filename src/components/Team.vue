<template lang="pug">
#Team
    mu-row( gutter )
        // left
        mu-col( class="teamBox teamLeft" width="100" tablet="50" desktop="50" )
            img( v-bind:src="teamLeft.img" )
            .teamBox--text
                .teamBox--iconImg
                    img( v-bind:src="iconImg" class="teamBox--iconImg" )
                p {{ teamLeft.text }}
        // right
        mu-col( class="teamBox teamRight" width="100" tablet="50" desktop="50" )
            img( v-bind:src="teamRight.img_A" )
            .teamBox--text
                .teamBox--iconImg
                    img( v-bind:src="iconImg" class="teamBox--iconImg" )
                p {{ teamRight.text }}
            img( v-bind:src="teamRight.img_B" )
</template>

<script>
export default {
    data() {
        return {
            teamLeft: {
                img         : require('../assets/img/group-14.png')
                ,text       : `我们深刻理解国际前沿设计趋势、对流程的互联网站点和软件应用有深刻认识、
                                在开发领域有着雄厚技术与实战经验。”`
            }
            ,teamRight: {
                img_A       : require('../assets/img/group-17.png')
                ,img_B      : require('../assets/img/group-16.png')
                ,text       : `我们深刻理解国际前沿设计趋势、对流程的互联网站点和软件应用有深刻认识、
                                在开发领域有着雄厚技术与实战经验。”`
            }
            ,iconImg: require('../assets/img/ico-quotation@3x.png')
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

// 当屏幕大于1180px时, 对内容设置的混合( 单独属性, 在下面单独设置 )
=team-PC-style
    +dib
    bottom: 0
    +w-h( 50%, 50% )

#Team
    +global-maxWidth
    // 通用样式
    .teamBox
        @media only screen and ( min-width : 768px )
            width: 50% !important
        img
            +block
        .teamBox--text
            +REM( padding, $M-padding )
            .teamBox--iconImg
                +REM-W-H( $F-title, $F-title )
                +REM( margin-bottom, $M-contentMargin )
                >img
                    +imgCover( 118% )
            >p
                +REM( font-size, $F-text )
                +REM( line-height, $F-title )
                color: $F
    // 独立样式
    .teamLeft
        >img
            +imgCover( 100% )
        .teamBox--text
            +bC( $C-sub-theme )
        @media only screen and ( min-width : 768px )
            +REL
            width: 50%
            height: 600px
            >img
                height: 100%
                object-fit: cover
            .teamBox--text
                +ABS
                +team-PC-style
                right: 0
                height: 55%
        @media only screen and ( min-width : 1180px )
            +REL
            width: 50%
            height: 600px
            >img
                height: 100%
                object-fit: cover
            .teamBox--text
                +ABS
                +team-PC-style
                right: 0
    .teamRight
        >img
            +imgCover( 100% )
        .teamBox--text
            +bC( $C-L-sub-theme )
        @media only screen and ( min-width : 768px )
            +REL
            width: 50%
            height: 600px
            >.teamBox--text
                +ABS
                top: 0
                left: 0
                height: 45%
                +REM-padding-TB( $M-contentMargin*2 )
            >img
                +imgCover( 50% )
                &:first-child
                    +dib
                    left: 0
                    bottom: 0
                    +w-h( 100%, 66% )
                    +mT( 52.9% )
                &:last-child
                    +ABS
                    top: 45%
                    +w-h( 69%, 55% )
                    left: 50%
        @media only screen and ( min-width : 1024px )
            >img
                &:first-child
                    +team-PC-style
                    left: 0
                    +mT( 49.2% )
                    height: 58%
                &:last-child
                    +team-PC-style
                    right: 0
                    +mT( 0 )
                    height: 55%
        @media only screen and ( min-width : 1180px )
            +REL
            width: 50%
            height: 600px
            >.teamBox--text
                +ABS
                top: 0
                left: 0
                height: 50%
                +REM-padding-TB( $M-contentMargin*2 )
            >img
                &:first-child
                    +team-PC-style
                    left: 0
                    +mT( 50.9% )
                &:last-child
                    +team-PC-style
                    right: 0
                    +mT( 50.9% )
        @media only screen and ( min-width : 1440px )
            >img
                &:first-child
                    +team-PC-style
                    left: 0
                    +mT( 50.9% )
                &:last-child
                    +team-PC-style
                    right: 0
                    +mT( 5.2% )
                    height: 50%
        @media only screen and ( min-width : 1920px )
            >img
                &:last-child
                    +team-PC-style
                    right: 0
                    +mT( 5.2% )
</style>
