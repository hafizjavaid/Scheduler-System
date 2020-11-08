<template>
  <div>
    <Address></Address>
    <div class="scedule_contact">
      <div>
        <Days></Days>
        <Months></Months>
        <Times></Times>
        <button class="book_btn" text depressed>Check Availability</button>
      </div>

      <div class="contact">
        <div class="top">
          <h6>Store Delivery</h6>
          <span
            ><svg
              width="33"
              height="22"
              viewBox="0 0 33 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.39324 12.1621L27.177 12.1621L19.5122 19.9229C19.1027 20.2932 19.5095 20.9162 19.8932 21.3121C20.0932 21.5175 20.3622 21.6216 20.6324 21.6216C20.8811 21.6216 21.1311 21.5337 21.3257 21.3553L32.1162 11.527C32.1973 11.4459 32.2108 11.3999 32.2392 11.3608C32.2959 11.2756 32.3324 11.2405 32.3513 11.1986C32.3838 11.1135 32.3878 11.0526 32.3986 10.9932C32.4095 10.9364 32.4311 10.8824 32.4324 10.8243C32.4311 10.7378 32.4095 10.6837 32.3986 10.627C32.3865 10.5662 32.3838 10.5067 32.3608 10.4499C32.3324 10.3797 32.2959 10.3459 32.2716 10.3053C32.2108 10.2189 32.1973 10.1743 32.1622 10.1378C32.1216 10.1026 21.327 0.266162 21.327 0.266162C20.9203 -0.104108 20.2797 -0.0865409 19.8946 0.309405C19.5108 0.704 19.1041 1.32697 19.5122 1.69859L27.177 9.4594L1.39324 9.4594C0.833784 9.4594 0 10.2675 0 10.8108C0 11.3526 0.833784 12.1621 1.39324 12.1621Z"
                  fill="#545454"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="32.4324" height="21.6216" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h6>1 Bed Room</h6>
        </div>
        <div class="c_card">
          <h1>Questions?</h1>
          <h2>1-800-242-5544</h2>
          <h3>Monday - Sunday</h3>
        </div>
        <button class="book_btn" text depressed>Contact</button>
      </div>
    </div>
  </div>
</template>

<script>
import Address from "./Scedules/Addresses";
import Days from "./Scedules/Days";
import Months from "./Scedules/Months";
import Times from "./Scedules/Times";
export default {
  components: {
    Address,
    Months,
    Times,
    Days,
  },
};
</script>

<style lang="scss" scoped>
.scedule_contact {
  display: grid;
  grid-template-columns: calc(75% - 20px) calc(25%);
  margin-top: 40px;
  //   background-color: red;
  padding: 10px 15px;
  //   padding-right: 0;
  column-gap: 30px;
  row-gap: 40px;
  font-family: "Nunito", sans-serif;
  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
  }
}
.contact {
  height: 40vh;
  max-width: 300px;
  width: 300px;
  //   width: 100%;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 1070px) {
    margin-left: auto;
    margin-right: auto;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 15px 5px;
    margin: auto;
    h6 {
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 23px;

      color: #545454;
    }
    span {
      margin-top: 5px;
    }
  }
  .c_card {
    width: 90%;
    margin: auto;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 6px 13px;
    margin-bottom: 28px;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;

      color: #545454;
    }
    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      /* identical to box height */

      color: #545454;
    }
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      color: #959595;
    }
  }
}
.book_btn {
  background-color: #f27f0b !important;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #ffffff;
  max-width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 30px;
  margin: auto;
  border: 1px solid #f27f0b;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>