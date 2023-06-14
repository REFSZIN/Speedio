<template>
  <v-container class="signin" fluid>
    <v-row justify="center">
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card>
          <v-card-title class="text-center">Sign In</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
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
              <v-btn type="submit" color="blue" block>Sign In</v-btn>
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
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
    ...mapActions(['loginUser']),
    submitForm() {
      this.loginUser({
        email: this.email,
        password: this.password,
      }).then(() => {
        // Tratar sucesso: Usuário logado com sucesso
      }).catch(() => {
        // Tratar erro: Falha ao fazer login
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
</style>