h2<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="delivery">
      <v-container>
        <Address></Address>

        <div class="scedule_contact">
          <div>
            <h1>Delivery Days</h1>
            <!-- Days -->
            <div class="days">
              <div
                class="day"
                v-for="(sday, i) in days"
                :key="i"
                @click="toogleActive(sday)"
                :class="{ active: activeDays.indexOf(sday) >= 0 }"
              >
                <h2>{{ sday }}</h2>
              </div>
            </div>
            <!-- Days -->
            <h1>Pickup Days</h1>
            <!-- Pickup Days -->
            <div class="days">
              <div
                class="day"
                v-for="(pday, i) in Pdays"
                :key="i"
                @click="tooglePActive(pday)"
                :class="{ Pactive: activePDays.indexOf(pday) >= 0 }"
              >
                <h2>{{ pday }}</h2>
              </div>
            </div>
            <!-- Pickup Days -->

            <!-- Formm -->
            <div class="signin_form" id="p_form">
              <form action="">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      placeholder="Enter First Name"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      placeholder="Enter Last Name"
                      label="Last Name"
                      id="custom"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      placeholder="Enter Email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      placeholder="Enter Phone number"
                      label="Phone number"
                      id="custom"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      label="What day do you need us?"
                      placeholder=" "
                      auto-grow
                    ></v-textarea>
                  </v-col>
                </v-row>
              </form>
            </div>
            <!-- Formm -->

            <!-- Times -->
            <h3>What day do you need us?</h3>
            <Times></Times>
            <!-- Times -->
          </div>
          <!-- Contact Form -->
          <Contact></Contact>
          <!-- Contact Form -->
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Hero/Navbar2";
import Address from "@/components/Scedules/Addresses";
import Times from "@/components/Scedules/Times";
import Contact from "@/components/Contact.vue";
export default {
  data() {
    return {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      Pdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      activeDays: [],
      activePDays: [],
    };
  },
  components: {
    Navbar,
    Address,
    Contact,
    Times,
  },
  methods: {
    toogleActive(day) {
      this.activeDays = [];
      this.activeDays.push(day);
    },
    tooglePActive(day) {
      this.activePDays = [];
      this.activePDays.push(day);
    },
  },
};
</script>

<style lang="scss" scoped>
.days {
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 20px;
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
    cursor: pointer;
    // height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #f1f1f1;
    border-radius: 0px 0px 0px 0px;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #545454;
    }

    &.active,
    &.Pactive {
      background: #f27f0b;
      h2 {
        color: #fff;
      }
    }
    &.disabled,
    &.Pdisabled {
      h2 {
        color: rgba(0, 0, 0, 0.25);
        pointer-events: none;
      }
    }
  }
}

.scedule_contact {
  display: grid;
  grid-template-columns: calc(75% - 20px) calc(25%);
  margin-top: 40px;
  width: 100%;

  column-gap: 30px;
  row-gap: 40px;
  font-family: "Nunito", sans-serif;
  @media (max-width: 1070px) {
    grid-template-columns: 1fr;
  }
  h1 {
    margin-left: 18px;
    margin-bottom: 10px;
    @media (max-width: 650px) {
      margin-left: 8px;
    }
  }
  h3 {
    margin: 0;
  }
}
</style>
