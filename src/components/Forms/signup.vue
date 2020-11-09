<template>
  <div class="signin_form" id="s_form">
    <h1>{{ login ? "Sign up" : "Sign in" }}</h1>
    <form action="">
      <v-row>
        <v-col>
          <v-text-field
            placeholder="Enter Email"
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            placeholder="Enter Password"
            label="Password"
            prepend-inner-icon="mdi-key"
            append-icon="mdi-eye"
            id="custom"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" text v-if="login">Register</v-btn>
      <v-btn type="submit" v-else text>Sign in</v-btn>
      <p @click="toggleLogin">
        {{ login ? "Already" : "Not" }} have an account ?
        <router-link to="">{{ login ? "Sign up" : "Sign in" }}</router-link>
      </p>
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
      margin-bottom: 30px;
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 23px;

      color: #545454;

      a {
        text-decoration: none;
        color: rgba(45, 91, 204, 1);
      }
    }
  }
}
</style>