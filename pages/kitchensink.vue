<!-- pages/index.vue -->

<template>
    <div class="p-32">
      <!-- Your page content -->
      <DiscordWidget />
    </div>
  </template>
  
  <script>
  import DiscordWidget from '~/components/discordembed.vue';
  
  export default {
    components: {
      DiscordWidget,
    },
  };
  </script>
  