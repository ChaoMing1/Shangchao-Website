<template lang="pug">
#Works
    mu-row( gutter )
        mu-col( v-for="item in worksArr" class="works--imgbox" width="100" tablet="25" desktop="25" )
            img( v-bind:src=" item.img " )
</template>

<script>
export default {
    data() {
        return {
            worksArr: [
                {
                    img: require('../assets/img/works_1.png')
                }
                ,{
                    img: require('../assets/img/works_2.png')
                }
                ,{
                    img: require('../assets/img/works_3.png')
                }
                ,{
                    img: require('../assets/img/works_4.png')
                }
                ,{
                    img: require('../assets/img/works_5.png')
                }
                ,{
                    img: require('../assets/img/works_6.png')
                }
                ,{
                    img: require('../assets/img/works_7.png')
                }
                ,{
                    img: require('../assets/img/works_8.png')
                }
            ]
        }
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

#Works
    +global-maxWidth
    .works--imgbox
        >img
            +block
            +imgCover( 100% )
        @media only screen and ( min-width : 768px )
            width: 25%
</style>
