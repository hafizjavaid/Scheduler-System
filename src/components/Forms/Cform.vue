<template>
  <div class="signin_form" id="p_form">
    <h1>Due Today $50</h1>
    <form action="">
      <v-row>
        <v-col cols="12" sm="8">
          <v-text-field
            placeholder="Enter Card Number"
            label="Card Number"
            :append-icon="icon"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field placeholder="MM/YY CVC"></v-text-field>
        </v-col>
      </v-row>

      <v-btn type="submit" text>Pay Now</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true,
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" 
      xmlns="http://www.w3.org/2000/svg"><path data-v-df210f66="" fill-rule="evenodd"
       clip-rule="evenodd" d="M4.16669 4.16634C3.70645 4.16634 3.33335 4.53944 3.33335
        4.99967V16.6663C3.33335 17.1266 3.70645 17.4997 4.16669 17.4997H15.8334C16.2936
         17.4997 16.6667 17.1266 16.6667 16.6663V4.99967C16.6667 4.53944 16.2936 4.16634 
         15.8334 4.16634H4.16669ZM1.66669 4.99967C1.66669 3.61896 2.78598 2.49967 4.16669 
         2.49967H15.8334C17.2141 2.49967 18.3334 3.61896 18.3334 4.99967V16.6663C18.3334 18.0471 
         17.2141 19.1663 15.8334 19.1663H4.16669C2.78598 19.1663 1.66669 18.0471 1.66669
          16.6663V4.99967Z" fill="#B3C2CB"></path><path data-v-df210f66="" fill-rule="evenodd"
           clip-rule="evenodd" d="M13.3334 0.833008C13.7936 0.833008 14.1667 1.2061 14.1667 
           1.66634V4.99967C14.1667 5.45991 13.7936 5.83301 13.3334 5.83301C12.8731 5.83301 12.5 5.45991 12.5 4.99967V1.66634C12.5 1.2061 12.8731 0.833008 13.3334
            0.833008Z" fill="#B3C2CB"></path><path data-v-df210f66="" fill-rule="evenodd" clip-rule="evenodd" d="M6.66669 
            0.833008C7.12692 0.833008 7.50002 1.2061 7.50002 1.66634V4.99967C7.50002 5.45991 7.12692 5.83301 6.66669 5.83301C6.20645 5.83301 5.83335 5.45991 5.83335 4.99967V1.66634C5.83335 1.2061 6.20645 0.833008 6.66669 0.833008Z" fill="#B3C2CB"></path><path data-v-df210f66="" fill-rule="evenodd" clip-rule="evenodd" d="M1.66669 8.33301C1.66669 7.87277 2.03978 7.49967 2.50002 7.49967H17.5C17.9603 7.49967 18.3334 7.87277 18.3334 8.33301C18.3334 8.79324 17.9603 9.16634 17.5 9.16634H2.50002C2.03978 9.16634 1.66669 8.79324 1.66669 8.33301Z" fill="#B3C2CB"></path></svg>`,
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