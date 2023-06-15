<template>
  <v-container class="short-component" fluid>
    <v-row justify="center">
      <lord-icon 
            src="https://cdn.lordicon.com/etqbfrgp.json"
            trigger="hover"
            colors="outline:#131432,primary:#2A9AF3,secondary:#2A9AF3,tertiary:#c4c4c4,quaternary:#ebe6ef"
            stroke="90"
            state="hover"
            style="width:250px;height:250px">
        </lord-icon>
      <v-col cols="12"
        sm="8" 
        md="6"
        lg="4">
        <v-card>
          <v-card-title class="text-center">Encurtador</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="shortenUrl" class="d-flex-center">
              <v-text-field
                v-model="url"
                label="URL"
                outlined
                required
                type="url"
                :error-messages="urlErrors"
              ></v-text-field>
              <span class="url-note">Certifique-se de colar a URL no formato correto (ex: http:// , https://, ftp:// )</span>
              <v-btn type="submit" color="blue" block>Encurtar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  export default defineComponent({
    name: 'ShortComponent',
    data() {
      return {
        url: '',
        urlErrors: [],
      };
    },
    methods: {
      ...mapActions(['postShortLink']),
      shortenUrl() {
        if (this.url === '') {
          this.urlErrors = ['URL é obrigatória'];
          return;
        }

        // Verificar o formato da URL utilizando uma expressão regular
        const urlRegex = /^(ftp|http|https|www.):\/\/[^ "]+$/;
        if (!urlRegex.test(this.url)) {
          this.urlErrors = ['URL inválida'];
          return;
        }

        // Lógica de validação adicional, se necessário

        this.postShortLink({ url: this.url })
          .then(() => {
            this.url = '';
            this.urlErrors = [];
            this.showSuccessToast('Link encurtado com sucesso!');
          })
          .catch(() => {
            this.showErrorToast('Erro ao encurtar o link. Por favor, tente novamente.');
          });
      },
      showSuccessToast(message) {
        toast.success(message, {
          position: 'top-right',
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
        });
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
.short-component {
  margin-top: 20px;
  animation: fadeInDown 1s;
}
.url-note {
  font-size: 12px;
  color: #757575;
}
</style>