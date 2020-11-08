<template>
  <div class="home">
    <Hero></Hero>
    <Delievries></Delievries>
    <Clients></Clients>
    <Truck></Truck>
    <Benefits></Benefits>
    <Lugger></Lugger>
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero";
import Delievries from "@/components/Deliveries";
import Clients from "@/components/client";
import Truck from "@/components/Truck";
import Lugger from "@/components/Lugger";
import Benefits from "@/components/Benefits";
export default {
  components: {
    Hero,
    Delievries,
    Clients,
    Truck,
    Benefits,
    Lugger,
  },
};
</script>
