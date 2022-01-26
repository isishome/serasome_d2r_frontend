import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signStatus: null,
    pageScroller: true,
    independent: false,
    d2rInfo: null,
    d2rClass: [],
    d2rImages: [],
    noAD: false,
    skills: {
      data: null,
      points: 110
    },
    isKnowledge: false
  },
  getters: {
    getSignStatus: state => {
      return state.signStatus
    },
    getPageScroller: state => {
      return state.pageScroller
    },
    getIndependent: state => {
      return state.independent
    },
    getSection: state => {
      return state.d2rInfo ? state.d2rInfo.section : []
    },
    getSecInfo: state => (sec) => {
      let result = {
        name: null,
        icon: null,
        classifies: [],
        authority: {}
      }

      if (state.d2rInfo && state.d2rInfo.section && Array.isArray(state.d2rInfo.section)) {
        const findSec = state.d2rInfo.section.find(s => s.value === sec)
        if (findSec)
          result = findSec
      }

      return result
    },
    getClassifyName: (state, getters) => (sec, classify) => {
      const findClassify = getters.getSecInfo(sec).classifies.find(c => c.value === classify)
      return findClassify ? findClassify.label.toUpperCase() : ''
    },
    getD2RInfo: state => {
      return state.d2rInfo
    },
    getAuthority: (state, getters) => (sec, action) => {
      const findSection = getters.getSecInfo(sec)
      if (findSection.name !== null)
        return findSection.authority[action] <= state.d2rInfo.grade
      else
        return false
    },
    getD2RClass: state => {
      return state.d2rClass
    },
    getD2RImages: state => {
      return state.d2rImages
    },
    getNoAD: state => {
      return state.noAD
    },
    getSkillsData: state => {
      return state.skills.data
    },
    getSkillsTree: state => (clsId, treeId) => {
      const findTree = state.skills.data[clsId].find(t => t.id === treeId)

      return findTree || null
    },
    getSkillsSkill: state => (clsId, skillId) => {
      let findSkill = null

      for (let tree of state.skills.data[clsId]) {
        for (let skill of tree.skills) {
          if (skill.id === skillId) {
            findSkill = skill
            break
          }
        }
        if (findSkill !== null)
          break
      }

      return findSkill
    },
    getSkillsPoints: state => {
      return state.skills.points
    },
    getIsKnowledge: state => {
      return state.isKnowledge
    }
  },
  mutations: {
    setSignStatus(state, payload) {
      state.signStatus = payload
    },
    setPageScroller(state, payload) {
      state.pageScroller = payload
    },
    setIndependent(state, payload) {
      state.independent = payload
    },
    setD2RInfo(state, payload) {
      state.d2rInfo = payload
    },
    setBeginner(state, payload) {
      state.d2rInfo.beginner = payload
    },
    setD2RClass(state, payload) {
      state.d2rClass = payload
    },
    setD2RImages(state, payload) {
      state.d2rImages = payload
    },
    setNoAD(state, payload) {
      state.noAD = payload
    },
    setSkillsData(state, payload) {
      state.skills.data = payload
    },
    setSkillsPoints(state, payload) {
      state.skills.points = payload
    },
    addSkillsPoints(state, payload) {
      state.skills.points = state.skills.points + payload
    },
    setIsKnowledge(state, payload) {
      state.isKnowledge = payload
    }
  },
  actions: {
    setSignStatus(context, payload) {
      context.commit('setSignStatus', payload)
    },
    setPageScroller(context, payload) {
      context.commit('setPageScroller', payload)
    },
    setIndependent(context, payload) {
      context.commit('setIndependent', payload)
    },
    setD2RInfo(context, payload) {
      context.commit('setD2RInfo', payload)
    },
    setBeginner(context, payload) {
      context.commit('setBeginner', payload)
    },
    setD2RClass(context, payload) {
      context.commit('setD2RClass', payload)
    },
    setD2RImages(context, payload) {
      context.commit('setD2RImages', payload)
    },
    setNoAD(context, payload) {
      context.commit('setNoAD', payload)
    },
    setSkillsData(context, payload) {
      context.commit('setSkillsData', payload)
    },
    setSkillsPoints(context, payload) {
      context.commit('setSkillsPoints', payload)
    },
    addSkillsPoints(context, payload) {
      context.commit('addSkillsPoints', payload)
    },
    setIsKnowledge(context, payload) {
      context.commit('setIsKnowledge', payload)
    }
  }
})