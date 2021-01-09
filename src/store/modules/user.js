import UserService from '@/services/UserService.js'

export const namespaced = true

export const state = {
    users: [],
    usersTotal: 0,
    user: {},
    perPage: 5
}
export const mutations = {
    ADD_USER(state, user) {
        state.users.push(user)
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USERS_TOTAL(state, usersTotal) {
        state.usersTotal = usersTotal
    },
    SET_USER(state, user) {
        state.user = user
    }
}
export const actions = {
    createUser({ commit, dispatch }, user) {
        return UserService.postUser(user)
            .then(() => {
                commit('ADD_USER', user)
                const notification = {
                    type: 'success',
                    message: 'Your user has been created!'
                }
                dispatch('notification/add', notification, { root: true })
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating your user: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
                throw error
            })
    },
    fetchUsers({ commit, dispatch, state }, { page }) {
        return UserService.getUsers(state.perPage, page)
            .then(response => {
                commit('SET_USERS_TOTAL', parseInt(response.headers['x-total-count']))
                commit('SET_USERS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching users: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
            })
    },
    fetchAllUsers() {
        return UserService.getAllUsers()
            .then(response => {
                commit('SET_USERS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching users: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
            })
    },
    fetchUser({ commit, getters, state }, id) {
        if (id == state.user.id) {
            return state.user
        }
        var user = getters.getUserById(id)

        if (user) {
            commit('SET_USER', user)
            return user
        } else {
            return UserService.getUser(id).then(response => {
                commit('SET_USER', response.data)
                return response.data
            })
        }
    }
}

export const getters = {
    getUserById: state => id => {
        return state.users.find(user => user.id === id)
    },
    getUserByuserName: state => userName => {
        return state.users.find(user => user.userName === userName)
    }
}