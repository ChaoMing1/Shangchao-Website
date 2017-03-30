import Vue      from 'vue';
import App      from './App';
import store    from './store';
import router   from './router';
import MuseUI   from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
require('./assets/iconfont/material-icons.css');

Vue.config.productionTip    = false;
Vue.config.devtools         = true;
Vue.config.debug            = true;

// 挂载全局方法 - 更新页面Url状态
Vue.prototype.$updateViewUrlState = function( toUrl ) {
    this.$store.dispatch({
        type: 'updateViewUrlState',
        viewUrlState: toUrl
    });
};
// 挂载全局方法 - '详情页'滚动到顶部( 初始化事件 )
Vue.prototype.$toDetailTop = function() {
    let detailBannerObj = document.querySelector("#DetailBanner");
    document.body.scrollTop = detailBannerObj.offsetTop;
};

Vue.use( MuseUI );

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
