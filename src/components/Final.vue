<template>
  <section id="final">
    <div class="final_inner">
      <div class="final_inner_2">
        <h3>Thank you for your reservation!</h3>
        <p>Reservation # 54894664</p>
        <p>Please check your email for details / login</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#final {
  width: 100%;
  height: calc(100vh - 88px);
  background-color: orange;
  font-family: "Nunito", sans-serif;

  .final_inner {
    width: 100%;
    height: calc(100vh - 88px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: url("./../assets/Group.svg");
    background-position: top center;
    background-repeat: no-repeat;
    z-index: 1;
    padding-top: 30px;
    .final_inner_2 {
      max-width: 540px;
      width: 100%;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      z-index: 3;
      //   height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 570px) {
        max-width: 75%;
      }
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        color: #ffffff;
        margin-top: 5px;
        @media (max-width: 570px) {
          font-size: 20px;
        }
        @media (max-width: 460px) {
          font-size: 16px;

          text-align: center;
          line-height: 20px;
        }
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
        margin: 0;
        margin-top: 8px;
        margin-bottom: 15px;
        padding: 0;
        @media (max-width: 570px) {
          font-size: 18px;
        }
        @media (max-width: 460px) {
          font-size: 14px;
          margin-top: 8px;
          margin-bottom: 8px;
          text-align: center;
          line-height: 20px;
        }
      }
    }
  }
}
</style>