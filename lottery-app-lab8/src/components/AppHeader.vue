<script setup lang="ts">

import AppNavigation from "@/components/AppNavigation.vue";
</script>

<template>
  <div class="header">
    <div class="header__title">
      <h1>Lottery</h1>
    </div>
    <div class="headerNavigation">
      <AppNavigation></AppNavigation>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid black;
}

.headerNavigation {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>