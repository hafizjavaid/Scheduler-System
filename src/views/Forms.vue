<template>
  <div class="home">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Hero/Navbar3";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
</style>
