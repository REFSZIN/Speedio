import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import service from '../plugins/service';

const store = createStore({
  plugins: [
    createPersistedState({
      storage: localStorage,
    }),
  ],

  state: {
    user: null,
    shortLinks: [],
    shortRedirect: {},
    ranking: [],
    API: '',
  },

  getters: {
    getUser: (state) => state.user,
    getShortLinks: (state) => state.shortLinks,
    getRanking: (state) => state.ranking,
    getRedirect: (state) => state.shortRedirect,
    getStatusAPI: (state) => state.Ap
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_STATUS(state, Ap) {
      state.Ap = Ap;
    },
    SET_REDIRECT(state, shortRedirect) {
      state.shortRedirect = shortRedirect;
    },
    SET_SHORT_LINKS(state, shortLinks) {
      state.shortLinks = shortLinks;
    },
    SET_RANKING(state, ranking) {
      state.ranking = ranking;
    },
  },

  actions: {

    async fetchStatus({ commit }) {
      try {
        const response = await service.StatusAPI();
        commit('SET_STATUS', response.data);
      } catch (error) {
        console.log(error.message);
      }
    },

    async fetchShortLinks({ commit }) {
      try {
        const response = await service.ListUser();
        commit('SET_SHORT_LINKS', response.data.myshortens);
      } catch (error) {
        console.log(error.message);
      }
    },

    async fetchRanking({ commit }) {
      try {
        const response = await service.GetRank();
        commit('SET_RANKING', response.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async postUser( name, email, password ) {
      try {
        const response = await service.PostUser(name, email, password);
        localStorage.setItem('vuex', JSON.stringify(response.data)); 
      } catch (error) {
        console.log(error.message);
      }
    },
    async loginUser({ commit }, { email, password }) {
      try {
        const response = await service.LoginUser(email, password);
        commit('SET_USER', response.data);
      } catch (error) {
        console.log(error.message);
      }
    },

    async postShortLink( url, userId ) {
      try {
        const response = await service.PostShortLink(userId);
        return response.data;
      } catch (error) { 
        console.log(error.message);
        throw error; 
      }
    },

    async deleteShortLink(shortId) {
      console.log('vuex', { shortId });
      try {
        await service.DelShort({shortId});
      } catch (error) {
        console.log(error.message);
      }
    },

    async updateShortLink({ shortId, url }) {
      console.log('vuex', shortId, url);
      try {
        await service.PutShort(shortId, url);
      } catch (error) {
        console.log(error.message);
      }
    },
    
    async redirectUrl({ commit }, shortUrl) {
      try {
        const response = await service.RedirectUrl(shortUrl);
        commit('SET_REDIRECT', response.data );
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    logout({ commit }) {
      try {
        commit('SET_USER', null);
        localStorage.removeItem('vuex');
      } catch (error) {
        console.log(error.message);
      }
    }
  },
});

export default store;