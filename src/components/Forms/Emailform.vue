<template>
  <div class="signin_form" id="e_form">
    <h1>Please verify your email</h1>
    <form action="">
      <v-row>
        <v-col>
          <h4>A signup code has been sent to your email.</h4>
          <h4>Please enter the verification code</h4>
          <div class="fields">
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-btn type="submit" text>Enter</v-btn>
      <p class="resend">
        <router-link to="">Resend?</router-link>
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
    h4 {
      text-align: center;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;

      color: #000000;
      @media (max-width: 330px) {
        font-size: 14px;
      }
    }
    .fields {
      display: grid;
      grid-template-columns: repeat(5, 44px);
      column-gap: 16px;
      max-width: 284px;
      width: 100%;
      margin: auto;
      @media (max-width: 330px) {
        grid-template-columns: repeat(4, 44px);
        column-gap: 5px;
      }
      .v-input input {
        padding: 0 !important;
      }
      @media (max-width: 330px) {
        column-gap: 5px;
        max-width: 284px;
        width: 87%;
        .v-input__control {
          height: 44px !important;
        }
      }
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
      margin-top: 20px;
      margin-bottom: 16px;
    }
    p {
      padding-left: 12px;
      padding-bottom: 55px;

      a {
        text-decoration: none;
        color: rgba(45, 91, 204, 1);
      }
    }
  }
}
</style>