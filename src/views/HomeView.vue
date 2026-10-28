<script setup>
import Countdown from "@/components/Countdown.vue";
import Hero from "@/components/Hero.vue";
import EventDetails from "@/components/EventDetails.vue";
import RSVPForm from "@/components/RSVPForm.vue";
import Gallery from "@/components/Gallery.vue";
import PartyDetails from "@/components/PartyDetails.vue";
import Footer from "@/components/Footer.vue";
import Gifts from "@/components/Gifts.vue";
import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>

<template>
  <div class="home-container">
    <div class="content">
      <div id="inicio">
        <Hero />
      </div>
      <Countdown />
      <div id="event-details">
        <EventDetails />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Gifts />
      <div v-if="showInformation" id="information">
        <PartyDetails />
      </div>
      <RSVPForm />
      <div v-if="showInformation">
        <Footer />
      </div>
    </div>
  </div>
</template>

