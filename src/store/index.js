import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        notification
    },
    state: {
        countries: [
            'United States',
            'Canada',
            'México',
            'Brazil',
            'Japan',
            'England',
            'French',
            'Russia',
            'China'
        ]
    }
})