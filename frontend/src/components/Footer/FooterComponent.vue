<template>
  <footer class="footer">
    <div class="container">
      <p class="msg">©{{ currentYear }} SpeedioUrl. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterComponent',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #888;
  z-index: 9999;
  animation: fadeInUp 1s;
}
.msg{
  animation: backInUp 1s;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Estilos adicionais para ajustar o layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>