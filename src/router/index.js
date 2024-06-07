import { createRouter,createWebHashHistory } from "vue-router";
import HomeComponent from "../views/home.vue";
import IntroductionComponent from "../views/introduction.vue";
import PredictComponent from "../views/predict.vue";
import ContactComponent from "../views/contact.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/introduction",
    name: "introduction",
    component: IntroductionComponent,
  },
  { path: "/predict", name: "predict", component: PredictComponent },
  { path: "/contact", name:"contact",component: ContactComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  base: "/",
  mode: "hash",
  routes,
});

export default router;
