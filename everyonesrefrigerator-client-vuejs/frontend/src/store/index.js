import Vue from 'vue'
import Vuex from 'vuex'
import socket from './modules/socket';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    socket,
  },
  state: {
    token: localStorage.getItem('token'),
    sb: {
      act: false,
      msg: '',
      color: 'error'
    },
    user: {
      id:'chsong',
      name:'user',
      lv:'3',
      age:'134',
      inCnt:'55'
    },
  },
  getters: {
    isAuthenticated (state){
      if(state.token){
        return true
      }else {
        return false
      }
    },
    getUser (state){
      return state.user
    }
  },
  mutations: {
    getToken (state, user) {
      state.token = localStorage.getItem('token')
      state.user = user
    },
    delToken (state) {
      localStorage.removeItem('token')
      state.token = null
      state.user = {
        name: '일반사용자',
        id: '없음',
        img: 'https://randomuser.me/api/portraits/men/85.jpg'
      }
    },
    pop (state, d) {
      state.sb.msg = d.msg
      state.sb.color = d.color
      state.sb.act = false
      if (d.act === undefined) state.sb.act = true
    },
  },
  actions: {

  },
  strict: debug,
})
