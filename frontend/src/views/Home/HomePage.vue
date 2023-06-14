<template class="Conteiner">
  <MenuBar/>
  <ShortComponent/>
  <MyShort/>
  <Footer/>
</template>

<script>
  import { defineComponent } from 'vue';
  import './HomePage.less'
  import MenuBar from '../../components/Menu/MenuBar.vue';
  import MyShort from '../../components/MyShort/MyShort.vue';
  import ShortComponent from '../../components/Shortly/ShortComponent.vue';
  import Footer from '../../components/Footer/FooterComponent.vue';
  export default defineComponent({
    name: 'HomePage',
    components: {
      MenuBar,
      ShortComponent,
      MyShort,
      Footer
    },
  });
</script>
