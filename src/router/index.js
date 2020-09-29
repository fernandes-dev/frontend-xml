import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/clients",
        name: "Clients",
        component: () => import("@/views/home/Clients.vue")
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/home/Profile.vue")
      },
      {
        path: "/xml/:cnpj",
        name: "Xml",
        component: () => import("@/views/home/Xml.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
