<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import countdownBg from "@/assets/images/fondo-cuenta-regresiva.jpeg";
import { countdownDateISO, aboutUs } from "@/data/wedding.js";

// La fecha real se edita en src/data/wedding.js (countdownDateISO)
const weddingDate = new Date(countdownDateISO).getTime();

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

// Actualizar cada segundo
let timer = null;
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

// Limpiar el intervalo cuando se desmonta el componente
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="countdown-container" :style="{ backgroundImage: `url(${countdownBg})` }">
    <div class="intro">
      <h2 class="intro-title">{{ aboutUs.title }}</h2>
      <p class="intro-body">{{ aboutUs.body }}</p>
    </div>

    <div class="countdown">
      <div class="time-box">
        <span class="time">{{ timeLeft.days }}</span>
        <span class="label">Días</span>
      </div>
      <span class="separator" aria-hidden="true">:</span>
      <div class="time-box">
        <span class="time">{{ timeLeft.hours }}</span>
        <span class="label">Horas</span>
      </div>
      <span class="separator" aria-hidden="true">:</span>
      <div class="time-box">
        <span class="time">{{ timeLeft.minutes }}</span>
        <span class="label">Minutos</span>
      </div>
      <span class="separator" aria-hidden="true">:</span>
      <div class="time-box">
        <span class="time">{{ timeLeft.seconds }}</span>
        <span class="label">Segundos</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.countdown-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: var(--spacing-large) var(--spacing-medium);
  margin: var(--spacing-large) 0;
  text-align: center;
}

.intro {
  max-width: 700px;
  margin: 0 auto var(--spacing-large);
}

.intro-title {
  color: var(--primary-color);
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-medium);
}

.intro-body {
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-color);
}

.countdown {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-small);
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-color);
  padding: var(--spacing-medium) var(--spacing-small);
  border-radius: var(--border-radius);
  min-width: 80px;
  flex: 0 1 100px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.time {
  font-family: "Playfair Display", serif;
  font-size: var(--text-xl);
  color: var(--primary-color);
}

.label {
  margin-top: 0.25rem;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-color);
}

.separator {
  font-family: "Playfair Display", serif;
  font-size: var(--text-xl);
  color: var(--accent-color);
  padding-top: var(--spacing-medium);
}

@media (max-width: 480px) {
  .time-box {
    min-width: 70px;
    padding: var(--spacing-small);
  }

  .time {
    font-size: var(--text-lg);
  }

  .label {
    font-size: 0.75rem;
  }

  .separator {
    display: none;
  }
}
</style>
