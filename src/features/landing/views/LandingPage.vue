<template>
  <div class="landing-page">
    <LeftComponent class="left-half" />
    <RightComponent class="right-half" />
  </div>
</template>

<script>
import { LeftComponent, RightComponent } from '@/features/landing/services/LandingService.js';

export default {
  name: 'LandingPage',
  components: {
    LeftComponent,
    RightComponent
  }
};
</script>

<style scoped>
.landing-page {
  display: flex;
  justify-content: space-between;
  width: 100dvw;
  height: 100dvh;
}

.left-half{
  width: 40%;
}

.right-half{
    width: 60%;
}

</style>

