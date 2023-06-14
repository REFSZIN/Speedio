<template class="Conteiner">
  <MenuBar />
  <Redirect/>
  <Footer/>
</template>

<script>
  import { defineComponent } from 'vue';
  import MenuBar from '../../components/Menu/MenuBar.vue';
  import Redirect from '../../components/Redirect/RedirectComponent.vue';
  import Footer from '../../components/Footer/FooterComponent.vue';
  export default defineComponent({
    name: 'RedirectionPage',
    components: {
      MenuBar,
      Redirect,
      Footer
    },
    data() {
      return {
      };
    },
    methods: {
    },
  });
</script>