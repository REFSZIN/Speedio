<template>
  <v-container class="signup" fluid>
    <v-row justify="center">
      <v-col cols="12"
sm="8"
md="6"
lg="4">
        <lord-icon
          src="https://cdn.lordicon.com/ajkxzzfb.json"
          trigger="hover"
          colors="primary:#ffc738,secondary:#4bb3fd"
          style="width:100%;height:250px"
        ></lord-icon>
        <v-card>
          <v-card-title class="text-center">Cadastre-se</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                label="Name"
                outlined
                required
                :error-messages="nameErrors"
              ></v-text-field>
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
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                outlined
                required
                :error-messages="passwordErrors"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                outlined
                required
                :error-messages="confirmPasswordErrors"
                @click:append="showConfirmPassword = !showConfirmPassword"
              ></v-text-field>
              <v-btn type="submit" color="blue" block>Registrar</v-btn>
              <span class="login-link">Já é cadastrado? <router-link to="/signin">Faça login</router-link></span>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import service from '../../plugins/service';
  import { mapActions, mapMutations } from 'vuex';
  export default defineComponent({
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
        nameErrors: [],
        emailErrors: [],
        passwordErrors: [],
        confirmPasswordErrors: [],
      };
    },
    methods: {
      ...mapActions(['postUser', 'loginUser']),
      ...mapMutations(['SET_USER']),
      async submitForm() {
        this.nameErrors = [];
        this.emailErrors = [];
        this.passwordErrors = [];
        this.confirmPasswordErrors = [];
        if (!this.name) {
          this.nameErrors.push('Name is required');
        }
        if (!this.email) {
          this.emailErrors.push('Email is required');
        } else if (!this.isValidEmail(this.email)) {
          this.emailErrors.push('Invalid email');
        }
        if (!this.password) {
          this.passwordErrors.push('Password is required');
        } else if (this.password.length < 6) {
          this.passwordErrors.push('Password must be at least 6 characters');
        }
        if (!this.confirmPassword) {
          this.confirmPasswordErrors.push('Confirm Password is required');
        } else if (this.password !== this.confirmPassword) {
          this.confirmPasswordErrors.push('Passwords do not match');
        }
        if (
          this.nameErrors.length ||
          this.emailErrors.length ||
          this.passwordErrors.length ||
          this.confirmPasswordErrors.length
        ) {
          return;
        }

        try {
          await service.PostUser(this.name, this.email, this.password);
          toast('Cadastro com sucesso!!', {
            autoClose: 2000,
          });

          const response = await service.LoginUser(this.email, this.password);
          this.SET_USER(response.data);
          this.$router.push('/');
        } catch (error) {
          toast('Não foi possível cadastrar', {
            autoClose: 2000,
          });
        }
      },
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
    },
  });
</script>

<style scoped>
.signup {
  margin-top: -20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
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