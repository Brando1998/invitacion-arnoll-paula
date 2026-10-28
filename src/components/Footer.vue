<script setup>
import { ref, onMounted } from "vue";
import cornerOrnamentImage2 from "@/assets/watercolor/branch.png";
import centerBottomOrnamentImage from "@/assets/svg/center-bottom-ornament-accent.svg";
import heartImage from "@/assets/svg/heart.svg"; // Puedes usar otro ícono si quieres

const cornerStyles = [
  { top: "-18px", left: "-18px", transform: "rotate(0deg)" },
  { top: "-18px", right: "-18px", transform: "scaleX(-1)" },
  { bottom: "-18px", left: "-18px", transform: "scaleY(-1)" },
  { bottom: "-18px", right: "-18px", transform: "scale(-1, -1)" },
];

const name = ref("");
const cupo = ref("");

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  name.value = params.get("name") || "Querido invitado";
  cupo.value = params.get("cupo") || "1";
});
</script>

<template>
  <div class="invite-footer">
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
      <span class="title">Ten presente la siguiente información</span>

      <img
        :src="centerBottomOrnamentImage"
        alt="center ornament"
        class="center-ornament"
      />

      <span class="subtitle">Nombres</span>
      <span>{{ name }}</span>

      <span class="subtitle">Cupo</span>
      <span v-if="cupo == 1">Este es tu cupo reservado: {{ cupo }}</span>
      <span v-else>Estos son tus cupos reservados: {{ cupo }}</span>

      <span class="closing">💍 ¡Esperamos verte en nuestra boda! 💍</span>
    </div>
  </div>
</template>

<style scoped>
.invite-footer {
  color: var(--text-color);
  margin: var(--spacing-large) auto;
  text-align: center;
  max-width: 600px;
  position: relative;
    border-radius: 20px;
}

.shadow {
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
  margin: var(--spacing-medium);
  border-radius: 20px;
  padding: var(--spacing-medium);
  background: white;
}

.ico {
  width: 80px;
  margin-bottom: var(--spacing-small);
}

.corner-ornament {
  position: absolute;
  width: 70px;
  height: auto;
  z-index: 1;
}

.center-ornament {
  width: 80px;
  margin: var(--spacing-medium) auto;
  display: block;
}

span {
  display: block;
  width: 100%;
  margin-bottom: 0.8rem;
  font-family: "Cormorant Garamond", sans-serif;
}

.title {
  font-size: var(--text-2xl);
  font-weight: bold;
}

.subtitle {
  margin-top: var(--spacing-medium);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--accent-color);
}

.closing {
  margin-top: var(--spacing-medium);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--accent-color);
}
</style>
