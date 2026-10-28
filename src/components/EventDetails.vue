<script setup>
import fechaBg from "@/assets/images/fonfo-fecha.jpeg";
import branchImage from "@/assets/watercolor/branch.png";
import { ceremony, reception } from "@/data/wedding.js";

import { ref, onMounted } from "vue";

const showInformation = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  showInformation.value = params.has("invite");
});
</script>
<template>
  <div class="event-details">
    <div class="details-content" :style="{ backgroundImage: `url(${fechaBg})` }">
      <img :src="branchImage" alt="" class="branch branch--left" aria-hidden="true" />
      <img :src="branchImage" alt="" class="branch branch--right" aria-hidden="true" />

      <div class="info-block">
        <h2 class="section-title">{{ ceremony.title }}</h2>
        <div class="columns">
          <div class="column">
            <span class="label">Día</span>
            <span class="value">{{ ceremony.day }}</span>
          </div>
          <div class="column">
            <span class="label">Lugar</span>
            <span class="value">{{ ceremony.place }}</span>
          </div>
          <div class="column">
            <span class="label">Dirección</span>
            <span class="value">{{ ceremony.address }}</span>
          </div>
        </div>
      </div>

      <div class="info-block info-block--reception" v-if="showInformation">
        <h2 class="section-title">{{ reception.title }}</h2>
        <div class="columns">
          <div class="column">
            <span class="label">Día</span>
            <span class="value">{{ reception.day }}</span>
          </div>
          <div class="column">
            <span class="label">Lugar</span>
            <span class="value">{{ reception.place }}</span>
          </div>
          <div class="column">
            <span class="label">Dirección</span>
            <span class="value">{{ reception.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  position: relative;
  margin-bottom: var(--spacing-large);
}

.details-content {
  position: relative;
  color: var(--text-color);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: var(--spacing-large) var(--spacing-medium);
}

.branch {
  position: absolute;
  top: 50%;
  width: 150px;
  opacity: 0.85;
  pointer-events: none;
}

.branch--left {
  left: 0;
  transform: translateY(-50%);
}

.branch--right {
  right: 0;
  transform: translateY(-50%) scaleX(-1);
}

.info-block {
  position: relative;
  z-index: 1;
}

.info-block--reception {
  margin-top: var(--spacing-large);
  padding-top: var(--spacing-large);
  border-top: 1px solid rgba(124, 148, 115, 0.3);
}

.section-title {
  color: var(--primary-color);
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-large);
}

.columns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-large);
  max-width: 700px;
  margin: 0 auto;
}

.column {
  flex: 1 1 160px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-sm);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-color);
}

.value {
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-lg);
  color: var(--text-color);
}

@media (max-width: 768px) {
  .branch {
    width: 90px;
    opacity: 0.55;
  }
  .columns {
    gap: var(--spacing-medium);
  }
}
</style>
