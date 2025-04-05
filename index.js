import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AddContactView from "../views/AddContactView.vue";
import EditContactView from "../views/EditContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contact/:id", component: ContactView, props: true },
  { path: "/add", component: AddContactView },
  { path: "/edit/:id", component: EditContactView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
