<template>
  <div class="clients" id="clients">
    <v-carousel :show-arrows="false" cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        class="single_client"
      >
        <img src="@/assets/user.jpg" alt="" />
        <h4>Savals Colbert</h4>
        <span>
          <svg
            width="55"
            height="14"
            viewBox="0 0 55 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5 4.965H12.512L10.974 0.342C10.906 0.137 10.715 0 10.5 0C10.285 0 10.094 0.137 10.026 0.342L8.48801 4.965H3.50001C3.28201 4.965 3.09001 5.106 3.02401 5.313C2.95801 5.521 3.03401 5.747 3.21101 5.873L7.23501 8.728L5.70001 13.342C5.63201 13.547 5.70301 13.773 5.87701 13.902C6.05001 14.03 6.28701 14.033 6.46301 13.908L10.5 11.044L14.537 13.908C14.623 13.969 14.725 14 14.826 14C14.93 14 15.035 13.967 15.123 13.902C15.297 13.773 15.368 13.547 15.3 13.342L13.765 8.728L17.789 5.873C17.966 5.747 18.042 5.521 17.976 5.313C17.91 5.106 17.718 4.965 17.5 4.965Z"
              fill="#FFF055"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 4.965H10.512L8.97401 0.342C8.90601 0.137 8.71501 0 8.50001 0C8.28501 0 8.09401 0.137 8.02601 0.342L6.48801 4.965H1.50001C1.28201 4.965 1.09001 5.106 1.02401 5.313C0.958007 5.521 1.03401 5.747 1.21101 5.873L5.23501 8.728L3.70001 13.342C3.63201 13.547 3.70301 13.773 3.87701 13.902C4.05001 14.03 4.28701 14.033 4.46301 13.908L8.50001 11.044L12.537 13.908C12.623 13.969 12.725 14 12.826 14C12.93 14 13.035 13.967 13.123 13.902C13.297 13.773 13.368 13.547 13.3 13.342L11.765 8.728L15.789 5.873C15.966 5.747 16.042 5.521 15.976 5.313C15.91 5.106 15.718 4.965 15.5 4.965Z"
              fill="#FFF055"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5 4.965H9.51201L7.97401 0.342C7.90601 0.137 7.71501 0 7.50001 0C7.28501 0 7.09401 0.137 7.02601 0.342L5.48801 4.965H0.500007C0.282007 4.965 0.0900072 5.106 0.0240072 5.313C-0.0419928 5.521 0.0340072 5.747 0.211007 5.873L4.23501 8.728L2.70001 13.342C2.63201 13.547 2.70301 13.773 2.87701 13.902C3.05001 14.03 3.28701 14.033 3.46301 13.908L7.50001 11.044L11.537 13.908C11.623 13.969 11.725 14 11.826 14C11.93 14 12.035 13.967 12.123 13.902C12.297 13.773 12.368 13.547 12.3 13.342L10.765 8.728L14.789 5.873C14.966 5.747 15.042 5.521 14.976 5.313C14.91 5.106 14.718 4.965 14.5 4.965Z"
              fill="#FFF055"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.5 4.965H29.512L27.974 0.342C27.906 0.137 27.715 0 27.5 0C27.285 0 27.094 0.137 27.026 0.342L25.488 4.965H20.5C20.282 4.965 20.09 5.106 20.024 5.313C19.958 5.521 20.034 5.747 20.211 5.873L24.235 8.728L22.7 13.342C22.632 13.547 22.703 13.773 22.877 13.902C23.05 14.03 23.287 14.033 23.463 13.908L27.5 11.044L31.537 13.908C31.623 13.969 31.725 14 31.826 14C31.93 14 32.035 13.967 32.123 13.902C32.297 13.773 32.368 13.547 32.3 13.342L30.765 8.728L34.789 5.873C34.966 5.747 35.042 5.521 34.976 5.313C34.91 5.106 34.718 4.965 34.5 4.965Z"
              fill="#FFF055"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.5 4.965H49.512L47.974 0.342C47.906 0.137 47.715 0 47.5 0C47.285 0 47.094 0.137 47.026 0.342L45.488 4.965H40.5C40.282 4.965 40.09 5.106 40.024 5.313C39.958 5.521 40.034 5.747 40.211 5.873L44.235 8.728L42.7 13.342C42.632 13.547 42.703 13.773 42.877 13.902C43.05 14.03 43.287 14.033 43.463 13.908L47.5 11.044L51.537 13.908C51.623 13.969 51.725 14 51.826 14C51.93 14 52.035 13.967 52.123 13.902C52.297 13.773 52.368 13.547 52.3 13.342L50.765 8.728L54.789 5.873C54.966 5.747 55.042 5.521 54.976 5.313C54.91 5.106 54.718 4.965 54.5 4.965Z"
              fill="#FFF055"
            />
          </svg>
        </span>
        <p>
          Lugg is such a fast, easy, and convenient service! I've used them
          twice now and both moves have been amazing. I highly recommend this
          service to anyone who has no other way to transport big items!
        </p>
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

<style lang="scss" scoped>
.clients {
  margin: 80px 0;
  height: 60vh;
  background: #ededf4;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  color: #000;
  font-family: "Nunito", sans-serif;
  .single_client {
    margin: auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 70px;
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #000000;
    }
    p {
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: left;
      color: #000000;
      margin: 0;
      margin-top: 18px;
    }
    .v-carousel__controls {
      background: none !important;
    }
    .theme--dark.v-btn.v-btn--icon {
      color: #000 !important;
    }
  }

  img {
    border-radius: 50%;
  }
}
</style>