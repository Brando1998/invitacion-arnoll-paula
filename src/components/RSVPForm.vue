<script setup>
import cornerOrnamentImage2 from "@/assets/svg/corner-ornament-2.svg";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament-accent.svg";
import videoImage from "@/assets/svg/notes.svg"; // puedes cambiar por un ícono de cámara si lo tienes
import { virtual } from "@/data/wedding.js";

// estilos de las esquinas, igual que en los otros bloques
const cornerStyles = [
  { top: "-6px", left: "-6px", transform: "rotate(0deg)" },
  { top: "-6px", right: "-12px", transform: "rotate(90deg)" },
  { bottom: "-6px", left: "-12px", transform: "rotate(-90deg)" },
  { bottom: "-6px", right: "-6px", transform: "rotate(180deg)" },
];
</script>

<template>
  <div class="videoconf-section" v-if="virtual.enabled">
    <img
      v-for="(style, index) in cornerStyles"
      :key="index"
      :src="cornerOrnamentImage2"
      :style="style"
      class="corner-ornament"
      alt="Decoración de esquina"
    />

    <div class="shadow">
      <img class="ico" :src="videoImage" alt="videoconferencia" />
      <span class="title">Videoconferencia</span>
      <img
        :src="centerBottomOrnamentImage"
        alt="center ornament"
        class="center-ornament"
      />
      <span class="subtitle">
        Si no puedes asistir de manera presencial, <br />
        te invitamos a acompañarnos por videoconferencia.
        <template v-if="virtual.password"> (CONTRASEÑA: {{ virtual.password }})</template>
      </span>

      <a
        :href="virtual.link"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
      >
        Unirme a la transmisión
      </a>
    </div>
  </div>
</template>

<style scoped>
.videoconf-section {
  margin: var(--spacing-large) auto;
  position: relative;
  border: 5px dotted var(--accent-color);
  border-radius: 20px;
  text-align: center;
  padding: var(--spacing-medium);
  max-width: 800px;
}

.shadow {
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: var(--spacing-medium);
}

.corner-ornament {
  position: absolute;
  width: 30px;
  height: auto;
}

.ico {
  width: 80px;
  margin-bottom: var(--spacing-small);
}

.title {
  display: block;
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-small);
  color: var(--text-color);
  line-break: anywhere;
}

.center-ornament {
  width: 80px;
  margin: var(--spacing-small) auto;
  display: block;
}

.subtitle {
  display: block;
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-medium);
  font-family: "Cormorant Garamond", sans-serif;
}
</style>
