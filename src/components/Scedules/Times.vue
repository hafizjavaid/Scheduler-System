<template>
  <div class="times">
    <div
      class="time"
      v-for="(stime, i) in times"
      :key="i"
      @click="toogleActive(stime)"
      :class="{ active: activetimes.indexOf(stime) >= 0 }"
    >
      <h5>{{ stime }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: ["8am-11am", "11am-1pm", "1pm-4pm", "4pm-7pm"],
      activetimes: [],
    };
  },
  methods: {
    toogleActive(time) {
      this.activetimes = [];
      this.activetimes.push(time);
    },
  },
};
</script>

<style lang="scss" scoped>
.times {
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  font-family: "Nunito", sans-serif;
  margin-top: 50px;
  margin-bottom: 60px;
  @media (max-width: 510px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    width: 90%;
  }
  .time {
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