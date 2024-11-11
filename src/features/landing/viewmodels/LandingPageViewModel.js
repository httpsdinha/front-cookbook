import LandingPageModel from '@/features/landing/models/LandingPageModel.js';

export default {
  data() {
    return {
      showLogin: LandingPageModel.showLogin,
    };
  },
  methods: {
    expandLeft() {
      this.showLogin = true;
      LandingPageModel.showLogin = true;
    },
    showLoginComponent() {
      this.showLogin = true;
      LandingPageModel.showLogin = true;
    },
  },
  created() {
    if (this.$route.query.login) {
      this.expandLeft();
    }
  },
};
