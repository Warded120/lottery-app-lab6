<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Email</th>
        <th>Phone number</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(participant, index) in participants" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ participant.name }}</td>
        <td>{{ participant.dateOfBirth }}</td>
        <td>{{ participant.email }}</td>
        <td>{{ participant.phoneNumber }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Participant } from "@/models/Participant";

export default defineComponent({
  name: "ParticipantsTableComponent",
  props: {
    participants: Array as () => Participant[],
  },
});
</script>
