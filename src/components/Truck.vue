<template>
  <section id="truck" class="truck">
    <v-container>
      <div class="truck_inner">
        <img src="@/assets/vehicle-lineup 1.svg" alt="" />
        <h2>A truck as big as you need</h2>
        <p>Ranging from Pickup Trucks to Cargo Vans and Sprinter Vans.</p>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.truck {
  margin: 160px 0 80px 0;
  font-family: "Nunito", sans-serif;
  .truck_inner {
    width: 100%;
    text-align: center;
    img {
      object-fit: cover;
      object-position: center center;
      width: 100%;
    }
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 46px;

      color: #000000;
      margin: 0;
      margin-top: 40px;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      margin: 0;
      text-align: center;
      color: rgba(0, 0, 0, 0.77);
    }
  }
}
</style>