<template>
  <div class="signin_form" id="p_form">
    <h1>Personal Information</h1>
    <form action="">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            placeholder="Enter First Name"
            label="First Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            placeholder="Enter Last Name"
            label="Last Name"
            id="custom"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            placeholder="Enter Best Contact #"
            label="Best Contact #"
            id="custom"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Anything we need to know?"
            placeholder="Enter Anything we need to know?"
            auto-grow
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-text-field
            placeholder="Enter Best place to send you physical mail"
            label="Mailing Address"
            id="custom"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" text>Continue</v-btn>
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