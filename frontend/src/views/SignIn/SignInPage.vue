<template class="Conteiner">
  <MenuBar/>
  <SignIn/>
  <Footer/>
</template>

<script>
  import { defineComponent } from 'vue';
  import './SignInPage.less'
  import MenuBar from '../../components/Menu/MenuBar.vue';
  import SignIn from '../../components/In/SignIn.vue';
  import Footer from '../../components/Footer/FooterComponent.vue';
  export default defineComponent({
    name: 'SignInPage',
    components: {
      MenuBar,
      SignIn,
      Footer
    },
  });
</script>
