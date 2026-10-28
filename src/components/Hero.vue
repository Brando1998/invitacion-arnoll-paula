<script setup>
import heroImage from "@/assets/images/hero.jpg";
import headerBg from "@/assets/images/fondo-header.jpeg";
import { couple, ceremony } from "@/data/wedding.js";
</script>

<template>
  <header class="hero" :style="{ backgroundImage: `url(${headerBg})` }">
    <div class="hero-content">
      <div class="title-card">
        <h1>
          <span>{{ couple.groom }}</span>
          <em>&</em>
          <span>{{ couple.bride }}</span>
        </h1>
        <p class="date-line">{{ ceremony.day }}</p>
      </div>
      <h3>Te invitamos a celebrar nuestra boda</h3>
    </div>

    <div class="torn-edge" aria-hidden="true"></div>
    <div class="photo-peek" :style="{ backgroundImage: `url(${heroImage})` }" aria-hidden="true"></div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: calc(var(--spacing-large) * 2) 0 0;
  background-color: var(--background-color);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: var(--spacing-large);
}

.title-card {
  padding: var(--spacing-large) calc(var(--spacing-large) * 1.2);
  border: 2px solid var(--primary-color);
  background: rgba(251, 249, 241, 0.85);
}

h1 span {
  font-family: "Playfair Display", serif;
  font-weight: normal;
  font-size: var(--text-3xl);
  color: var(--primary-color);
  display: block;
}

h1 em {
  font-family: "GreatVibes-Regular", serif;
  font-weight: lighter;
  color: var(--secondary-color);
  font-style: normal;
  display: block;
  font-size: var(--text-2xl);
  margin: 0.2rem 0;
}

.date-line {
  margin-top: var(--spacing-small);
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-lg);
  color: var(--text-color);
}

h3 {
  color: var(--primary-color);
  font-family: "GreatVibes-Regular", sans-serif;
  padding: var(--spacing-medium);
  font-size: var(--text-xl);
}

.torn-edge {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 40px;
  background-repeat: repeat-x;
  background-size: 400px 40px;
  background-image: url("@/assets/svg/torn-edge.svg");
}

.photo-peek {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center 35%;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  h1 span { font-size: 2.2rem; }
  h1 em { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  .title-card { padding: var(--spacing-medium); }
  .torn-edge { height: 28px; background-size: 280px 28px; }
  .photo-peek { height: 150px; }
}

/* background-attachment: fixed no es confiable en iOS Safari;
   se degrada a scroll normal sin romper el diseño. */

@media (max-width: 480px) {
  h1 span { font-size: 1.8rem; }
}
</style>
