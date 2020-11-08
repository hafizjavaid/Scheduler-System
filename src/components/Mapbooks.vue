<template>
  <div class="map_books">
    <Books></Books>
    <Map></Map>
  </div>
</template>

<script>
import Books from "./Books";
import Map from "./Map";
export default {
  data() {
    return {};
  },
  components: {
    Books,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.map_books {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 55px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}
</style>