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
    <Clients></Clients>
    <Truck></Truck>
    <Benefits></Benefits>
    <Lugger></Lugger>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Hero from "./components/Hero/Hero";
import Delievries from "./components/Deliveries";
import Clients from "./components/client";
import Truck from "./components/Truck";
import Lugger from "./components/Lugger";
import Benefits from "./components/Benefits";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Hero,
    Delievries,
    Clients,
    Truck,
    Benefits,
    Lugger,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap");
#clients .v-carousel__controls {
  background: none !important;
  top: 65%;
  color: #000 !important;
}
#clients .theme--dark.v-btn.v-btn--icon {
  color: #c4c4c4 !important;
}
#clients .theme--dark.v-btn.v-btn--icon.v-item--active {
  color: #000 !important;
  &::before {
    background: none !important;
  }
}
#hero {
  .v-input input {
    padding: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }
  i.v-icon.v-icon {
    color: #f27f0b;
    margin-top: 7px;
  }
  .v-input__slot .v-label {
    color: #f27f0b !important;
    margin-bottom: 7px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .v-text-field input {
    margin-top: 7px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }
  .v-text-field > .v-input__control > .v-input__slot:after {
    border-color: #f27f0b !important;
  }
}
</style>

