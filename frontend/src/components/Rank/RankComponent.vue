<template>
  <v-container class="rank" fluid>
    <v-row justify="center">
      <lord-icon
              src="https://cdn.lordicon.com/ihyatngg.json"
              trigger="hover"
              colors="primary:#4be1ec,secondary:#cb5eee"
              style="width:250px;height:250px">
          </lord-icon>
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card>
          <v-card-title class="text-center">Rank</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(item, index) in ranking" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ index + 1 }}. {{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.views }} views</v-list-item-subtitle>
                </v-list-item-content>
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
    ...mapGetters(['getRanking']),
    ranking() {
      return this.getRanking;
    },
    },
    methods: {
    ...mapActions(['fetchRanking']),
    },
    created() {
      this.fetchRanking();
    },
  });
</script>

<style scoped>
.rank {
  margin-top: 20px;
  width: 200%;
  animation: flipInX 1s;
}
</style>