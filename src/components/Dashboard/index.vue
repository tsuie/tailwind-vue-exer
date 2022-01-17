<template>
    <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Dashboard Page</h2>
    <p v-if="user">Name: {{user.name}}</p>
    <p v-if="user">Email: {{user.email}}</p>
    <p v-if="user">Username: {{user.username}}</p>
    <p v-if="user">ID: {{user.id}}</p>
    <p v-if="user">Type: {{user.user_type}}</p>
  </div>
</template>
<script src="./logic.js"></script>