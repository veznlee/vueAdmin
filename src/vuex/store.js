import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10,
    //像accessToken这种浏览器状态不能用vuex保存，因为系统页面刷新就会回到初始状态
    accessToken:'',
    testMsg: '原始文本',
    childText:"子组件原始文本"
}

// 定义所需的 mutations(mutations:变化)
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    setCount(state, value) {
        state.count = value
    },
    changeTestMsg(state, str){
        state.testMsg = str;
    },
    changeChildText(state, str){
        state.childText = str;
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})


// 如果想要vuex的数据在页面刷新时依然不会重新初始化，请查看 https://github.com/boenfu/vuex-along