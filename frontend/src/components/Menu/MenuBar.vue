<template>
  <v-app-bar class="d-flex justify-space-between d-flex justify-content-center justify-center">
    <v-app-bar-nav-icon class="ml-sm-12" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer />
    <v-card-actions class="d-flex align-center">
      <router-link to="/" class="link">
        <img
          class="logo"
          src="https://speedio.com.br/4.1/assets/img/logo-speedio.svg"
          aspect-ratio="1"
          alt="logo"
        />
      </router-link>
    </v-card-actions>
    <v-spacer />
    <router-link class="mr-sm-12" to="/"></router-link>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :width="280"
    clipped
    app
    class="menu d-flex text-center"
    @click="drawer = !drawer"
  >
    <h2 class="d-flex titlemenu">
      <img
        class="d-flex Logomenu"
        src="https://speedio.com.br/4.1/assets/img/speedio-favicon.svg"
        alt="Logomenu"
      />
      Menu
      <v-spacer />
      <v-icon
        class="d-flex flex-row mb-6 ml-12 exit"
        @click="!drawer"
      >
        mdi-close
      </v-icon>
    </h2>
    <v-list>
      <v-list-item v-for="(item, index) in filteredMenuItens" :key="index" :to="item.rota">
        <v-icon>{{ item.icone }}</v-icon>
        <v-list-item-title>{{ item.titulo }}</v-list-item-title>
      </v-list-item>
      <v-btn v-if="this.getUser" text @click="logout"> <v-icon> mdi-logout</v-icon> Sair</v-btn>
    </v-list>
    <v-list class="">
      <v-list-item-title>Faça a sua conta na Speedio</v-list-item-title>
      <v-list-item-title>tenha todos links no bolso :)</v-list-item-title>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import './MenuBar.less';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
    ...mapGetters(['getUser']),
    filteredMenuItens() {
      if (this.getUser) {
        return this.menuItens.filter((item) => item.titulo !== 'Login' && item.titulo !== 'Cadastro');
      }
      return this.menuItens.filter((item) => item.titulo !== 'Sair');
    },
    },
    data: () => ({
      drawer: false,
      menuItens: [
        { titulo: 'Login', rota: '/signin', icone: 'mdi-login' },
        { titulo: 'Cadastro', rota: '/signup', icone: 'mdi-account-multiple-plus' },
        { titulo: 'Encurtador', rota: '/', icone: 'mdi-content-cut' },
        { titulo: 'Ranking', rota: '/rank', icone: 'mdi-poll' },
        { titulo: 'SpeedioCut', rota: '/cut', icone: 'mdi-open-in-new' },
      ],
    }),
    methods: {
      ...mapActions(['logout']),
      logout() {
        this.$store.dispatch('logout');
        this.$router.push({ name: 'Signin' });
      },
    },
  };
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0);
  }
}
.menu-enter-active {
  animation: slide-in 0.5s forwards;
}
.menu-leave-active {
  animation: slide-in 0.5s reverse forwards;
}
.menu-enter,
.menu-leave-to {
  transform: translateX(-300px);
}
</style>