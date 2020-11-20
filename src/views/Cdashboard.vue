<template>
  <div class="home">
    <Navbar></Navbar>
    <section class="estimate" id="cdashboard">
      <v-container>
        <v-row>
          <v-tabs vertical center-active>
            <v-tab v-if="show" :class="[show ? 'd-none' : '']">
              Services
            </v-tab>
            <v-tab> My Reservation </v-tab>
            <v-tab> My Profile </v-tab>
            <v-tab> Payment Info </v-tab>
            <v-tab-item class="ml-4" v-if="show">
              <div class="book_service">
                <h6 class="note">No Booking to show</h6>
                <router-link to="/" class="book_btn" text depressed
                  >Book a service</router-link
                >
              </div>
            </v-tab-item>
            <v-tab-item class="ml-4" v-if="hideTable">
              <h1>Active Reservations</h1>
              <ATable
                :activeTable="activeTable"
                @viewDetail="viewDetail"
              ></ATable>
              <h1>Closed Reservations</h1>
              <ATable
                :activeTable="closeTable"
                @viewDetail="viewDetail"
              ></ATable>
            </v-tab-item>
            <v-tab-item class="ml-4" v-if="!hideTable">
              <Tdata :sData="sData"></Tdata>
            </v-tab-item>
            <v-tab-item class="ml-4">
              <form action="">
                <v-text-field label="Name" required></v-text-field>
                <v-text-field label="E-mail" required></v-text-field>
                <v-text-field label="Phone Number" required></v-text-field>
                <v-text-field label="Text Number" required></v-text-field>
              </form>
            </v-tab-item>
            <v-tab-item class="ml-4">
              <v-simple-table id="p__table">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-tab-item>
          </v-tabs>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Hero/Navbar2";
import ATable from "@/components/Dashboard/Activetable";
import Tdata from "@/components/Dashboard/Tdata";
export default {
  components: {
    Navbar,
    Tdata,
    ATable,
  },
  data() {
    return {
      show: false,
      hideTable: true,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
      ],
      sData: {
        code: 123456,
        move: "Small Move",
        room: "1 Bed Room",
        id: 1,
        btn: "view",
      },
      activeTable: [
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 1,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 2,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 3,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 1,
          btn: "view",
        },
      ],
      closeTable: [
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 4,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 5,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 6,
          btn: "view",
        },
        {
          code: 123456,
          move: "Small Move",
          room: "1 Bed Room",
          id: 7,
          btn: "view",
        },
      ],
    };
  },
  methods: {
    viewDetail(item) {
      this.sData = "";
      this.sData = item;
      this.hideTable = false;
      console.log(this.sData);
    },
    // viewDetails(item) {
    //   this.sData = "";
    //   this.sData = item;
    //   console.log(this.sData);
    // },
  },
};
</script>

<style lang="scss" scoped>
.estimate {
  margin-top: 40px;
  font-family: "Nunito", sans-serif;
  .book_service {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h6 {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  .d-none {
    opacity: 0;
    pointer-events: none;
    display: none;
  }
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
  h1 {
    text-align: center;
  }
  form {
    // max-width: ;
    max-width: 700px;
    margin: auto;
  }
}
</style>
