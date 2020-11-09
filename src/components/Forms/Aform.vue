<template>
  <div class="signin_form" id="p_form">
    <h1>Contract via admin</h1>
    <form action="">
      <v-row>
        <v-col cols="12">
          <v-text-field
            placeholder="Contract Text will be entered via admin"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field placeholder="First Name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field placeholder="Last Name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field placeholder="Today’s Date"></v-text-field>
        </v-col>
      </v-row>
      <p>Type name to sign electronically</p>
      <v-btn type="submit" text>Sign Electronically</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true,
    };
  },
  methods: {
    toggleLogin() {
      this.login = !this.login;
      console.log(this.login);
    },
  },
};
</script>

<style lang="scss" scoped>
.signin_form {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;

    color: #000000;
  }

  form {
    max-width: 420px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background: #f1f1f1;
    border-radius: 4px;
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
      background: #f27f0b !important;
      border: 1px solid #f27f0b;

      font-family: "Nunito", sans-serif;
      max-width: 200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      margin: auto;
      width: 100%;
      letter-spacing: 0.03em;
      text-transform: capitalize;
      margin-top: 30px;
      margin-bottom: 16px;
    }
    p {
      margin: 0;

      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;

      color: rgba(0, 0, 0, 0.25);
      transform: translateY(-23px);
    }
  }
}
</style>