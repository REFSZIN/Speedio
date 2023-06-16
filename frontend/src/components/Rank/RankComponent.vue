<template>
  <v-container fluid>
    <v-row justify="center">
      <lord-icon
        src="https://cdn.lordicon.com/snnvmbic.json"
        trigger="hover"
        colors="outline:#121331,primary:#ffc738,secondary:#ebe6ef"
        style="width:30%;height:250px">
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/snnvmbic.json"
        trigger="hover"
        colors="outline:#121331,primary:#ffc738,secondary:#ebe6ef"
        style="width:30%;height:250px">
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/snnvmbic.json"
        trigger="hover"
        colors="outline:#121331,primary:#ffc738,secondary:#ebe6ef"
        style="width:30%;height:250px">
      </lord-icon>
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card class="m">
          <v-card-title class="text-center">TOP 100 ENCURTADOS</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(item, index) in ranking.ranking" :key="item.id">
                <v-list-item>
                  <v-list-item-title>POSIÇÃO {{ index + 1 }}°</v-list-item-title>
                  <v-list-item-subtitle>URL ENCURTADA:
                    <a :href="getShortUrl(item.shortUrl)" target="_blank">{{ item.shortUrl }}</a>
                  </v-list-item-subtitle>
                  <v-list-item-title>URL: {{ item.url }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.views }} views</v-list-item-subtitle>
                </v-list-item>
                <hr>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import lottie from 'lottie-web';
  import { defineElement } from 'lord-icon-element';
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  defineElement(lottie.loadAnimation);

  export default defineComponent({
    name: 'RankComponent',
    computed: {
    ...mapGetters(['getUser', 'getRanking']),
    ranking() {
      if (this.getUser !== null) {
        return this.getRanking;
      } else {
        const ranking = this.getRanking;
        return {
          ranking: ranking.ranking,
        };
      }
    },
    },
    methods: {
    ...mapActions(['fetchRanking']),
    getShortUrl(shortUrl) {
      return `http://localhost:8080/cut/${shortUrl}`;
    },
    cleanLocalStorage() {
      if (this.getUser === null) {
        localStorage.removeItem('vuex');
      }
    },
    },
    created() {
      this.fetchRanking();
    },
    beforeUnmount() {
      this.cleanLocalStorage();
    },
  });
</script>

<style scoped>
.rank {
  margin-top: 20px;
  width: 100%;
  height: 120vh;
  animation: fadeInUp 2s;
}
.m {
  margin-bottom: 120px !important;
}
</style>