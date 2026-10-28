// Directiva v-reveal: agrega una clase cuando el elemento entra en el viewport.
// Uso: <div v-reveal> ...</div>  o  <div v-reveal="{ delay: 150 }"> ...</div>
export const vReveal = {
  mounted(el, binding) {
    el.classList.add("reveal");

    const delay = binding.value?.delay;
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    el._revealObserver = observer;
  },
  unmounted(el) {
    el._revealObserver?.disconnect();
  },
};
