<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Login</h2>
        <section>
            <form action="" @submit.prevent="handleSubmit">
                <div class="sm:container mx-auto py-10">
                    <p class="text-red-600 mx-auto p-5">{{ errorMessage }}</p>
                    <div class="grid grid-cols-2 lg:w-1/3 md:w-1/2 sm:w-full mx-auto col-start-4">
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
                    <div class="grid grid-cols-2 lg:w-1/3 md:w-1/2 sm:w-full mx-auto col-start-4">
                        <div class="text-right p-2">
                            <label for="password" >Password <span class="text-red-800">*</span></label>
                            <div class="text-red-800 text-xs" v-if="$v.password.$error">Invalid Password</div>
                        </div>
                        <input type="password" 
                            name="password" 
                            id="password" 
                            :class="{ 'border-red-600' : validateStatus($v.password)}" 
                            v-model.trim="$v.password.$model" 
                            placeholder="Password"
                            />
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn-primary">Login</button>
                </div>
            </form>
        </section>
    </div>
</template>
<script src="./logic.js"></script>