<template>
  <div class="addresses">
    <div class="address active">
      <img src="@/assets/van22.svg" alt="" />
      <h1>Delivery Address</h1>
      <p>
        Where should we deliver your <br />
        moving supplies?
      </p>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <span>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 0C4.02429 0 0 3.82556 0 8.55556C0 14.9722 9 22 9 22C9 22 18 14.9722 18 8.55556C18 3.82556 13.9757 0 9 0ZM9 12.2222C11.1302 12.2222 12.8571 10.5806 12.8571 8.55556C12.8571 6.53052 11.1302 4.88889 9 4.88889C6.86976 4.88889 5.14286 6.53052 5.14286 8.55556C5.14286 10.5806 6.86976 12.2222 9 12.2222Z"
                  fill="#F1F1F1"
                />
              </svg>
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              Bahawalpur Zoo, Stadium Road, Old City Bahawalpur
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="address">
      <img src="@/assets/van22.svg" alt="" />
      <h1>Delivery Address</h1>
      <p>
        Where should we deliver your <br />
        moving supplies?
      </p>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <span>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 0C4.02429 0 0 3.82556 0 8.55556C0 14.9722 9 22 9 22C9 22 18 14.9722 18 8.55556C18 3.82556 13.9757 0 9 0ZM9 12.2222C11.1302 12.2222 12.8571 10.5806 12.8571 8.55556C12.8571 6.53052 11.1302 4.88889 9 4.88889C6.86976 4.88889 5.14286 6.53052 5.14286 8.55556C5.14286 10.5806 6.86976 12.2222 9 12.2222Z"
                  fill="#F1F1F1"
                />
              </svg>
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              Bahawalpur Zoo, Stadium Road, Old City Bahawalpur
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="address">
      <img src="@/assets/van22.svg" alt="" />
      <h1>Delivery Address</h1>
      <p>
        Where should we deliver your <br />
        moving supplies?
      </p>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <span>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 0C4.02429 0 0 3.82556 0 8.55556C0 14.9722 9 22 9 22C9 22 18 14.9722 18 8.55556C18 3.82556 13.9757 0 9 0ZM9 12.2222C11.1302 12.2222 12.8571 10.5806 12.8571 8.55556C12.8571 6.53052 11.1302 4.88889 9 4.88889C6.86976 4.88889 5.14286 6.53052 5.14286 8.55556C5.14286 10.5806 6.86976 12.2222 9 12.2222Z"
                  fill="#F1F1F1"
                />
              </svg>
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              Bahawalpur Zoo, Stadium Road, Old City Bahawalpur
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.addresses {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  font-family: "Nunito", sans-serif;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  .address {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f1f1f1;
    padding: 15px 10px;
    border-radius: 10px 0px 0px 10px;
    max-width: 400px;
    width: 100%;
    @media (max-width: 1300px) {
      max-width: 400px;
      width: 100%;
      margin-bottom: 20px;
    }
    @media (max-width: 850px) {
      max-width: 350px;
      width: 100%;
      margin-bottom: 20px;
    }
    @media (max-width: 750px) {
      max-width: 350px;
      width: 100%;
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 380px) {
      max-width: 270px;
    }
    .v-list {
      background-color: transparent !important;
      width: 100%;
      .v-list-item__title {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        color: #545454;
      }
      svg path {
        fill: #545454;
      }
    }
    p {
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      text-align: center;

      color: #545454;
      margin: 0;
      margin-bottom: 25px;
    }
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;

      color: #545454;
      text-align: center;
      margin: 10px 0px;
    }
    &.active {
      background: #f27f0b;
      .v-list {
        background-color: transparent !important;
        .v-list-item__title {
          color: #f1f1f1;
        }
        svg path {
          fill: #f1f1f1;
        }
      }
      p {
        color: #f1f1f1;
      }
      h1 {
        color: #f1f1f1;
      }
    }
  }
}
</style>