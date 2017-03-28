// '大数据平台建设'
<template lang="pug">
#BigData( v-bind:style="{ backgroundColor: '#FFF' }" )
    DetailAppBar
    DetailBanner( v-bind:DetailBanner="bannerInfo" )
    .moduleBox( v-for="item in bigDataArr" class="mediaQuery--bigDataModule" )
        div( v-if="item.imgLeft" )
            .moduleBox__img( v-bind:style="{ backgroundColor: item.backgroundColor }" )
                img( v-bind:src="item.imgUrl" )
            .moduleBox__info
                h3 {{ item.title }}
                p {{ item.infoText }}
        div( v-else )
            .moduleBox__info
                h3 {{ item.title }}
                p {{ item.infoText }}
            .moduleBox__img( v-bind:style="{ backgroundColor: item.backgroundColor }" )
                img( v-bind:src="item.imgUrl" )

</template>

<script>
import DetailAppBar         from '../components/common/DetailAppBar'
import DetailBanner         from '../components/common/DetailBanner'

import { bigDataModule }    from '../assets/script/module/BigData'  // 引入模块信息
const components = { DetailAppBar, DetailBanner }

export default {
    name: 'BigData',
    methods: {},
    data() {
        return {
            // 传递给 Banner组件( 通用 )的数据
            bannerInfo: {
                bgImg: require('../assets/img/bigData-bgbanner.jpg'),
                titleInfo: [
                    {
                        title: '千万级并发APP'
                    }, {
                        title: '亿级现金流投资平台'
                    }, {
                        title: '百亿级数据平台'
                    }
                ]
            },
            bigDataArr: bigDataModule
        }
    },
    mounted: function() {
        this.$updateViewUrlState( 'BigDate' )   // 更新 路由url状态
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

=module--extends
    +dib
    +ABS
    top: 0
    height: 100%

#BigData
    .moduleBox
        margin: 0 auto
        max-width: 1180px
        >div
            +REL
            .moduleBox__info
                +flexCenter
                +module--extends
            .moduleBox__img
                +module--extends
                +flexCenter
                >img
                    +imgCover( 80% )
        


// 媒体查询
.mediaQuery--bigDataModule
    @media only screen and ( min-width : 320px )
        >div
            +REM( height, 280px )
            .moduleBox__img
                left: 0
                width: 25%
            .moduleBox__info
                right: 0
                width: 75%
                +REM-P( $M-contentMargin*2 )
                >h3
                    +fontStyle( $F-info, $F-title*1.5, $C-title )
                    +fW( bold )
                >p
                    +fontStyle( $F-text, $F-text*2, $C-text )
                    +textJustify
    @media only screen and ( min-width : 375px )
        >div
            +REM( height, 310px )
            .moduleBox__info
                +REM-P( $M-contentMargin*2 )
                >h3
                    +fontStyle( $F-title, $F-title*2, $C-title )
                    +fW( bold )
                >p
                    +fontStyle( $F-info, $F-info*2, $C-text )
                    +textJustify
    @media only screen and ( min-width : 768px )
        .moduleBox
            .moduleBox__img, .moduleBox__info
                width: 50%
            &:nth-child( odd )
                .moduleBox__img
                    left: 0
                .moduleBox__info
                    right: 0
            &:nth-child( even )
                .moduleBox__info
                    left: 0
                .moduleBox__img
                    right: 0
            >div
                +REM( height, 270px )
    @media only screen and ( min-width : 1024px )
        >div
            +REM( height, 270px )
</style>
