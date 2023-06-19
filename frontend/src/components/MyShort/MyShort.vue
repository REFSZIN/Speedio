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
              <p v-if="getUser !== null">Logado como {{ getUser.user.email }} 👨‍💻</p>
              <p v-else>Logado como Visitante 👤</p>
              <div v-if="getUser !== null">
                <v-card-title class="text-center">Meus Encurtados</v-card-title>
                <p>Total de visualizações: {{ totalViews }}</p>
                <v-list>
                  <v-list-item v-for="(short, index) in this.getShortLinks" :key="short.id">
                    <v-list-item>
                      <v-list-item-title>{{ index + 1 }}° {{ short.url }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <a :href="getShortUrl(short.shortUrl)" target="_blank">{{ short.shortUrl }}</a>
                        <v-icon class="copy-icon" @click="copyToClipboard(short.shortUrl)">mdi-content-copy</v-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>{{ short.views }} views</v-list-item-subtitle>
                      <v-list-item>
                        <v-btn class="button"
                        ext 
                        small 
                        @click="editShort(short)">Editar</v-btn>
                        <v-btn class="button" 
                        text 
                        small 
                        @click="deleteShort(short)">Excluir</v-btn>
                      </v-list-item>
                    </v-list-item>
                    <hr>
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import { toast } from 'vue3-toastify';
  import service from '../../plugins/service';
  import 'vue3-toastify/dist/index.css';

  export default defineComponent({
    name: 'MyShort',
    computed: {
      ...mapGetters(['getShortLinks', 'getUser']),
      totalViews() {
        let views = 0;
        for (const short of this.getShortLinks) {
          views += short.views;
        }
        return views;
      },
    },
    methods: {
      ...mapActions(['fetchShortLinks', 'deleteShortLink', 'updateShortLink']),
      async editShort(short) {
      try {
        const newUrl = prompt('Digite a nova URL:', short.url);
        if (newUrl !== null) {
          const url = newUrl
          let shortId = short.id
          await service.PutShort(url, shortId);
          this.showSuccessToast('Link atualizado com sucesso!');
          this.fetchShortLinks(); 
        }
      } catch (error) {
        console.error(error);
        this.showErrorToast('Erro ao atualizar o link. Por favor, tente novamente.');
      }
    },

    async deleteShort(short) {
      try {
        const confirmed = confirm('Deseja realmente excluir este link?');
        if (confirmed) {
          await service.DelShort(short.id);
          this.showSuccessToast('Link excluído com sucesso!');
          this.fetchShortLinks();
        }
      } catch (error) {
        console.error(error);
        this.showErrorToast('Erro ao excluir o link. Por favor, tente novamente.');
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
      getShortUrl(shortUrl) {
        return `https://speedio.vercel.app/cut/${shortUrl}`;
      },
      copyToClipboard(shortUrl) {
        navigator.clipboard.writeText(`https://speedio.vercel.app/cut/${shortUrl}`);
        this.showSuccessToast('Link copiado para a área de transferência!');
      },
    },
    created() {
      this.fetchShortLinks();
    },
  });
</script>

<style scoped>
  .my-short {
    margin-bottom: 100px;
  }
  .boder {
    margin-top: 20px;
    border-radius: 47px;
    box-shadow: 23px 23px 46px #a6cded, -23px -23px 46px #9bcaf7;
    animation: slideInUp 1s;
  }

  .user-info {
    margin-bottom: 20px;
    text-align: center;
  }
  .button {
    --color: #2A9AF3;
    margin-left: 16px;
    background-color: transparent;
    border-radius: .3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: var(--color);
    z-index: 1;
  }

  .button::before,
  .button::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: var(--color);
    transition: 1s ease;
  }

  .button::before {
    top: -1em;
    left: -1em;
  }

  .button::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  .button:hover::before,
  .button:hover::after {
    height: 410px;
    width: 410px;
  }

  .button:hover {
    color: rgb(10, 25, 30);
  }

  .button:active {
    filter: brightness(.8);
  }
  .copy-icon {
    cursor: pointer;
    margin-left: 8px;
    color: #2A9AF3;
  }
  
</style>