
import { createRouter, createWebHashHistory} from "vue-router"

import Home from "../components/Home.vue";
import UoLogin from "../components/UoLogin.vue";
import FileBar from "../components/FileBar.vue"

const router = [
  { path: "/", name: "home", component: UoLogin },
  { path: "/login", name: "login", component: Home },
  { path: "/bar", name: "bar", component: FileBar },
]

export default createRouter({
  history: createWebHashHistory(),
  routes: router
})
