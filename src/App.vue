<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="grid py-14 gap-5 justify-center">
    <div class="text-center">
      <header>
        <h2 class="text-4xl font-semibold">Welcome to Lynch Header Kit</h2>
        <p class="w-2/4 mt-5 leading-7 mx-auto">Hello everyone, back again at Lynch Header Kit. we provide several types of header designs that we have designed. and you can take it for free on this website.</p>
      </header>

      <Routing class="flex gap-7 justify-center items-center mt-14">
        <RouterLink class="p-3 rounded-lg" :class="{'bg-orange-400 transition-all duration-300 animate-bg-change': $route.path === '/'}" to="/">Header 1</RouterLink>
        <RouterLink class="p-3 rounded-lg" :class="{'bg-orange-400 transition-all duration-300 animate-bg-change': $route.path === '/route2'}" to="/route2">Header 2</RouterLink>
        <RouterLink class="p-3 rounded-lg" :class="{'bg-orange-400 transition-all duration-300 animate-bg-change': $route.path === '/route3'}" to="/route3">Header 3</RouterLink>
        <RouterLink class="p-3 rounded-lg" :class="{'bg-orange-400 transition-all duration-300 animate-bg-change': $route.path === '/route4'}" to="/route4">Header 4</RouterLink>
        <RouterLink class="p-3 rounded-lg" :class="{'bg-orange-400 transition-all duration-300 animate-bg-change': $route.path === '/route5'}" to="/route5">Header 5</RouterLink>
      </Routing>
    </div>

    <div class="flex justify-center mt-20">
      <RouterView />
    </div>
  </div>
</template>

<style>
@keyframes bg-change {
  0% {
    transform: scale(1);
 }
  50% {
    transform: scale(1.1);
 }
  100% {
    transform: scale(1);
 }
}

.animate-bg-change {
 animation: bg-change 0.3s ease-in-out;
}
</style>
