<template>
  <v-app>
    <v-container>
      <v-card class="redirection-content">
        <v-card-title>
          <h1>Redirecionador</h1>
          <v-img src="@/assets/images/rocket.png" alt="Rocket" class="rocket"/>
        </v-card-title>
        <v-card-text v-if="!paramsExist">
          <p>Código não foi passado via URL.</p>
          <p>Por favor, entre com o Código manualmente:</p>
          <v-text-field v-model="manualParams" label="Código de Redirecionamento"></v-text-field>
          <v-btn @click="redirect" color="blue">Redirecionar</v-btn>
        </v-card-text>
        <v-card-text v-else>
          <p>Redirecionando para: {{ params.url }}</p>
          <p>Aguarde...</p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

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
      ...mapActions(['redirectUrl']),

      async redirect() {
        const shortUrl = this.manualParams.trim();
        if (shortUrl) {
          if (shortUrl.length === 8) {
            try {
              await this.redirectUrl(shortUrl);
              const redirectData = this.$store.getters.getRanking;
              if (redirectData && redirectData.url) {
                window.location.href = redirectData.url;
              } else {
                this.showErrorToast('URL não encontrada');
              }
            } catch (error) {
              this.showErrorToast('Erro ao redirecionar');
              console.error(error);
            }
          } else {
            this.showErrorToast('O código de redirecionamento deve ter no mínimo 8 caracteres');
          }
        } else {
          this.showErrorToast('O código de redirecionamento é obrigatório');
        }
      },

      showErrorToast(message) {
        toast.error(message, {
          position: 'top-right',
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
        });
      },
    },
  });
</script>

<style scoped>

.rocket{
  height: 90px;
}
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