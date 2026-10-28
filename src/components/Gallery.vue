<script setup>
import { ref, onUnmounted } from "vue";
import dividerImage from "@/assets/watercolor/divider.png";
import gallery_1 from "@/assets/images/gallery-1.jpg";
import gallery_2 from "@/assets/images/gallery-2.jpg";
import gallery_3 from "@/assets/images/gallery-3.jpg";
import gallery_4 from "@/assets/images/gallery-4.jpg";
import gallery_5 from "@/assets/images/gallery-5.jpg";
import gallery_6 from "@/assets/images/gallery-6.jpg";
import gallery_7 from "@/assets/images/gallery-7.jpg";
import gallery_8 from "@/assets/images/gallery-8.jpg";
import gallery_9 from "@/assets/images/gallery-9.jpg";

// Para agregar más fotos: cópialas a src/assets/images/, impórtalas arriba
// y agrégalas a esta lista.
const images = ref([
  { src: gallery_1, alt: "Foto 1" },
  { src: gallery_2, alt: "Foto 2" },
  { src: gallery_3, alt: "Foto 3" },
  { src: gallery_4, alt: "Foto 4" },
  { src: gallery_5, alt: "Foto 5" },
  { src: gallery_6, alt: "Foto 6" },
  { src: gallery_7, alt: "Foto 7" },
  { src: gallery_8, alt: "Foto 8" },
  { src: gallery_9, alt: "Foto 9" },
]);

const lightboxIndex = ref(null);

const onKeydown = (event) => {
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPrev();
  if (event.key === "ArrowRight") showNext();
};

const openLightbox = (index) => {
  lightboxIndex.value = index;
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", onKeydown);
};

const closeLightbox = () => {
  lightboxIndex.value = null;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKeydown);
};

const showPrev = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.value.length) % images.value.length;
};

const showNext = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length;
};

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="gallery-container">
    <img :src="dividerImage" alt="" class="divider" aria-hidden="true" />
    <h2>Galería</h2>
    <div class="gallery">
      <div
        class="gallery-item"
        v-for="(image, index) in images"
        :key="index"
        v-reveal="{ delay: (index % 3) * 120 }"
        :style="{ backgroundImage: `url(${image.src})` }"
        role="button"
        tabindex="0"
        :aria-label="`Ampliar ${image.alt}`"
        @click="openLightbox(index)"
        @keydown.enter="openLightbox(index)"
      ></div>
    </div>

    <Teleport to="body">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Cerrar">&times;</button>
        <button class="lightbox-nav lightbox-prev" @click="showPrev" aria-label="Foto anterior">
          &#8249;
        </button>
        <img
          :src="images[lightboxIndex].src"
          :alt="images[lightboxIndex].alt"
          class="lightbox-image"
        />
        <button class="lightbox-nav lightbox-next" @click="showNext" aria-label="Foto siguiente">
          &#8250;
        </button>
        <span class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Contenedor general */
.gallery-container {
  text-align: center;
  padding: var(--spacing-medium);
  margin: var(--spacing-large) 0;
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
  grid-auto-rows: 260px;
  gap: 4px;
  margin-bottom: var(--spacing-large);
}

/* Cada foto es su propio fondo con parallax, igual que la del Hero */
.gallery-item {
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: filter 0.3s ease;
}

.gallery-item:hover,
.gallery-item:focus-visible {
  filter: brightness(1.1);
  outline: none;
}

/* background-attachment: fixed no es confiable en iOS Safari;
   se degrada a scroll normal sin romper el diseño. */
@media (max-width: 768px), (hover: none) {
  .gallery-item {
    background-attachment: scroll;
  }
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(20, 20, 16, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-medium);
  animation: lightbox-fade 0.25s ease;
}

@keyframes lightbox-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-image {
  max-width: min(90vw, 900px);
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: var(--spacing-medium);
  right: var(--spacing-medium);
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 2.5rem;
  line-height: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-prev {
  left: var(--spacing-medium);
}

.lightbox-next {
  right: var(--spacing-medium);
}

.lightbox-counter {
  position: absolute;
  bottom: var(--spacing-medium);
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-base);
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 2rem;
  }
}
</style>
