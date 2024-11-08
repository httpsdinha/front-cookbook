<template>
  <div class="container">
    <LeftComponent class="left"/>
    <CadastroComponent class="cadastro"/>
  </div>
</template>

<script>
import { LeftComponent, CadastroComponent } from '@/features/cadastro/services/CadastroService.js';

export default {
  name: 'CadastroPage',
  components: {
    CadastroComponent,
    LeftComponent
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.cadastro {
    width: 32.6875rem;
    height: 31.25rem;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

@media (min-width: 1600px) {
  .cadastro {
    width: 45rem;
    height: auto;
  }
}
</style>