import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/db/idb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      builds: [],
      quickDrawer: [],
      favorites: []
  },
  mutations: {
      addToDrawer(state, build) {
          state.quickDrawer.push(build);
      },
      removeFromDrawer(state, build) {
          let index = state.quickDrawer.findIndex(x => x.id === build.id); //Find fitting element from fav list
          state.quickDrawer.splice(index, 1);
      },
      addToFavorites(state, build) {
          state.favorites.push(build);
      },
      removeFromFavorites(state, build) {
          let index = state.favorites.findIndex(x => x.id === build.id); //Find fitting element from fav list
          state.favorites.splice(index, 1);
      },
      update(state, build) {
          let index = state.favorites.findIndex(x => x.id === build.id); //Find fitting element from fav list
          state.favorites[index] = build;
      }
  },
  actions: {
      async getBuilds(context) {
        context.state.builds = [];
        let builds = await idb.getBuilds();
        builds.forEach(b => {
            context.state.builds.push(b);
        });
      },
      async saveBuild(context, build) {
          await idb.saveBuild(build);
      },
      async deleteBuild(context, build) {
          await idb.deleteBuild(build);
      },
      async addTestBuilds() {
          let testBuilds = [
              { title: "StoreTest1", description:"Ultra Mega Test Beschreibung Ja", matchup: ['T', 'Z'], author: "Test addTestBuilds", content: { earlyGame: 'Esse amet iste error delectus suscipit enim', midGame: 'omnis asperiores nihil reiciendis non necessitatibus ab aperiam cupid', lateGame: 'itate voluptate voluptatem quisquam' }, notes: { earlyGameNotes: '', midGameNotes: '', lateGameNotes: '' }  },
              { title: "StoreTest2", description:"Ultra Mega Test Beschreibung Ja", matchup: ['T', 'Z'], author: "Test addTestBuilds", content: { earlyGame: 'Esse amet iste error delectus suscipit enim', midGame: 'omnis asperiores nihil reiciendis non necessitatibus ab aperiam cupid', lateGame: 'itate voluptate voluptatem quisquam' }, notes: { earlyGameNotes: '', midGameNotes: '', lateGameNotes: '' }  },
              { title: "StoreTest3", description:"Ultra Mega Test Beschreibung Ja", matchup: ['T', 'Z'], author: "Test addTestBuilds", content: { earlyGame: 'Esse amet iste error delectus suscipit enim', midGame: 'omnis asperiores nihil reiciendis non necessitatibus ab aperiam cupid', lateGame: 'itate voluptate voluptatem quisquam' }, notes: { earlyGameNotes: '', midGameNotes: '', lateGameNotes: '' }  },
              
            ];
          
          for(const testBuild of testBuilds) {
              await idb.saveBuild(testBuild);
          }
      },
      updateLibrary(context, build) {
          context.commit('update', build);
      }
  },
  modules: {
  }
})
