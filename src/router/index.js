import Vue              from 'vue'
import Router           from 'vue-router'
import Home             from '../views/Home'            // 首页

Vue.use( Router )

export default new Router({
    routes: [
        {
            path: '/',
            name: 'app',
            components: {
                default: Home
            },
            children: [
                {
                    // 首页
                    path: '/',
                    name: 'Home',
                    components: {
                        Home
                    }
                }
            ]
        }
    ]
    // mode: 'history',
    //记录滚动条的高度
    // ,scrollBehavior ( to, from, savePosition ) {
    //     // console.log( 'to', to )
    //     if( to.hash ) {
    //         return {
    //             selector: to.hash
    //         }
    //     }
    // }
})