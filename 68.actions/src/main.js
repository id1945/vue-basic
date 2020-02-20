import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        actionA ({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('decrement')
                    resolve()
                }, 1000)
            })
        },
        // actionB ({ dispatch, commit }) {
        //     return dispatch('actionA').then(() => {
        //         commit('someOtherMutation')
        //     })
        // },
        // async actionC ({ commit }) {
        //     commit('gotData', await getData())
        // },
        // async actionD ({ dispatch, commit} ) {
        //     await dispatch('actionC')
        //     commit('gotOtherData', await getOtherData())
        // }
    }
});

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
