<template>
    <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Dashboard Page</h2>
    <p v-if="user">Hello {{user.fullName}}</p>
  </div>
</template>
<script>

export default {
    name: "Dashboard",
    data() {
      return {
        user: null
      };
    },
    created() {
      // const response = await axios.get('user');
      // this.user = response.data;
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user);
    }
}
</script>