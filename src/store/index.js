import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    COLOR_THEME: 'dark',
    SHOW_POPUP: false,
    CURRENT_POPUP: '',
    DARK_THEME: false,
    START_ANIMATION_FLAG: true,
    CHANGE_COLOR_FLAG: false,
  },
  getters: {
    currentTheme: state => {
      return state.COLOR_THEME;
    },
    popupStatus: state => {
      return state.SHOW_POPUP;
    },
    currentPopup: state => {
      return state.CURRENT_POPUP;
    },
    darkTheme: state => {
      return state.DARK_THEME;
    },
    animationFlag: state => {
      return state.START_ANIMATION_FLAG
    },
    colorFlag: state => {
      return state.CHANGE_COLOR_FLAG
    }
  },
  mutations: {
    changeColorTheme(state, theme){
      state.COLOR_THEME = theme
    },
    openPopup(state){
      state.SHOW_POPUP = true
    },
    closePopup(state){
      state.SHOW_POPUP = false
    },
    setCurrentPopup(state, popupName){
      state.CURRENT_POPUP = popupName
    },
    changeDarkTheme(state){
      if (state.START_ANIMATION_FLAG) {
        state.DARK_THEME = !state.DARK_THEME
      }
    },
    changeAnimationFlag(state, status){
      state.START_ANIMATION_FLAG = status
    },
    changeColorFlag(state, status){
      state.CHANGE_COLOR_FLAG = status
    }
  },
  actions: {
  },
  modules: {
  }
})
