<template>
  <div class="winner-tags gray-border">
    <WinnerComponent
      v-for="(winner, index) in winners"
      :key="index"
      :winner="winner"
      @remove="removeWinner(index)"
    />
    <span class="badge">Winners</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WinnerComponent from "./WinnerComponent.vue";
import { Participant } from "@/models/Participant";

export default defineComponent({
  name: "WinnersListComponent",
  components: { WinnerComponent },
  props: {
    winners: Array as () => Participant[],
  },
  emits: ["remove-winner"],
  methods: {
    removeWinner(index: number) {
      this.$emit("remove-winner", index);
    },
  },
});
</script>
