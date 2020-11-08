<template>
  <div class="main_books">
    <div class="topbar">
      <h3>Small Move</h3>
      <button class="btn_change">Change</button>
    </div>
    <div class="addresses">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <span>
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0C4.91857 0 0 4.86889 0 10.8889C0 19.0556 11 28 11 28C11 28 22 19.0556 22 10.8889C22 4.86889 17.0814 0 11 0ZM11 15.5556C13.6036 15.5556 15.7143 13.4662 15.7143 10.8889C15.7143 8.31157 13.6036 6.22222 11 6.22222C8.39638 6.22222 6.28571 8.31157 6.28571 10.8889C6.28571 13.4662 8.39638 15.5556 11 15.5556Z"
                  fill="#F27F0B"
                />
              </svg>
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> pick up address </v-list-item-title>
            <v-list-item-subtitle>
              Bahawalpur Zoo, Stadium Road, Old City Bahawalpur
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <span>
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0C4.91857 0 0 4.86889 0 10.8889C0 19.0556 11 28 11 28C11 28 22 19.0556 22 10.8889C22 4.86889 17.0814 0 11 0ZM11 15.5556C13.6036 15.5556 15.7143 13.4662 15.7143 10.8889C15.7143 8.31157 13.6036 6.22222 11 6.22222C8.39638 6.22222 6.28571 8.31157 6.28571 10.8889C6.28571 13.4662 8.39638 15.5556 11 15.5556Z"
                  fill="#F27F0B"
                />
              </svg>
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> pick up address </v-list-item-title>
            <v-list-item-subtitle>
              Bahawalpur Zoo, Stadium Road, Old City Bahawalpur
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </div>
    <div class="books">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title> {{ item.title }} </v-list-item-title>
            <v-list-item-subtitle> {{ item.subtitle }} </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ item.subtitle1 }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <img src="@/assets/van.svg" alt="" />

          <v-list-item-action>
            <v-btn depressed class="book_btn"> Book Now</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "1 Bed Room",
          subtitle: "15 Hr included",
          subtitle1: " $154 Truck,Labor, Supplies",
        },
        {
          title: "1 Bed Room",
          subtitle: "15 Hr included",
          subtitle1: " $154 Truck,Labor, Supplies",
        },
        {
          title: "1 Bed Room",
          subtitle: "15 Hr included",
          subtitle1: " $154 Truck,Labor, Supplies",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_books {
  font-family: "Nunito", sans-serif;
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background: rgba(148, 148, 148, 0.13);
    border-radius: 4px;
    padding: 15px;
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 23px;

      color: #545454;
    }
    .btn_change {
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;

      color: #f27f0b;
      &:focus {
        outline: none;
      }
    }
  }
  .addresses {
    display: flex;
    flex-direction: column;
    padding: 15px 8px;
    background-color: rgba(148, 148, 148, 0.13);
    width: 90%;
    margin-top: 10px;

    .theme--light.v-list {
      background: transparent !important;
      padding: 0 !important;
      .v-list-item__title {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;

        color: #f27f0b;
        margin-bottom: 7px;
        text-transform: capitalize;
        @media (max-width: 350px) {
          font-size: 12px;
          margin-bottom: 4px;
        }
      }
      .v-list-item__subtitle {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
        @media (max-width: 480px) {
          font-size: 12px;
        }
        @media (max-width: 380px) {
          font-size: 11px;
          //   .v-list-item__avatar {
          //     width: 30px !important;
          //     height: 30px !important;
          //     span {
          //       width: 30px;
          //       height: 30px;
          //       svg {
          //         width: 20px;
          //         height: 20px;
          //       }
          //     }
          //   }
        }
        @media (max-width: 350px) {
          font-size: 10px;
        }
      }
      .v-divider {
        max-width: 80%;
        margin-left: 45px;
      }
    }
  }
  .books {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: rgba(148, 148, 148, 0.13);
    width: 90%;

    .theme--light.v-list {
      background: transparent !important;
      padding: 0 !important;

      .v-list-item {
        margin-bottom: 10px;
        background-color: #fff !important;
        @media (max-width: 480px) {
          flex-direction: column;

          .v-list-item__content {
            width: 90%;
            margin: auto;
            text-align: center;
          }
        }

        .v-list-item__title {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;

          color: #000000;
        }
        .v-list-item__subtitle {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;

          color: #545454;
        }
      }
    }
  }
}
.v-btn.book_btn {
  background-color: #f27f0b !important;
  color: #fff !important;
  font-style: normal;
  font-weight: normal;
  //   font-size: 17px;
  color: #ffffff;
  margin-left: 10px;
}
</style>