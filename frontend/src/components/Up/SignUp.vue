<template>
  <v-container class="signup" fluid>
    <v-row justify="center">
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card>
          <v-card-title class="text-center">Sign Up</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                label="Name"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                required
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                required
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                outlined
                required
                type="password"
              ></v-text-field>
              <v-btn type="submit" color="blue" block>Sign Up</v-btn>
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

  export default defineComponent({
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
    ...mapActions(['postUser']),
    submitForm() {
      if (this.password !== this.confirmPassword) {
        // Tratar erro: Senha e Confirmação de Senha não coincidem
        return;
      }
      
      this.postUser({
        name: this.name,
        email: this.email,
        password: this.password,
      }).then(() => {
        // Tratar sucesso: Usuário cadastrado com sucesso
      }).catch(() => {
        // Tratar erro: Falha ao cadastrar o usuário
      });
    },
    },
  });
</script>

<style scoped>
.signup {
  margin-top: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  animation: fadeInUp 1s;
}
</style>