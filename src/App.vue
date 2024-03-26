<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main class="flex items-center">
    <div>
      <header>
        <h2 class="text-3xl font-semibold">Welcome to Lynch Header Kit</h2>
        <p>Hello everyone, back again at Lynch Header Kit. we provide several types of header designs that we have designed. and you can take it for free on this website.</p>
      </header>

      <Routing class="grid gap-2">
        <RouterLink to="/">Header 1</RouterLink>
        <RouterLink to="/route2">Header 2</RouterLink>
        <RouterLink to="/route3">Header 3</RouterLink>
        <RouterLink to="/route4">Header 4</RouterLink>
        <RouterLink to="/route5">Header 5</RouterLink>
      </Routing>
    </div>

    <RouterView>
      <RouterView />
    </RouterView>
  </main>
</template>
