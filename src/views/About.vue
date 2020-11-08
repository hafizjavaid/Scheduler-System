<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="estimate">
      <v-container>
        <v-row>
          <div class="estimate_title">
            <h1>Get an estimate</h1>
            <p>
              Tell us a bit about your move and we’ll help you calculate the
              cost.
            </p>
          </div>
        </v-row>
        <router-view></router-view>
      </v-container>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Hero/Navbar2";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.estimate_title {
  width: 100%;
  padding-left: 10px;
  margin-bottom: 70px;
  font-family: "Nunito", sans-serif;
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 53px;
    //   line-height: 72px;
    margin: 0;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #545454;
    margin: 0;
  }
}
</style>
