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
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
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
#s_form {
  font-family: "Nunito", sans-serif;
  form {
    padding: 20px 10px;
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
    .mdi:before {
      position: absolute;
      bottom: 30%;
    }
    .v-input__slot .v-label {
      color: #f27f0b !important;
      font-style: normal;
      font-weight: normal;
      font-size: 14px !important;
      line-height: 19px;
      padding-left: 10px;
    }
    .v-text-field input {
      margin-top: 7px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;

      &::placeholder {
        color: #cccccc !important;
      }
    }
    .v-input__slot {
      &:after {
        color: #f27f0b;
        background-color: #f27f0b;
      }
    }
    #custom {
      .v-input__slot .v-label {
        padding-left: 0px !important;
      }
    }
  }
}
#e_form {
  font-family: "Nunito", sans-serif;
  form {
    padding: 4px;
    .v-input input {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;

      width: 44px !important;
      height: 44px !important;
      background: #fefefe !important;
      border: 1px solid #bcb7b7 !important;
      box-sizing: border-box;
      max-height: 44px !important;
      padding: 8px;
    }
    .v-text-field > .v-input__control > .v-input__slot:after,
    .v-text-field > .v-input__control > .v-input__slot::before {
      border: none !important;
    }

    .v-text-field .v-input__control {
      @media (max-width: 330px) {
        height: 44px !important;
      }
    }
  }
}
#p_form {
  font-family: "Nunito", sans-serif;
  form {
    padding: 20px 10px;
    .v-input input {
      padding: 12px;
      padding-left: 2px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    }
    .v-input__slot .v-label {
      color: #f27f0b !important;
      font-style: normal;
      font-weight: normal;
      font-size: 14px !important;
      line-height: 19px;
      margin-left: -6px;
    }
    .v-textarea .v-input__slot .v-text-field__slot .v-label {
      margin-left: -21px;
    }

    .v-text-field input {
      margin-top: 7px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;

      &::placeholder {
        color: #cccccc !important;
      }
    }
    .v-input__slot {
      &:after {
        color: #f27f0b;
        background-color: #f27f0b;
      }
    }
    #custom {
      .v-input__slot .v-label {
        padding-left: 0px !important;
      }
    }
  }
}
</style>

