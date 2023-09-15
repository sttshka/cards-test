<script setup lang="ts">
import { onMounted } from "vue";
import Card from "./Card.vue";
import { cards, fillCards, handleSelect } from "./cards";

onMounted(() => {
  fillCards();
});
</script>

<template>
  <div class="card-game">
    <div class="card-game__list">
      <Card
        v-for="(card, index) in cards"
        :card="card"
        @card:click="(e) => handleSelect(index, e)"
      />
    </div>
    <button @click="handleSelect(1, true)">Play again</button>
  </div>
</template>
