<template lang="pug">
    #app
        img( src="./assets/logo.png" )
        hello
</template>

<script>
import Hello from './components/Hello'
const components = { Hello }

export default {
    name: 'app'
    ,components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import './sass/main'

#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
