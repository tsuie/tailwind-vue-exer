<template>
    <!-- navbar goes here -->
    <nav class="bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!-- logo -->
            <div>
              <a href="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span class="font-bold">Vue App</span>
              </a>
            </div>

            <!-- primary nav -->
            <div class="hidden md:flex items-center space-x-1">
              <a href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
              <a href="/dashboard" class="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</a>
              <a href="/facilities" class="py-5 px-3 text-gray-700 hover:text-gray-900" v-if="isLoggedIn">Facilities</a>
            </div>
          </div>

          <!-- secondary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="/login" class="py-5 px-3" v-if="!isLoggedIn">Login</a>
            <a 
              href="/register" 
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              v-if="!isLoggedIn"
            >Signup</a>
            <a href="#">{{displayName()}}</a>
            <button 
              v-if="isLoggedIn"
              @click="logout"
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >Logout</button>
          </div>

          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- mobile menu -->
      <div class="mobile-menu hidden md:hidden">
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
      </div>
    </nav>
</template>
<script src="./logic.js"></script>