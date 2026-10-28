<script setup>
import heroImage from "@/assets/images/hero.jpg";
import branchImage from "@/assets/watercolor/branch.png";
import { couple, ceremony } from "@/data/wedding.js";
</script>

<template>
  <header class="hero">
    <img :src="branchImage" alt="" class="leaf leaf-tl" aria-hidden="true" />
    <img :src="branchImage" alt="" class="leaf leaf-tr" aria-hidden="true" />
    <img :src="branchImage" alt="" class="leaf leaf-bl" aria-hidden="true" />

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
  padding: calc(var(--spacing-large) * 2) var(--spacing-large) 0;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.leaf {
  position: absolute;
  width: 280px;
  height: auto;
  pointer-events: none;
  opacity: 0.9;
  z-index: 0;
}

.leaf-tl {
  top: -60px;
  left: -70px;
  transform: rotate(-15deg);
}

.leaf-tr {
  top: -50px;
  right: -80px;
  transform: scaleX(-1) rotate(-10deg);
}

.leaf-bl {
  bottom: -40px;
  left: -90px;
  width: 220px;
  transform: rotate(100deg);
  opacity: 0.6;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: var(--spacing-large) 0;
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
  height: 24px;
  background-repeat: repeat-x;
  background-size: 300px 24px;
  background-image: url("@/assets/svg/torn-edge.svg");
}

.photo-peek {
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center 35%;
}

@media (max-width: 768px) {
  h1 span { font-size: 2.2rem; }
  h1 em { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  .title-card { padding: var(--spacing-medium); }
  .leaf { width: 180px; }
  .leaf-bl { width: 140px; }
  .photo-peek { height: 110px; }
}

@media (max-width: 480px) {
  h1 span { font-size: 1.8rem; }
  .leaf { width: 130px; }
  .leaf-bl { display: none; }
}
</style>
