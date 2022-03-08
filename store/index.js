export const state = () => ({
  user: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  }
}