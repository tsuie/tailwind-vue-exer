<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Register</h2>
        <section>
            <form action="" @submit.prevent="handleSubmit">
                <div class="sm:container mx-sm py-10">
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <label for="fullname" class="text-right p-5">Name</label>
                        <input type="text" name="fullname" id="fullname" v-model="fullName" placeholder="Full name">
                        <small v-if="!fullName" ></small>
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <label for="username" class="text-right p-5">Username</label>
                        <input type="text" name="username" id="username" v-model="username" placeholder="Username">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <label for="email" class="text-right p-5">Email</label>
                        <input type="email" name="email" id="email" v-model="email" placeholder="Email">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <label for="password" class="text-right p-5">Password</label>
                        <input type="password" name="email" id="password" v-model="password" placeholder="Password">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <label for="confirm" class="text-right p-5">Confirm Password</label>
                        <input type="password" name="c_password" id="confirm" v-model="c_password" placeholder="Confirm Password">
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn-primary" >Register</button>
                </div>
            </form>
        </section>
    </div>
</template>
<script src="./logic.js"></script>