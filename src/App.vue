<template>
  <!-- <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app> -->
  <div>
    <Hero></Hero>
    <Delievries></Delievries>
    <C></C>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Hero from "./components/Hero/Hero";
import Delievries from "./components/Deliveries";
import C from "./components/client";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Hero,
    Delievries,
    C,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap");
</style>

