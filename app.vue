<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <gdbg />
    <Navbar />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'GMDI Leaderboard',
  ogTitle: 'GMDI Leaderboard',
  description: 'Indonesian Geometry Dash player Leaderboard',
  ogDescription: 'Indonesian Geometry Dash player Leaderboard',
  ogImage: '/assets/img/page_thumb.png',
})
</script>

<!-- <script>
export default {
  head() {
    return {
      title: 'GMDI Leaderboard',
      meta: [
        { hid: 'description', name: 'description', content: 'Indonesian Geometry Dash player Leaderboard' },
        { hid: 'og:image', property: 'og:image', content: '/assets/img/page_thumb/png' },
        { name: 'theme-color', content: '#3498db' }, // Replace with your desired color
      ],
    };
  },
};
</script> -->