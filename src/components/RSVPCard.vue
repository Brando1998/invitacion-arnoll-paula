<script setup>
import { computed } from "vue";
import branchImage from "@/assets/watercolor/branch.png";
import sectionBg from "@/assets/images/fondo-cuenta-regresiva.jpeg";
import { couple, ceremony, rsvp } from "@/data/wedding.js";

const whatsappHref = computed(() => {
  const digits = rsvp.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(rsvp.message)}`;
});
</script>

<template>
  <div class="rsvp-section" :style="{ backgroundImage: `url(${sectionBg})` }">
    <div class="rsvp-card">
      <img :src="branchImage" alt="" class="branch-icon" aria-hidden="true" />
      <span class="eyebrow">Confirma tu asistencia</span>
      <h2 class="names">{{ couple.groom }} &amp; {{ couple.bride }}</h2>
      <p class="date">{{ ceremony.day }}</p>
      <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="rsvp-button">
        RSVP
      </a>
    </div>
  </div>
</template>

<style scoped>
.rsvp-section {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: var(--spacing-large) var(--spacing-medium);
  margin: var(--spacing-large) 0;
  display: flex;
  justify-content: center;
}

.rsvp-card {
  position: relative;
  background: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: calc(var(--spacing-large) * 1.2) var(--spacing-large);
  max-width: 420px;
  width: 100%;
  text-align: center;
}

.branch-icon {
  width: 70px;
  margin: 0 auto var(--spacing-medium);
  display: block;
}

.eyebrow {
  display: block;
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: var(--spacing-small);
}

.names {
  color: var(--primary-color);
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-small);
}

.date {
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-lg);
  color: var(--text-color);
  margin-bottom: var(--spacing-medium);
}

.rsvp-button {
  display: inline-block;
  padding: var(--spacing-small) calc(var(--spacing-large) * 1.2);
  border-radius: 999px;
  background: var(--accent-color);
  color: white;
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-base);
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: background 0.2s ease;
}

.rsvp-button:hover {
  background: var(--primary-color);
}
</style>
