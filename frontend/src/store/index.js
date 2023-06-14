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
    ranking: [],
  },

  getters: {
    getUser: (state) => state.user,
    getShortLinks: (state) => state.shortLinks,
    getRanking: (state) => state.ranking,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_SHORT_LINKS(state, shortLinks) {
      state.shortLinks = shortLinks;
    },
    SET_RANKING(state, ranking) {
      state.ranking = ranking;
    },
  },

  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await service.StatusAPI();
        commit('SET_USER', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async fetchShortLinks({ commit }) {
      try {
        const response = await service.ListUser();
        commit('SET_SHORT_LINKS', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async fetchRanking({ commit }) {
      try {
        const response = await service.GetRank();
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async postUser({ commit }, { name, email, password }) {
      try {
        const response = await service.PostUser(name, email, password);
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async loginUser({ commit }, { email, password }) {
      try {
        const response = await service.LoginUser(email, password);
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async postShortLink({ commit }, { url, userId }) {
      try {
        const response = await service.PostShortLink(url, userId);
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async deleteShortLink({ commit }, shortId) {
      try {
        const response = await service.DelShort(shortId);
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },

    async updateShortLink({ commit }, { shortId, url }) {
      try {
        const response = await service.PutShort(shortId, url);
        commit('SET_RANKING', response.data);
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },
    
    async redirectUrl({ commit }, shortUrl) {
      try {
        const response = await service.RedirectUrl(shortUrl);
        commit('SET_RANKING', response.data );
      } catch (error) {
        // Trate o erro de acordo com suas necessidades
      }
    },
    // Adicione outras actions conforme necessário
  },
});

export default store;