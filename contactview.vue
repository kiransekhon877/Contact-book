<template>
    <div v-if="contact">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <router-link :to="'/edit/' + contact.id">Edit</router-link>
      <button @click="deleteContact">Delete</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getContacts, saveContacts } from "../store/localStorage";
  import { useRoute, useRouter } from "vue-router";
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = ref(null);
  
      onMounted(() => {
        const contacts = getContacts();
        contact.value = contacts.find(c => c.id == route.params.id);
      });
  
      const deleteContact = () => {
        let contacts = getContacts().filter(c => c.id != contact.value.id);
        saveContacts(contacts);
        router.push("/");
      };
  
      return { contact, deleteContact };
    },
  };
  </script>
  