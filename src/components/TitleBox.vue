<template lang="pug">
.title
    div
        h2( v-bind:style = " { color: title_info.title[0].color,display: 'inline-block' } " ) {{ title_info.title[0].text }}
        h2( v-bind:style = " { color: title_info.title[1].color,display: 'inline-block' } " ) {{ title_info.title[1].text }}
        p( v-bind:style = " { color: title_info.subTitle.color } " ) {{ title_info.subTitle.text }}
        .modifiedLine
            .string( v-bind:style = " { left: '0', backgroundColor: title_info.icon.color } " )
            i( class="mu-icon material-icons" v-bind:style = " { color: title_info.icon.color } " ) {{ title_info.icon.class }}
            .string( v-bind:style = " { right: '0', backgroundColor: title_info.icon.color } " )
</template>

<script>
export default {
    props: ['title_info']
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/main'

.title
    +flexCenter
    +textCenter
    +REM( padding-top, $M-padding )
    +REM( padding-bottom, $M-padding )
    >div
        +W100
        h2
            +REM( font-size, $F-title )
        p
            +REM( font-size, $F-text )
            +REM( margin-top, $M-contentMargin )
            +REM( margin-bottom, $M-contentMargin )
        .modifiedLine
            +REL
            width: 100%
            .string
                display: block
                +ABS
                top: 46%
                z-index: 1
                width: 40%
                +REM( height, 1px )
                border-top: 1px solid $C-text
                +REM( border-bottom-width, 1px )
</style>
