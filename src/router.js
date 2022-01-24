import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Facilities from "./components/Facilities";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/register', name: 'register' , component: Register },
        { path: '/facilities', name: 'facilities' , component: Facilities },
    ]
})