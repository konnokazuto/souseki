
export const state = () => ({
    // 'hogeFromStore' という名前の状態を管理する
    loading: false
  })
  
  
  export const mutations = {
    // ここでは hogeFromStore の状態（値）を変更する処理を定義
    setLoading(state, value) {
      state.loading = value
    }
  }