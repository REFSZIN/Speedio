<template class="Conteiner">
  <MenuBar/>
  <SignUp/>
  <Footer/>
</template>

<script>
  import { defineComponent } from 'vue';
  import './SignUpPage.less'
  import MenuBar from '../../components/Menu/MenuBar.vue';
  import SignUp from '../../components/Up/SignUp.vue';
  import Footer from '../../components/Footer/FooterComponent.vue';
  export default defineComponent({
    name: 'SignUpPage',
    components: {
      MenuBar,
      SignUp,
      Footer
    },
  });
</script>
