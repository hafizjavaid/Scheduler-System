<template>
  <div class="map_cards">
    <Cards></Cards>
    <Map></Map>
  </div>
</template>

<script>
import Cards from "./cards";
import Map from "./Map";
export default {
  data() {
    return {};
  },
  components: {
    Cards,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.map_cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 55px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}
</style>