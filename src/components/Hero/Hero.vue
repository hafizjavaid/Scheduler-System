<template>
  <section class="hero" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
    <Navbar></Navbar>

    <v-row>
      <v-col md="6" cols="12" dark>
        <h1 color="primary">
          Move <br />
          Anything
        </h1>
        <p>with the push of button</p>
      </v-col>
      <v-col md="6" cols="12">
        <form action="" class="location_form">
          <v-row>
            <v-col>
              <v-text-field
                placeholder="Enter Pickup"
                label="Pickup address"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>
              <v-text-field
                placeholder="Enter Destination"
                label="Destination"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>
              <v-btn block type="submit" text> Block Button </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Navbar from "./Navbar";
export default {
  data() {
    return {
      img: require("@/assets/Rectangle 1.jpg"),
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-image: require("@/assets/Rectangle 1.jpg");
  // background: url(require('../ass')
  background: url("../../assets/Rectangle 1.jpg");
  position: relative;
  font-family: "Nunito", sans-serif;
  z-index: 1;
  padding: 0 30px;
  @media (max-width: 960px) {
    height: auto;
  }
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.46);
    z-index: -2;
  }
}
form {
  // z-index: 3;
  background: #fff;
  padding: 20px 8px;
  max-width: 285px;
  margin-left: auto;
  @media (max-width: 960px) {
    margin-left: 0;
    margin-right: auto;
  }
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
  .v-btn {
    background-color: #f27f0b !important;
    color: #fff !important;
    background: #f27f0b !important;
    border: 1px solid #f27f0b !important;

    border-radius: 4px !important;
  }
}
h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 73px;
  color: #ffffff;
}
p {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  // line-height: 49px;
  color: #ffffff;
  margin: 0;
  margin-top: 24px;
}
</style>