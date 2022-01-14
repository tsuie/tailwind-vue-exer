<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Login</h2>
        <section>
            <form action="" @submit.prevent="handleSubmit">
                  <p v-if="errors.length" class="bg-red-900 text-white w-1/3 mx-auto rounded-lg p-5 mt-5">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="(item, index) in errors" :key="index" class="p-2">{{ item  }}</li>
                    </ul>
                </p>
                <div class="sm:container mx-auto py-10">
                    <div class="grid grid-cols-2 lg:w-1/3 md:w-1/2 sm:w-full mx-auto col-start-4">
                        <label for="email" class="text-right p-5 ">Email</label>
                        <input type="email" name="email" v-model="email" id="email" placeholder="Email">
                    </div>
                    <div class="grid grid-cols-2 lg:w-1/3 md:w-1/2 sm:w-full mx-auto">
                        <label for="password" class="text-right p-5">Password</label>
                        <input type="password" name="email" v-model="password" id="password" placeholder="Password">
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn-primary">Login</button>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: '',
            errors: [],
            key: 0
        }
    },
    methods: {
        async handleSubmit() {
            if(this.email && this.password) {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data?.data));
                console.log(response);
                this.$router.push('/dashboard');
            }
            this.errors = [];
            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            }
            
        }
    }
}
</script>