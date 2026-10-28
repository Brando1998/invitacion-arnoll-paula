<script setup>
import fechaBg from "@/assets/images/fonfo-fecha.jpeg";
import heartImage from "@/assets/svg/heart.svg";
import partyImage from "@/assets/svg/party.svg";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament-accent.svg";
import { ceremony, reception } from "@/data/wedding.js";

import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>
<template>
  <div class="event-details two-columns" :style="{ backgroundImage: `url(${fechaBg})` }">
    <div class="info-container">
      <div class="shadow">
        <img class="ico" :src="heartImage" alt="heart" />
        <span class="title">{{ ceremony.title }}</span>
        <img
          :src="centerBottomOrnamentImage"
          alt="center ornament"
          class="center-ornament"
        />
        <span class="subtitle">Día</span>
        <span>{{ ceremony.day }}</span>
        <span class="subtitle">Lugar</span>
        <span>{{ ceremony.place }}</span>
        <span class="subtitle">Dirección</span>
        <span>{{ ceremony.address }}</span>
      </div>
    </div>
    <div class="info-container" v-if="showInformation">
      <div class="shadow">
        <img class="ico" :src="partyImage" alt="party" />
        <span class="title">{{ reception.title }}</span>
        <img
          :src="centerBottomOrnamentImage"
          alt="center ornament"
          class="center-ornament"
        />
        <span class="subtitle">Día</span>
        <span>{{ reception.day }}</span>
        <span class="subtitle">Lugar</span>
        <span>{{ reception.place }}</span>
        <span class="subtitle">Dirección</span>
        <span>{{ reception.address }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  color: var(--text-color);
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: var(--spacing-large) var(--spacing-medium);
}

.shadow {
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  margin: var(--spacing-medium);
  border-radius: 20px;
  padding: var(--spacing-medium);
}

.ico {
  width: 100px;
}

.info-container {
  position: relative;
  background: white;
  border-radius: 20px;
}

.center-ornament {
  width: 100px;
}

.event-details span {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}

span {
  font-family: "Cormorant Garamond", sans-serif;
}

.title {
  font-size: var(--text-2xl);
}

.subtitle {
  margin-top: var(--spacing-medium);
  font-size: var(--text-xl);
}
</style>
