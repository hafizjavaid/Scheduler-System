<template>
  <div class="t_data">
    <p>Reservation #{{ sData.code }} | {{ sData.move }} | {{ sData.room }}</p>
    <div class="view_btn" text depressed>Reservation Status: Active</div>
    <div class="appointments">
      <div class="d_appointment">
        <v-btn class="book_btn">
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM2 2H18V4H2V2ZM2 14V8H18.001L18.002 14H2Z"
                fill="#fff"
              />
              <path d="M4 10H11V12H4V10Z" fill="#fff" />
            </svg>
          </span>
          delivery appointment</v-btn
        >
        <v-list class="btns">
          <v-list-item class="s_btn">
            <v-list-item-content>
              <v-list-item-title> Date</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn class="date_btn" text depressed>10/12/10</v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item class="s_btn">
            <v-list-item-content>
              <v-list-item-title> Time</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn class="date_btn" text depressed>1PM - 3PM</v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item class="s_btn">
            <v-list-item-content>
              <v-list-item-title> Status</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn class="date_btn" text depressed>Scheduled</v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <v-btn class="book_btn"> Request Cancellation</v-btn>
      </div>
      <div class="m_appointment">
        <v-btn class="book_btn">
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM2 2H18V4H2V2ZM2 14V8H18.001L18.002 14H2Z"
                fill="#fff"
              />
              <path d="M4 10H11V12H4V10Z" fill="#fff" />
            </svg>
          </span>
          delivery appointment</v-btn
        >
        <div class="m_content">
          <v-btn class="book_btn"> Schedule Now</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sData"],
  btn: `<svg width="20" height="16" viewBox="0 0 20 16" fill="n" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM2 2H18V4H2V2ZM2 14V8H18.001L18.002 14H2Z" fill="#fff"/>
<path d="M4 10H11V12H4V10Z" fill="#fff"/>
</svg>`,
};
</script>

<style lang="scss" scoped>
.t_data {
  //   background-color: red;
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: auto;
  //   border: 2px solid #000;
  flex-direction: column;
  align-items: center;
  //   height: 50vh;
  font-family: "Nunito", sans-serif;
  padding: 10px 20px;
  p {
    margin-bottom: 15px;
  }
  .appointments {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    width: 100%;
    margin-top: 40px;
    @media (max-width: 830px) {
      border-bottom: 1px solid #000;
      grid-template-columns: 1fr;
    }
    .m_appointment {
      //   background-color: #f27f0b;
      //   height: 20vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      //   justify-content: center;
      width: 100%;
      .m_content {
        // width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
      }
    }
    .d_appointment {
      border-right: 1px solid #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      @media (max-width: 830px) {
        border: none;
        border-bottom: 1px solid #000;
      }
      .btns {
        display: flex;
        flex-direction: column;
        // align-items: center;
        width: 80%;
        .s_btn {
          display: flex;
          margin: 5px;
          .date_btn {
            padding: 10px;
            max-width: 100px;
            margin-left: 10px;
            background: none !important;
            border: none !important;
            color: #000;
            letter-spacing: 0 !important;
            background-color: #ddd !important;
            width: 100px;
          }
          .v-list-item__icon {
            margin: 0 !important;
            align-self: center !important;
          }
          .v-list-item__content {
            margin-right: 15px;
          }
          .v-list-item__title {
            // text-align: center;
            // width: 50px;
            // background-color: red;
          }
        }
      }
    }
  }
}

.book_btn,
.date_btn,
.view_btn {
  background-color: #f27f0b !important;

  font-style: normal;
  //   align-self: flex-start;
  font-weight: normal;
  font-size: 15px;
  color: #ffffff;
  max-width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  border: 1px solid #f27f0b;
  box-sizing: border-box;
  border-radius: 4px;
  text-decoration: none !important;
  //   letter-spacing: 0 !important;
  text-transform: capitalize;

  span {
    margin-right: 5px;
  }
}
a {
  text-decoration: none !important;
}
.view_btn {
  max-width: 300px;
  height: 40px;
  font-size: 0.875rem;
  font-size: 17px;
}
.date_btn {
  max-width: 90px;
  height: 30px;
  font-size: 0.875rem;
  //   font-size: 17px;
  width: 100%;
}
.book_btn {
  margin-bottom: 10px;
}
</style>