<template>
    <div v-if="contact">
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact">
        <input v-model="contact.firstName" required />
        <input v-model="contact.lastName" required />
        <input v-model="contact.email" required />
        <button type="submit">Update</button>
      </form>
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
  
      const updateContact = () => {
        let contacts = getContacts().map(c => (c.id == contact.value.id ? contact.value : c));
        saveContacts(contacts);
        router.push("/contact/" + contact.value.id);
      };
  
      return { contact, updateContact };
    },
  };
  </script>
  