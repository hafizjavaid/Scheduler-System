<template>
  <section class="forms">
    <v-container>
      <div class="pkg_form">
        <v-componet :is="component"></v-componet>
        <Package></Package>
      </div>
    </v-container>
  </section>
</template>

<script>
import Package from "./Package";
import Form from "./signup";
import Emailform from "./Emailform";
import Pform from "./Pform";
import Aform from "./Aform";
import Cform from "./Cform";
export default {
  data() {
    return {
      login: true,
      component: "Cform",
    };
  },
  methods: {
    toggleLogin() {
      this.login = !this.login;
      console.log(this.login);
    },
  },
  components: {
    Package,
    Form,
    Emailform,
    Pform,
    Aform,
    Cform,
  },
};
</script>

<style lang="scss" scoped>
.forms {
  margin: 60px 0;

  .pkg_form {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding: 30px;
    column-gap: 100px;
    row-gap: 30px;
    font-family: "Nunito", sans-serif;
    @media (max-width: 740px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 470px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
    @media (max-width: 470px) {
      padding: 0px;
    }
  }
}
</style>