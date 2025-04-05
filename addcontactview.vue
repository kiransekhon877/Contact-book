<template>
    <div>
      <h2>Add Contact </h2>
      <form @submit.prevent="addContact">
        <input v-model="firstName" placeholder="Kirandeep" required />
        <input v-model="lastName" placeholder="Kaur" required />
        <input v-model="email" placeholder="kiransekhon877@gmail.com" required />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { getContacts, saveContacts } from "../store/localStorage";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const firstName = ref("");
      const lastName = ref("");
      const email = ref("");
      const router = useRouter();
  
      const addContact = () => {
        const contacts = getContacts();
        const newContact = {
          id: Date.now(),
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        };
        contacts.push(newContact);
        saveContacts(contacts);
        router.push("/");
      };
  
      return { firstName, lastName, email, addContact };
    },
  };
  </script>
  