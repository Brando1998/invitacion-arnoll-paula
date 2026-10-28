<script setup>
import cornerOrnamentImage2 from "@/assets/watercolor/branch.png";
import heartImage from "@/assets/svg/heart.svg";
import partyImage from "@/assets/svg/party.svg";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament-accent.svg";
import { ceremony, reception } from "@/data/wedding.js";
const cornerStyles = [
  { top: "-18px", left: "-18px", transform: "rotate(0deg)" }, // Esquina superior izquierda
  { top: "-18px", right: "-18px", transform: "scaleX(-1)" }, // Esquina superior derecha
  { bottom: "-18px", left: "-18px", transform: "scaleY(-1)" }, // Esquina inferior izquierda
  { bottom: "-18px", right: "-18px", transform: "scale(-1, -1)" }, // Esquina inferior derecha
];

import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>
<template>
  <div class="event-details two-columns">
    <div class="info-container">
      <img
        v-for="(style, index) in cornerStyles"
        :key="index"
        :src="cornerOrnamentImage2"
        :style="style"
        class="corner-ornament"
        alt="Decoración de esquina"
      />
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
      <img
        v-for="(style, index) in cornerStyles"
        :key="index"
        :src="cornerOrnamentImage2"
        :style="style"
        class="corner-ornament"
        alt="Decoración de esquina"
      />
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

.corner-ornament {
  position: absolute;
  width: 70px;
  height: auto;
  z-index: 1;
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
