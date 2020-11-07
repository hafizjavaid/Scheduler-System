<template>
  <div class="clients">
    <v-carousel hide-delimiters cycle>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div class="single_client">
          <img src="@/assets/user.jpg" alt="" />
          <h4>Savals Colbert</h4>
          <p>
            Lugg is such a fast, easy, and convenient service! I've used them
            twice now and both moves have been amazing. I highly recommend this
            service to anyone who has no other way to transport big items!
          </p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["1", "2", "3"],
    };
  },
};
</script>

<style lang="scss">
.clients {
  margin: 80px 0;
  height: 70vh;
  background: #ededf4;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  color: #000;

  img {
    border-radius: 50%;
  }
}
</style>