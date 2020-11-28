<template>
  <v-simple-table id="d__table" fixed-header height="200px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left_2">Reservation</th>
          <th class="text-left_2">Type</th>
          <th class="text-left_2">Room</th>
          <th class="text-left_2">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in activeTable" :key="i">
          <td>{{ item.code }}</td>

          <td>{{ item.move }}</td>
          <td>{{ item.room }}</td>

          <td>
            <button
              to="/"
              class="view_btn"
              text
              depressed
              @click="viewDetail(item)"
            >
              {{ item.btn }}
            </button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ["activeTable"],
  methods: {
    viewDetail(item) {
      //   console.log(item);
      this.$emit("viewDetail", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.book_btn,
.view_btn {
  background-color: #f27f0b !important;

  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #ffffff;
  max-width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  border: 1px solid #f27f0b;
  box-sizing: border-box;
  border-radius: 4px;
  text-decoration: none !important;
}
a {
  text-decoration: none !important;
}
.view_btn {
  max-width: 100px;
  height: 30px;
  font-size: 0.875rem;
}
</style>

// .all-journeys::-webkit-scrollbar {
//   width: 10px;
// }
// .all-journeys::-webkit-scrollbar-track {
//   // background: #ddd;
// }
// .sidebar::-webkit-scrollbar-track:hover {
//   background-color: #ddd;
// }
// .all-journeys::-webkit-scrollbar-thumb {
//   // background-color: var(--scroll);
//   border-radius: 16px;
//   background: #ddd;
// }