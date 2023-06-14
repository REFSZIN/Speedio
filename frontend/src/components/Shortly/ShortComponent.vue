<template>
  <v-container class="short-component" fluid>
    <v-row justify="center">
      <v-col cols="12"
        sm="8"
        md="6"
        lg="4">
        <v-card>
          <v-card-title class="text-center">Encurtador</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="shortenUrl">
              <v-text-field
                v-model="url"
                label="URL"
                outlined
                required
                type="url"
              ></v-text-field>
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

  export default defineComponent({
    name: 'ShortComponent',
    data() {
      return {
        url: '',
      };
    },
    methods: {
    ...mapActions(['postShortLink']),
    shortenUrl() {
      this.postShortLink({ url: this.url });
      this.url = '';
    },
    },
  });
</script>

<style scoped>
.short-component {
  margin-top: 20px;
  animation: fadeInDown 1s;
}
</style>