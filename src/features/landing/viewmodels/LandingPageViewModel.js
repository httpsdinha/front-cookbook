import LandingPageModel from '@/features/landing/models/LandingPageModel.js';
import axiosInstance from '@/plugins/axios';

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
    async handleLogin(email, senha) {
      try {
        console.log('Sending login request with:', { email, senha });
        const response = await axiosInstance.post('/usuario/login', {
          email: email,
          senha: senha
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Login response:', response);

        if (response.status === 200 && response.data === 'Login válido') {
          this.$router.push('/recipelist');
        } else {
          alert('Email ou senha inválidos');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
      }
    },
  },
  created() {
    if (this.$route.query.login) {
      this.expandLeft();
    }
  },
};
