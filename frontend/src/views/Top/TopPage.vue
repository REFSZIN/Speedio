<template class="Conteiner">
  <MenuBar/>
  <Rank/>
  <Footer/>
</template>

<script>
  import { defineComponent } from 'vue';
  import './TopPage.less'
  import MenuBar from '../../components/Menu/MenuBar.vue';
  import Rank from '../../components/Rank/RankComponent.vue';
  import Footer from '../../components/Footer/FooterComponent.vue';
  export default defineComponent({
    name: 'TopPage',
    components: {
      MenuBar,
      Rank,
      Footer
    },
  });
</script>
