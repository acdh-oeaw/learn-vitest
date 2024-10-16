<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  name: string;
}>();

const count = ref(1);
const buttonCount = ref(0);
</script>

<template>
  <div>
    <div>The count is: {{ count }}!</div>
    <button
      @click="
        count++;
        buttonCount++;
      "
    >
      Increment
    </button>
    <button
      @click="
        count--;
        buttonCount++;
      "
    >
      Decrement
    </button>
    <div>
      The button has been clicked
      <span>{{ buttonCount }}</span> times
    </div>
  </div>
</template>
