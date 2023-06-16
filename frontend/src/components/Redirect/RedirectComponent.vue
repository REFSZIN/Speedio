<template>
  <v-app>
    <v-container>
      <v-card class="redirection-content">
        <v-card-title>
          <h1>Redirecionador</h1>
          <v-img src="@/assets/images/rocket.png" alt="Rocket" class="rocket" />
        </v-card-title>
        <v-card-text v-if="!paramsExist">
          <p>Código não foi passado via URL.</p>
          <p>Por favor, entre com o Código manualmente:</p>
          <v-text-field v-model="manualParams" label="Código de Redirecionamento"></v-text-field>
          <v-btn @click="redirect" color="blue" :disabled="isLoading">
            <template v-if="isLoading">
              <v-progress-circular indeterminate color="white"></v-progress-circular>
            </template>
            <template v-else>
              Redirecionar
            </template>
          </v-btn>
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
  import axios from '../../plugins/axios';
  import service from '../../plugins/service';

  export default defineComponent({
    name: 'RedirectComponent',
    data() {
      return {
        params: null,
        manualParams: '',
        paramsExist: false,
        isLoading: false,
      };
    },
    created() {
      if (this.$route.params?.shortUrl) {
        this.paramsExist = true;
        this.params = {
          url: '',
        };
        axios.get(`/short/${this.$route.params.shortUrl}`)
          .then(response => {
            this.isLoading = true; 
            this.params.url = response.data.productPosted.url;
            setTimeout(() => {
              window.location.href = this.params.url;
            }, 3000);
          })
          .catch(error => {
            this.showErrorToast('Error obtaining URL');
            console.error(error);
          });
      }
    },
    methods: {
      ...mapActions(['redirectUrl']),
      async redirect() {
        const shortUrl = this.manualParams.trim();
        if (shortUrl) {
          if (shortUrl.length === 8) {
            this.isLoading = true; 
            try {
              this.isLoading = true; 
              const response = await service.RedirectUrl(shortUrl);
              console.log(response.data.productPosted.url);
              const redirectData = response.data.productPosted.url;
              setTimeout(() => {
                window.location.href = redirectData;
              }, 3000);
            } catch (error) {
              this.showErrorToast('Error redirecting');
              console.error(error);
            } 
          } else {
            this.showErrorToast('The redirection code must be at least 8 characters long');
          }
        } else {
          this.showErrorToast('The redirection code is required');
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
.rocket {
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