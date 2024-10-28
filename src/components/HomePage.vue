<template>
    <header>
      <h1> CookBook</h1>
      <div class="Search">
        <input type="text" class="Search-Input"  placeholder="Pesquisar"/>
        <img class="Search-Icon" src="../assets/procurar.png" alt="Search Icon" />
      </div>
    </header>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(270deg, #A12A09 -0.82%, #940D0D 98.56%);
  color: white;
}
h1{
  margin-left: 7.12rem;
  color: #FFF;
  font-family: Jost;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.Search{
  margin-right: 18.31rem;
  position: relative; 
  display: inline-block;
}

.Search-Input{
  padding-left: 30px;
  border-radius: 0.3125rem;
  background: #D9D9D9;
  border: none;
  width: 39.4375rem;
  height: 1.6875rem;
  flex-shrink: 0;
}

.Search-Icon{
  cursor: pointer;
  position: absolute; 
  left: 5px; 
  top: 50%; 
  transform: translateY(-50%); 
  width: 15px; 
  height: 15px;
}
</style>