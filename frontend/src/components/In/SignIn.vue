<template>
  <v-container class="signin" fluid>
    <v-row justify="center">
      <v-col cols="12" 
      sm="8" 
      md="6" 
      lg="4">
      <lord-icon
          src="https://cdn.lordicon.com/ajkxzzfb.json"
          trigger="hover"
          colors="primary:#ffc738,secondary:#4bb3fd"
          style="width:100%;height:250px">
      </lord-icon>
        <v-card>
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                required
                type="email"
                :error-messages="emailErrors"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                required
                type="password"
                :error-messages="passwordErrors"
              ></v-text-field>
              <v-btn type="submit" color="blue" block>Entrar</v-btn>
              <span class="login-link">Não é cadastrado? <router-link to="/signup">Faça sua Conta</router-link></span>
            </v-form>
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
    computed: {
    ...mapGetters(['getUser']),
    },
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
        emailErrors: [],
        passwordErrors: [],
      };
    },
    methods: {
    ...mapActions(['loginUser']),
    submitForm() {
      this.emailErrors = [];
      this.passwordErrors = [];
      if (!this.email) {
        this.emailErrors.push('Email is required');
      }
      if (!this.password) {
        this.passwordErrors.push('Password is required');
      }
      if (this.emailErrors.length || this.passwordErrors.length) {
        return;
      }

      this.loginUser({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          if (this.getUser) {
            toast.success('Login com sucesso!', {
              autoClose: 2000,
            });
            this.$router.push('/');
          } else {
            toast.error('Erro ao fazer login. Por favor, tente novamente.', {
              position: 'top-right',
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 401) {
            toast.error('Credenciais inválidas. Por favor, verifique seu email e senha.', {
              position: 'top-right',
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
            });
          } else {
            toast.error('Erro ao fazer login. Por favor, tente novamente.', {
              position: 'top-right',
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
            });
          }
        });
    },
    },
  });
</script>

<style scoped>
.signin {
  margin-top: 20px;
  animation: fadeInUp 1s;
}

.login-link {
  font-size: 14px;
  color: #757575;
  display: block;
  text-align: center;
  margin-top: 10px;
}
</style>