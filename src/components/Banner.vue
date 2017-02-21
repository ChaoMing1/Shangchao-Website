<template lang="pug">
    .banner
        .banner--title
            h2.whileColor 青岛最专业的
            h2.themeColor 互联网服务公司
            p.whileColor 上朝信息科技 · 多行业应用产品
            p.whileColor 满足不同行业需求 · IT解决方案与服务提供商
            mu-flat-button( label="联系我们" class="demo-flat-button" )
</template>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

// 图片在背景图中
.banner
    position: relative
    width: 100%
    +REM( height, 300px )
    +bC( $C-L-theme )
    .banner--title
        position: absolute
        left: 10%
        bottom: 10%
        h2
            display: inline-block
            +REM( font-size, $F-title )
        p
            +REM( font-size, $F-text )
            +REM( line-height, $F-sub-bigTitle )
        .demo-flat-button
            margin: $M-contentMargin 0
            +REM( height, 40px )
            border: 1px solid $F
            +radius(50%)
            color: $F
// 公用样式
.whileColor
    color: $F
.themeColor
    color: $C-theme
</style>
