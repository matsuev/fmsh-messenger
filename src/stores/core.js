import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', {
   state: () => ({
      _coreState: 'ready',
      _mainView: 'home'
   }),

   getters: {
      appState: (state) => state._coreState,
      appReady: (state) => state._coreState == 'ready',
      mainView: (state) => state._mainView
   },

   actions: {
      SetState(v) {
         this.coreState = v
      },

      SetMainView(v) {
         this._mainView = v
      }
   }
})
