<template>
  <v-container class="short-component" fluid>
    <v-row justify="center">
      <lord-icon
        src="https://cdn.lordicon.com/etqbfrgp.json"
        trigger="hover"
        colors="outline:#131432,primary:#2A9AF3,secondary:#2A9AF3,tertiary:#c4c4c4,quaternary:#ebe6ef"
        stroke="90"
        state="hover"
        style="width:250px;height:250px"
      ></lord-icon>
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
                :placeholder="placeholderShortUrl"
              ></v-text-field>
              <span class="url-note">Certifique-se de colar a URL no formato correto (ex: http://, https://, ftp://)</span>
              <v-btn type="submit" color="blue" block>Encurtar</v-btn>
            </v-form>
            <template v-if="shortUrl">
              <a class="placeholder-url" :href="`https://speedio.vercel.app/cut/${placeholderShortUrl}`">Link Gerado: https://speedio.vercel.app/short/{{ placeholderShortUrl }}</a>
              <div justify="center w-12">
              <v-icon class="copy-icon" @click="copyToClipboard(placeholderShortUrl)">mdi-content-copy</v-icon>
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  export default defineComponent({
    name: 'ShortComponent',
    data() {
      return {
        url: '',
        urlErrors: [],
        shortUrl: '',
      };
    },
    computed: {
      ...mapGetters(['getUser']),
      isUserLoggedIn() {
        return this.getUser !== null;
      },
      placeholderShortUrl() {
        return this.shortUrl || 'URL';
      },
    },
    methods: {
      ...mapActions(['postShortLink','fetchShortLinks']),
      async shortenUrl() {
        if (this.url === '') {
          this.urlErrors = ['URL é obrigatória'];
          return;
        }

        const urlRegex = /^(ftp|http|https|www.):\/\/[^ "]+$/;
        if (!urlRegex.test(this.url)) {
          this.urlErrors = ['URL inválida'];
          return;
        }

        try {
          const userId = this.isUserLoggedIn ? this.getUser.user.id : null;
          const url = this.url;
          const response = await this.postShortLink({ url, userId });
          this.url = '';
          this.urlErrors = [];
          this.shortUrl = response.shortPosted.shortUrl;
          this.showSuccessToast('Link encurtado com sucesso!');
          this.fetchShortLinks(); 
        } catch (error) {
          console.error(error);
          this.showErrorToast('Erro ao encurtar o link. Por favor, tente novamente.');
        }
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
      copyToClipboard(shortUrl) {
        navigator.clipboard.writeText(`https://speedio.vercel.app/cut/${shortUrl}`);
        this.showSuccessToast('Link copiado para a área de transferência!');
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
  .placeholder-url {
    font-size: 14px;
    color: #757575;
    margin-top: 20px !important;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
  }
  .copy-icon {
    cursor: pointer;
    margin-left: 48%;
    color: #2A9AF3;
    margin-top: 10px;
  }
</style>