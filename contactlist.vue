<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search Contacts" />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="'/contact/' + contact.id">
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
      <router-link to="/add">Add New Contact </router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import { getContacts } from "../store/localStorage";
  
  export default {
    setup() {
      const contacts = ref([]);
      const searchQuery = ref("");
  
      onMounted(() => {
        contacts.value = getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      const filteredContacts = computed(() => {
        return contacts.value.filter(contact =>
          contact.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      return { contacts, searchQuery, filteredContacts };
    }
  };
  </script>
  