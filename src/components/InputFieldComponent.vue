<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      :class="{ 'is-invalid': error }"
      :max="max"
      required
    />
    <div class="text-danger" v-if="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputFieldComponent",
  props: {
    label: String,
    value: String,
    type: String,
    placeholder: String,
    error: String,
    max: String,
  },
  emits: ["update:value"],
});
</script>
