<template>
  <div class="card">
    <h3>REGISTER FORM</h3>
    <p>Please fill in all the fields.</p>
    <form @submit.prevent="registerParticipant" novalidate>
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="localParticipant.name"
          @input="validateName()"
          type="text"
          class="form-control"
          placeholder="Enter user name"
          :class="{ 'is-invalid': nameError }"
          required
        />
        <div class="text-danger" v-if="nameError">{{ nameError }}</div>
      </div>
      <div class="form-group">
        <label>Date of Birth</label>
        <input
          v-model="localParticipant.dateOfBirth"
          @input="validateDateOfBirth()"
          type="date"
          class="form-control"
          :max="today"
          :class="{ 'is-invalid': dateError }"
          required
        />
        <div class="text-danger" v-if="dateError">{{ dateError }}</div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          v-model="localParticipant.email"
          @input="validateEmail()"
          type="email"
          class="form-control"
          placeholder="Enter email"
          :class="{ 'is-invalid': emailError }"
          required
        />
        <div class="text-danger" v-if="emailError">{{ emailError }}</div>
      </div>
      <div class="form-group">
        <label>Phone number</label>
        <input
          v-model="localParticipant.phoneNumber"
          @input="validatePhoneNumber()"
          type="tel"
          class="form-control"
          placeholder="Enter phone number"
          :class="{ 'is-invalid': phoneError }"
          required
        />
        <div class="text-danger" v-if="phoneError">{{ phoneError }}</div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="hasValidationErrors"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Validator } from "@/misc/Validator";
import { Participant } from "@/models/Participant";

export default defineComponent({
  name: "RegistrationForm",
  props: {
    newParticipant: Object as () => Participant,
    today: String,
  },
  emits: ["register-participant", "update:newParticipant"],
  setup(props, { emit }) {
    const localParticipant = ref<Participant>({
      name: props.newParticipant?.name || "",
      dateOfBirth: props.newParticipant?.dateOfBirth || "",
      email: props.newParticipant?.email || "",
      phoneNumber: props.newParticipant?.phoneNumber || "",
    });

    const nameError = ref<string>("");
    const dateError = ref<string>("");
    const emailError = ref<string>("");
    const phoneError = ref<string>("");

    watch(localParticipant, (newVal) => {
      emit("update:newParticipant", newVal);
    });

    const validateName = () => {
      nameError.value = Validator.validateName(localParticipant.value.name);
    };

    const validateDateOfBirth = () => {
      const today = props.today || new Date().toISOString().split("T")[0];
      dateError.value = Validator.validateDateOfBirth(
        localParticipant.value.dateOfBirth,
        today
      );
    };

    const validateEmail = () => {
      emailError.value = Validator.validateEmail(localParticipant.value.email);
    };

    const validatePhoneNumber = () => {
      phoneError.value = Validator.validatePhoneNumber(
        localParticipant.value.phoneNumber
      );
    };

    const registerParticipant = () => {
      validateName();
      validateDateOfBirth();
      validateEmail();
      validatePhoneNumber();

      if (
        !nameError.value &&
        !dateError.value &&
        !emailError.value &&
        !phoneError.value
      ) {
        emit("register-participant");
      }
    };

    return {
      localParticipant,
      nameError,
      dateError,
      emailError,
      phoneError,
      registerParticipant,
      validateName,
      validateDateOfBirth,
      validateEmail,
      validatePhoneNumber,
    };
  },
});
</script>
