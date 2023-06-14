<template >
  <v-app>
    <v-container>
      <v-card class="redirection-content">
        <v-card-title>
          <h1>Redirecionador</h1>
        </v-card-title>
        <v-card-text v-if="!paramsExist">
          <p>Codigo não foi passado via URL.</p>
          <p>Por favor entre com o Codigo manualmente:</p>
          <v-text-field v-model="manualParams" label="Codigo de Redirecionamento"></v-text-field>
          <v-btn @click="redirect" color="blue">Redirect</v-btn>
        </v-card-text>
        <v-card-text v-else>
          <p>Redirecionando para: {{ params }}</p>
          <p>Aguarde...</p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RedirectComponent',
    data() {
      return {
        params: null,
        manualParams: '',
        paramsExist: false,
      };
    },
    methods: {
      async redirect() {
        // Redirecionar para o link recebido
        const shortUrl = this.manualParams.trim();
        if (shortUrl) {
          try {
            window.location.href = shortUrl;
          } catch (error) {
          // Tratar erro de redirecionamento
          }
        }
      },
    },
  });
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
}

.redirection-content {
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  animation: fadeInDown 1s;
}
</style>