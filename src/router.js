import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import Register from "./components/Register.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/register', name: 'register' , component: Register },
    ]
})