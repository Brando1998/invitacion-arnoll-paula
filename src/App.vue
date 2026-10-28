<script setup>
import { RouterView, RouterLink } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <!-- Encabezado -->
    <Header />

    <!-- Área principal -->
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

<style>
/* Sin "scoped": las clases de <Transition> se aplican al nodo raíz
   de la vista enrutada, que no lleva el atributo de scope de App.vue. */
.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.25s ease;
}

.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
}
</style>
