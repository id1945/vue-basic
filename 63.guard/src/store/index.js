import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store(
    {
        state: {
            roles: [],
            authenticated: false
        },
        mutations: {
            setAuthentication(state, status) {
                state.authenticated = status;
            },
            setRoles(state, roles) {
                state.roles = roles;
            }
        }
    }
);

export default store;