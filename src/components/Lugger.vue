<template>
  <section class="lugger">
    <div class="lugger_content">
      <h3>Become a Lugger</h3>
      <p>Be active, meet new people & make up to $2.5k/week</p>
      <button class="book_btn">Book</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lugger {
  height: 300px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 74px;
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: "Nunito", sans-serif;
  background: #f27f0b;
  border-radius: 10px;
  @media (max-width: 400px) {
    padding: 35px;
    justify-content: center;
  }
  .lugger_content {
    h3 {
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 46px;

      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;

      color: #fefefe;
    }
    button {
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 175px;
      width: 100%;
      height: 48px;
      border-radius: 4px;
      margin-top: 24px;
      color: #fff;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }
}
</style>