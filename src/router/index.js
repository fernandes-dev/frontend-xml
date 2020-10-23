import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/template",
    name: "Template",
    component: () => import("@/views/Template.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/",
        name: "customers",
        component: () => import("@/views/home/Customers.vue"),
        children: [
          {
            path: "/",
            name: "customers-list",
            component: () => import("@/components/customers/ListCustomers.vue"),
          },
          {
            path: "/detalhes/:cnpj",
            name: "customer-details",
            component: () =>
              import("@/components/customers/CustomerDetails.vue"),
          },
        ],
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/home/Profile.vue"),
      },
      {
        path: "/xml/:cnpj",
        name: "xml",
        component: () => import("@/views/home/Xml.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
