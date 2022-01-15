
<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Register</h2>
        <section>
            <form action="" @submit.prevent="handleSubmit">
                <div class="sm:container mx-auto py-10">
                    <p class="text-red-600 mx-auto p-5">{{ errorMessage }}</p>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <div class="text-right p-2">
                            <label for="fullname" >Name <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.fullname.$error">Required full name</div>
                        </div>
                        <input type="text" 
                            name="fullname" 
                            id="fullname" 
                            :class="{ 'border-red-600' : validateStatus($v.fullname)}" 
                            v-model.trim="$v.fullname.$model" 
                            placeholder="Full name" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <div class="text-right p-2">
                            <label for="username" >Username <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.username.$error">Required username</div>
                        </div>
                        <input type="text" 
                            name="username" 
                            id="username" 
                            :class="{ 'border-red-600' : validateStatus($v.username)}" 
                            v-model.trim="$v.username.$model" 
                            placeholder="Username" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <div class="text-right p-2">
                            <label for="email" >Email <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.email.$error">Invalid email</div>
                        </div>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            :class="{ 'border-red-600' : validateStatus($v.email)}" 
                            v-model.trim="$v.email.$model" 
                            placeholder="Email" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <div class="text-right p-2">
                            <label for="password" >Password <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.password.$error">Invalid Password</div>
                        </div>
                        <input type="password" 
                            name="password" 
                            id="password" 
                            :class="{ 'border-red-600' : validateStatus($v.password)}" 
                            v-model.trim="$v.password.$model" 
                            placeholder="Password" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/2 mx-auto">
                        <!-- <label for="confirm" class="text-right p-2">Confirm Password <span class="text-red-800">*</span></label>
                        <input type="password" name="c_password" id="confirm" v-model.trim="c_password" placeholder="Confirm Password"> -->
                        <div class="text-right p-2">
                            <label for="c_password" >Password <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.c_password.$error">Confirmation doesnt match password</div>
                        </div>
                        <input type="password" 
                            name="password" 
                            id="c_password" 
                            :class="{ 'border-red-600' : validateStatus($v.c_password)}" 
                            v-model.trim="$v.c_password.$model" 
                            placeholder="Confirm password" />
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