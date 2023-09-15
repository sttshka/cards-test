<script setup lang="ts">
import { ICard, Nullable } from "@/types";
import { getCardValue, getImageUrl, getSuiteIcon, getCardColor } from "./cards";

const emit = defineEmits<{
  (e: "card:click", value: boolean): void;
}>();

defineProps<{
  card: Nullable<ICard>;
}>();
</script>

<template>
  <button
    class="card"
    v-if="card"
    :class="{ card_open: card.isOpen }"
    @click="emit('card:click', !card.isOpen)"
  >
    <div class="card__back">
      <div
        class="card__back-pattern"
        :style="{
          backgroundImage: `url(${getImageUrl('card-pattern', 'svg')}`,
        }"
      ></div>

      <div class="card__back-overlay"></div>
    </div>
    <div class="card__front">
      <div
        class="card__front-content"
        :style="{ color: getCardColor(card.suit) }"
      >
        <div>{{ getCardValue(card) }}</div>
        <component :is="getSuiteIcon(card.suit)" />
      </div>
    </div>
  </button>
</template>

<style lang="scss" scoped></style>
