<script setup>
import { story } from "@/data/wedding.js";
</script>

<template>
  <div class="our-story">
    <div class="story-block story-block--she">
      <h2 class="story-title">
        Ella
        <span class="divider" aria-hidden="true">
          <span class="line"></span>
          <svg class="heart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.4558,12.7507 C21.5147,10.7488 21.5147,7.50319 19.4558,5.50135 C17.397,3.4995 14.0588,3.49958 11.9999975,5.50142 C9.94109,3.49958 6.60301,3.49958 4.54415,5.50142 C2.48528,7.50326 2.48528,10.7489 4.54415,12.7507 C4.55132,12.7577 4.55851,12.7647 4.56571,12.7716 L11.9999975,20.0000012 L19.4558,12.7507 Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="line"></span>
        </span>
      </h2>
      <p class="story-text">{{ story.she }}</p>
    </div>

    <div class="story-block story-block--he">
      <h2 class="story-title">
        Él
        <span class="divider" aria-hidden="true">
          <span class="line"></span>
          <svg class="heart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.4558,12.7507 C21.5147,10.7488 21.5147,7.50319 19.4558,5.50135 C17.397,3.4995 14.0588,3.49958 11.9999975,5.50142 C9.94109,3.49958 6.60301,3.49958 4.54415,5.50142 C2.48528,7.50326 2.48528,10.7489 4.54415,12.7507 C4.55132,12.7577 4.55851,12.7647 4.56571,12.7716 L11.9999975,20.0000012 L19.4558,12.7507 Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="line"></span>
        </span>
      </h2>
      <p class="story-text">{{ story.he }}</p>
    </div>
  </div>
</template>

<style scoped>
.our-story {
  max-width: 900px;
  margin: var(--spacing-large) auto;
  padding: 0 var(--spacing-medium);
}

.story-block {
  margin-bottom: calc(var(--spacing-large) * 1.5);
}

.story-block:last-child {
  margin-bottom: 0;
}

.story-block--he {
  text-align: right;
  margin-left: auto;
}

.story-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-small);
  color: var(--primary-color);
  margin-bottom: var(--spacing-medium);
}

.story-block--he .story-title {
  justify-content: flex-end;
}

.divider {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.line {
  display: inline-block;
  width: 32px;
  height: 1px;
  background: var(--accent-color);
}

.heart-icon {
  width: 18px;
  height: 18px;
  color: var(--accent-color);
}

.story-text {
  font-family: "Cormorant Garamond", serif;
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-color);
  max-width: 600px;
}

.story-block--she .story-text {
  margin-right: auto;
}

.story-block--he .story-text {
  margin-left: auto;
}

@media (max-width: 640px) {
  .story-block--he {
    text-align: left;
    margin-left: 0;
  }

  .story-block--he .story-title {
    justify-content: flex-start;
  }

  .story-block--he .story-text {
    margin-left: 0;
  }
}
</style>
