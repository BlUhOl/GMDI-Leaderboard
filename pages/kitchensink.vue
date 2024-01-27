<!-- <template>
  <div>
    <div class="p-32">
      Your page content
       <DiscordWidget />
     </div>
    <div>
      <p v-if="userprofile">{{ userprofile.username }}</p>
      <p v-if="userprofile">{{ userprofile.playerID }}</p>
      <p v-if="userprofile">{{ userprofile.accountID }}</p>
    </div>
  </div>
</template> -->

<!-- <script>
import { ref } from "vue";
import gd from "gj-boomlings-api";
import DiscordWidget from "~/components/discordembed.vue";

export default {
  components: {
    DiscordWidget,
  },
  data() {
    return {
      userprofile: null,
    };
  },
  async created() {
    try {
      const profile = await gd.getProfile("BlUhOl");
      this.userprofile = profile;
      console.log(this.userprofile);
    } catch (error) {
      console.error(error);
    }
  },
};
</script> -->


<template>
  
</template>
