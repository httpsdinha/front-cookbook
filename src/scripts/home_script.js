import recipes from '../test/recipes.json';

export default {
  name: "HomePage",
  data(){
    return { 
      recipes,
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};