<template>
  <div class="days">
    <div
      class="day"
      v-for="(sday, i) in days"
      :key="i"
      @click="toogleActive(sday)"
      :class="{ active: activeDays.indexOf(sday) >= 0 }"
    >
      <h2>{{ sday.day }}</h2>
      <h5>{{ sday.date }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        {
          day: "Monday",
          date: "1",
        },
        {
          day: "Tuesday",
          date: "2",
        },
        {
          day: "Wenesday",
          date: "3",
        },
        {
          day: "Thursday",
          date: "4",
        },
        {
          day: "Friday",
          date: "5",
        },
      ],
      activeDays: [],
      // If month has 30 days then add +1 mean make them 31 and loop it for -1
      monthDays: 5 + 1,
    };
  },
  methods: {
    toogleActive(day) {
      this.activeDays = [];
      this.activeDays.push(day);
    },
  },
};
</script>

<style lang="scss" scoped>
.days {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  font-family: "Nunito", sans-serif;
  @media (max-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 510px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .day {
    padding: 15px;
    background-color: #f2f2f2;

    // height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #f1f1f1;
    border-radius: 4px 0px 0px 0px;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #545454;
    }
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