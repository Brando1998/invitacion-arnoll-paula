<script setup>
import heroImage from "@/assets/images/hero.jpg";
import { couple } from "@/data/wedding.js";
</script>

<template>
  <header class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="hero-overlay">
      <div class="title-card">
        <h1>
          <span>{{ couple.groom }}</span>
          <em>&</em>
          <span>{{ couple.bride }}</span>
        </h1>
      </div>
      <h3>Te invitamos a celebrar nuestra boda</h3>
    </div>
    <div class="torn-edge" aria-hidden="true"></div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: calc(var(--spacing-large) * 2) var(--spacing-large) var(--spacing-large);
  background-size: cover;
  background-position: center 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.hero-overlay {
  background: rgba(251, 249, 241, 0.88);
  border-radius: 4px;
  padding: var(--spacing-large) calc(var(--spacing-large) * 1.5);
  max-width: 600px;
}

.title-card {
  padding: var(--spacing-medium);
  border: 1.5px solid var(--primary-color);
  outline: 1px solid var(--primary-color);
  outline-offset: 6px;
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

h3 {
  color: var(--primary-color);
  font-family: "GreatVibes-Regular", sans-serif;
  padding: var(--spacing-medium);
  font-size: var(--text-xl);
}

.torn-edge {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 24px;
  background-repeat: repeat-x;
  background-size: 300px 24px;
  background-image: url("@/assets/svg/torn-edge.svg");
}

@media (max-width: 768px) {
  h1 span { font-size: 2.2rem; }
  h1 em { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  .hero-overlay { padding: var(--spacing-medium); }
}

@media (max-width: 480px) {
  h1 span { font-size: 1.8rem; }
}
</style>
