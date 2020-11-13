<template>
  <div class="main_packages">
    <div class="package">
      <div class="package_top">
        <h4>Package 1</h4>
        <v-list>
          <v-list-item>
            <img src="@/assets/van.svg" alt="" />
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
              <v-list-item-subtitle> 15 Hr included </v-list-item-subtitle>
              <v-list-item-subtitle>
                $154 Truck,Labor, Supplies
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="package_bottom">
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z"
                    fill="#545454"
                  />
                  <path d="M11 5H9V11H15V9H11V5Z" fill="#545454" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z"
                    fill="#545454"
                  />
                  <path d="M11 5H9V11H15V9H11V5Z" fill="#545454" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z"
                    fill="#545454"
                  />
                  <path d="M11 5H9V11H15V9H11V5Z" fill="#545454" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <div class="package active">
      <div class="package_top">
        <h4>Package 1</h4>
        <v-list>
          <v-list-item>
            <img src="@/assets/van.svg" alt="" />
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
              <v-list-item-subtitle> 15 Hr included </v-list-item-subtitle>
              <v-list-item-subtitle>
                $154 Truck,Labor, Supplies
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="package_bottom">
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <span v-html="item.svg">
                {{ item.svg }}
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-btn class="book_btn" @click="checkScedule">
                Check Availability</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <div class="package">
      <div class="package_top">
        <h4>Package 1</h4>
        <v-list>
          <v-list-item>
            <img src="@/assets/van.svg" alt="" />
            <v-list-item-content>
              <v-list-item-title> 1 Bed Room</v-list-item-title>
              <v-list-item-subtitle> 15 Hr included </v-list-item-subtitle>
              <v-list-item-subtitle>
                $154 Truck,Labor, Supplies
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="package_bottom">
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <span v-html="item.svg">
                {{ item.svg }}
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="#545454"/>
<path d="M11 5H9V11H15V9H11V5Z" fill="#545454"/>
</svg>

`,
          text: "1.5Hr Moving Help",
        },
        {
          svg: `<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.004 0L0 3.189L5.004 6.375L10.006 3.189L5.004 0ZM15.009 0L10.006 3.189L15.009 6.375L20.012 3.189L15.009 0ZM0 9.562L5.004 12.749L10.006 9.562L5.004 6.375L0 9.562ZM15.009 6.375L10.006 9.562L15.009 12.749L20.012 9.562L15.009 6.375ZM5.004 13.811L10.006 17L15.009 13.811L10.006 10.625L5.004 13.811Z" fill="#545454"/>
</svg>
`,
          text: `10 x Large Box`,
        },
        {
          svg: `<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.004 0L0 3.189L5.004 6.375L10.006 3.189L5.004 0ZM15.009 0L10.006 3.189L15.009 6.375L20.012 3.189L15.009 0ZM0 9.562L5.004 12.749L10.006 9.562L5.004 6.375L0 9.562ZM15.009 6.375L10.006 9.562L15.009 12.749L20.012 9.562L15.009 6.375ZM5.004 13.811L10.006 17L15.009 13.811L10.006 10.625L5.004 13.811Z" fill="#545454"/>
</svg>
`,
          text: `5 x Small Box`,
        },
        {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM18.1818 10C18.1818 14.5187 14.5187 18.1818 10 18.1818C5.48131 18.1818 1.81818 14.5187 1.81818 10C1.81818 5.48131 5.48131 1.81818 10 1.81818C14.5187 1.81818 18.1818 5.48131 18.1818 10Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.49996 11.2323L13.7929 5.93945L15.2071 7.35366L8.49996 14.0608L4.79285 10.3537L6.20707 8.93945L8.49996 11.2323Z" fill="#545454"/>
</svg>
`,
          text: `Delivery Included`,
        },
        {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM18.1818 10C18.1818 14.5187 14.5187 18.1818 10 18.1818C5.48131 18.1818 1.81818 14.5187 1.81818 10C1.81818 5.48131 5.48131 1.81818 10 1.81818C14.5187 1.81818 18.1818 5.48131 18.1818 10Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.49996 11.2323L13.7929 5.93945L15.2071 7.35366L8.49996 14.0608L4.79285 10.3537L6.20707 8.93945L8.49996 11.2323Z" fill="#545454"/>
</svg>`,
          text: `Pickup & Dropoff Included`,
        },
        {
          svg: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM2 2H18V4H2V2ZM2 14V8H18.001L18.002 14H2Z" fill="#545454"/>
<path d="M4 10H11V12H4V10Z" fill="#545454"/>
</svg>
`,
          text: `Deposit $50`,
        },
      ],
    };
  },
  methods: {
    checkScedule() {
      this.$router.push({ path: "/about/4" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main_packages {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: "Nunito", sans-serif;
  column-gap: 50px;
  @media (max-width: 967px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
.package {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 967px) {
    margin-bottom: 30px;
  }
  .package_top {
    background: #f27f0b;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    padding-top: 5px;
    h4 {
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #ffffff;
    }
    .v-list {
      background: transparent !important;
      padding: 0 !important;
    }
    .v-list-item {
      flex-direction: column;
      min-height: auto !important;

      .v-list-item__content {
        width: 90%;
        margin: auto;
        text-align: center;
        .v-list-item__title {
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 30px;
          color: #ffffff;
          text-transform: capitalize;
          margin: 10px 0 2px 0;
        }
        .v-list-item__subtitle {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 23px;

          color: #ffffff;
        }
      }
    }
  }
  .package_bottom {
    align-self: flex-start;
    background: #f1f1f1;
    border-radius: 0px 0px 4px 4px;
    width: 100%;
    .v-list {
      background: transparent !important;
      padding: 0 !important;
      .v-list-item {
        // max-height: 30px;
        margin-bottom: -17px !important;
        &:last-child {
          margin-bottom: 5px !important;
        }
        .v-list-item__action {
          margin: 16px auto 5px auto;
        }
        .v-list-item__icon {
          align-self: flex-start;
          margin: 9px 0;
        }
        .v-list-item__content {
          padding: 0;
          padding-bottom: 9px;
          .v-list-item__title {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            // line-height: 34px;

            color: #545454;
          }
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
}
.package {
  .package_bottom {
    display: none;
  }
  .package_top {
    background: #f1f1f1;
    h4 {
      color: #545454;
    }

    .v-list-item {
      .v-list-item__content {
        .v-list-item__title {
          color: #545454;
        }
        .v-list-item__subtitle {
          color: #545454;
        }
      }
    }
  }
  &.active {
    .package_bottom {
      display: block;
    }
    .package_top {
      background: #f27f0b;
      h4 {
        color: #fff;
      }

      .v-list-item {
        .v-list-item__content {
          .v-list-item__title {
            color: #fff;
          }
          .v-list-item__subtitle {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>