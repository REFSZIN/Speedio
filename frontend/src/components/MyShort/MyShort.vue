<template>
  <v-container class="my-short" fluid>
    <v-row justify="center">
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card class="boder">
          <v-card-text>
            <div class="user-info">
              <p>Bem-vindo, {{ userName }}!</p>
              <v-card-title class="text-center">Meus Encurtados</v-card-title>
              <p>Total de visualizações: {{ totalViews }}</p>
            </div>
            <v-list>
              <v-list-item v-for="(short, index) in shortLinks" :key="short.id">
                <v-list-item-content>
                  <v-list-item-title>{{ index + 1 }}. {{ short.url }}</v-list-item-title>
                  <v-list-item-subtitle>{{ short.shortUrl }}</v-list-item-subtitle>
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
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';

  export default defineComponent({
    name: 'MyShort',
    computed: {
    ...mapGetters(['getShortLinks', 'getUser']),
    shortLinks() {
      return this.getShortLinks;
    },
    userName() {
      return this.getUser ? this.getUser.name : '';
    },
    totalViews() {
      return 0;
    },
    },
    methods: {
    ...mapActions(['fetchShortLinks']),
    },
    created() {
      this.fetchShortLinks();
    },
  });
</script>

<style scoped>
.my-short {
  margin-top: 20px;
}
.boder{
  margin-top: 20px;
  border-radius: 47px;
  box-shadow:  23px 23px 46px #dedede,
              -23px -23px 46px #e2e2e2;
  animation: slideInUp 1s;
}

.user-info {
  margin-bottom: 20px;
  text-align: center;
}
</style>