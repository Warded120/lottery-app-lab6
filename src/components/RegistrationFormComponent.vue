<template>
  <form @submit.prevent="submit">
    <InputFieldComponent
      label="Name"
      v-model="participant.name"
      placeholder="Enter user name"
      :error="nameError"
    />
    <InputFieldComponent
      label="Date of Birth"
      v-model="participant.dateOfBirth"
      type="date"
      :max="today"
      :error="dateError"
    />
    <InputFieldComponent
      label="Email"
      v-model="participant.email"
      type="email"
      placeholder="Enter email"
      :error="emailError"
    />
    <InputFieldComponent
      label="Phone number"
      v-model="participant.phoneNumber"
      type="tel"
      placeholder="Enter phone number"
      :error="phoneError"
    />
    <ButtonComponent label="Save" :disabled="false" @click="submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputFieldComponent from "./InputFieldComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { Participant } from "@/models/Participant";

export default defineComponent({
  name: "RegistrationFormComponent",
  components: { InputFieldComponent, ButtonComponent },
  props: {
    today: String,
    nameError: String,
    dateError: String,
    emailError: String,
    phoneError: String,
  },
  emits: ["register"],
  setup(props, { emit }) {
    const participant = ref<Participant>({
      name: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    });

    const submit = () => {
      // Emit the participant data to parent component
      emit("register", participant.value);
    };

    return { participant, submit };
  },
});
</script>
