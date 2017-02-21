<template lang="pug">
#app
    AppBar
    Banner
    MapView
    FooterBox
</template>

<script>
import AppBar       from './components/AppBar'
import Banner       from './components/Banner'
import MapView      from './components/MapView'
import FooterBox    from './components/FooterBox'
const components = { AppBar, Banner, MapView, FooterBox }

export default {
    name: 'app'
    ,components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'
@import './sass/vendors/_MuseUI.sass'

#app
    +bC( $C-base )
</style>
