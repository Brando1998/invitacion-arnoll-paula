<script setup>
import { ref } from "vue";
import dividerImage from "@/assets/watercolor/divider.png";
import gallery_1 from "@/assets/images/gallery-1.jpg";
import gallery_2 from "@/assets/images/gallery-2.jpg";
import gallery_3 from "@/assets/images/gallery-3.jpg";
import gallery_4 from "@/assets/images/gallery-4.jpg";
import gallery_5 from "@/assets/images/gallery-5.jpg";

// Para agregar más fotos: cópialas a src/assets/images/, impórtalas arriba
// y agrégalas a esta lista.
const images = ref([
  { src: gallery_1, alt: "Foto 1" },
  { src: gallery_2, alt: "Foto 2" },
  { src: gallery_3, alt: "Foto 3" },
  { src: gallery_4, alt: "Foto 4" },
  { src: gallery_5, alt: "Foto 5" },
]);
</script>

<template>
  <div class="gallery-container">
    <img :src="dividerImage" alt="" class="divider" aria-hidden="true" />
    <h2>Galería</h2>
    <div class="gallery">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor general */
.gallery-container {
  text-align: center;
  padding: var(--spacing-medium);
  margin: var(--spacing-large) calc(-2rem - 2vw);
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
}

.divider {
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
}

h2 {
  font-size: var(--text-2xl);
  margin: var(--spacing-large);
  color: var(--text-color);
}

/* Grid de la galería */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  gap: 0;
  margin-bottom: var(--spacing-large);
}

/* Ajuste de imágenes */
.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* Animación al pasar el cursor */
.gallery-item:hover img {
  transform: scale(1.1);
  filter: brightness(1.2);
}
</style>
