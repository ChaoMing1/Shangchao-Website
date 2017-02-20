// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue'
import App      from './App'
import MuseUI   from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
require('./assets/iconfont/material-icons.css')

Vue.config.devtools = true
Vue.config.debug = true

Vue.use( MuseUI )
/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

if ( /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ) {
    document.body.style.fontFamily="PingFang SC Regular"
} else if ( /(Android)/i.test(navigator.userAgent) ) {
    document.body.style.fontFamily="NoteSansCJKsc-Regular"
} else {
    document.body.style.fontFamily="Microsoft Yahei"
}
