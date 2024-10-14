<template>
  <span class="badge blue">
    {{ winner.name }}
    <button @click="$emit('remove')" class="btn btn-sm btn-danger">
      &times;
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Participant } from "@/models/Participant";

export default defineComponent({
  name: "WinnerComponent",
  props: {
    winner: {
      type: Object as () => Participant,
      required: true,
    },
  },
});
</script>
