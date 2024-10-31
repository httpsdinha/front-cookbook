<template>
  <main class="initial-main-container">
    <section class="initial-left-container">
      <div class="initial-text">
        <h1 class="initial-title">CookBook</h1>
        <h2 class="initial-subtitle">Cook que é bom nada...</h2>
      </div>
    </section>
    <section class="initial-right-container">
      <router-link to="/home">
        <button class="initial-next" @click="goToPage('/home')">
          Avançar
        </button>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "TelaInicial",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
/* Geral */
body {
  background-color: white;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Jost';
}

.initial-main-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Lado Esquerdo */
.initial-left-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(267deg, #A12A09 0%, #940D0D 100%);
  box-shadow: 15px 4px 19.8px rgba(0, 0, 0, 0.50);
}

.initial-text {
  color: white;
  word-wrap: break-word;
  font-family: Jost;
  display: flex;
  margin-left: 5%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.initial-title {
  font-size: 96px;
  font-weight: 400;
  margin-bottom: 0px;
}

.initial-subtitle {
  font-family: 'Josefin Slab';
  font-style: italic;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0px;
  align-self: flex-end;
}

/* Lado Direito */
.initial-right-container {
  background-image: url('../assets/wallpaper.jpg');
  background-size: cover;
  background-position: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.initial-next {
  background: linear-gradient(
    90deg,
    #A12A09 0%,
    #940D0D 50%
  );
  box-shadow: -6px 8px 23.399999618530273px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px rgba(0, 0, 0, 0.26) solid;
  color: #D9D9D9;
  font-size: 40px;
  font-family: Imprima;
  font-weight: 400;
  word-wrap: break-word;
  padding: 10px 20px;
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
}

.initial-next:hover {
  background: #A12A09;
}
</style>