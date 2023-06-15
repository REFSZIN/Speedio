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
              <div v-if="getUser === 'Visitante'">
                <v-card-title class="text-center">Meus Encurtados</v-card-title>
                <p>Total de visualizações: {{ totalViews }}</p>
              </div>
            </div>
            <v-list>
              <v-list-item v-for="(short, index) in shortLinks" :key="short.id">
                <v-list-item>
                  <v-list-item-title>{{ index + 1 }}. {{ short.url }}</v-list-item-title>
                  <v-list-item-subtitle>{{ short.shortUrl }}</v-list-item-subtitle>
                  <v-list-item>
                    <v-btn text small @click="editShort(short)">Editar</v-btn>
                    <v-btn text small @click="deleteShort(short)">Excluir</v-btn>
                  </v-list-item>
                </v-list-item>
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
      return this.getUser ? this.getUser.name : 'Visitante';
    },
    totalViews() {
      let views = 0;
      for (const short of this.shortLinks) {
        views += short.views;
      }
      return views;
    },
    },
    methods: {
    ...mapActions(['fetchShortLinks']),
    editShort(short) {
      // Implemente a função de editar o short
      // Exemplo de chamada de API para atualizar o link encurtado:
      // this.updateShortLink({ shortId: short.id, url: 'Nova URL' });
      console.log('Editar:', short);
    },
    deleteShort(short) {
      // Implemente a função de excluir o short
      // Exemplo de chamada de API para excluir o link encurtado:
      // this.deleteShortLink(short.id);
      console.log('Excluir:', short);
    },
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

.boder {
  margin-top: 20px;
  border-radius: 47px;
  box-shadow: 23px 23px 46px #dedede, -23px -23px 46px #e2e2e2;
  animation: slideInUp 1s;
}

.user-info {
  margin-bottom: 20px;
  text-align: center;
}
</style>