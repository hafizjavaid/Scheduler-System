<template>
  <div class="months">
    <div
      class="month"
      v-for="(smonth, i) in months"
      :key="i"
      @click="toogleActive(smonth)"
      :class="{ active: activemonths.indexOf(smonth) >= 0 }"
    >
      <h5>{{ smonth }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      activemonths: [],
    };
  },
  methods: {
    toogleActive(month) {
      this.activemonths = [];
      this.activemonths.push(month);
    },
  },
};
</script>

<style lang="scss" scoped>
.months {
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  font-family: "Nunito", sans-serif;
  margin-top: 50px;
  margin-bottom: 60px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 510px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .month {
    padding: 15px;
    background-color: #f2f2f2;

    // height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #f1f1f1;
    border-radius: 4px 0px 0px 0px;

    h5 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #545454;
    }
    &.active {
      background: #f27f0b;
      h2 {
        color: #fff;
      }
      h5 {
        color: #fff;
      }
    }
    &.disabled {
      h2 {
        color: rgba(0, 0, 0, 0.25);
      }
      h5 {
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>