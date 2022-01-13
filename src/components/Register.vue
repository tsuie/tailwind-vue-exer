<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Register</h2>
        <section>
            <form action="">
                <div class="sm:container mx-sm py-10">
                    <div class="grid grid-cols-2 gap-2 w-1/3 mx-auto">
                        <label for="fullname" class="text-right p-5">Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Full name">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/3 mx-auto">
                        <label for="username" class="text-right p-5">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/3 mx-auto">
                        <label for="email" class="text-right p-5">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/3 mx-auto">
                        <label for="password" class="text-right p-5">Password</label>
                        <input type="password" name="email" id="password" placeholder="Password">
                    </div>
                    <div class="grid grid-cols-2 gap-2 w-1/3 mx-auto">
                        <label for="confirm" class="text-right p-5">Confirm Password</label>
                        <input type="password" name="c_password" id="confirm" placeholder="Confirm Password">
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn-primary">Register</button>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Register'
}
</script>