<!-- components/DiscordWidget.vue -->

<template>
  <div
    class="w-full my-4 border-2 border-background-700 shadow-xl rounded-lg"
    v-if="widgetData && widgetData.presence_count !== null"
  >
    <div class="p-4 bg-[#576aec] w-full rounded-t-lg">
      <div class="flex flex-row items-center justify-between gap-12">
        <div class="flex flex-row items-center gap-5">
          <img class="size-12 rounded-full" src="https://www.dropbox.com/scl/fi/12ymsfxf1t8k7qcozgo77/gmdidcpfp.png?rlkey=y3ofty5uexoxfxjkwghk2vi6t&dl=1" />
          <div>
            <h3 class="text-white text-xl flex flex-row md:items-center gap-2 fill-white">
              <svg
                class="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                /></svg>
                Geometry Dash Indonesia
            </h3>
            <p>Members Online: {{ widgetData.presence_count }}</p>
          </div>
        </div>
        <div>
          <NuxtLink
            class="btn"
            href="https://discord.gg/eN3KgScqBk"
            target="_blank"
            >Join
          </NuxtLink>
        </div>
      </div>
    </div>

    <div>
      <div v-if="widgetData.members.length > 0">
        <div
          class="grid grid-cols-2 gap-x-4 py-2 px-4 h-[30vh] bg-slate-900 overflow-y-scroll"
        >
          <div
            class="w-full select-none flex flex-row justify-between items-center mb-1 hover:bg-slate-800 rounded-badge"
            v-for="member in widgetData.members"
            :key="member.id"
          >
            <div class="flex flex-row gap-3">
              <div class="relative">
                <img class="rounded-full size-6" :src="member.avatar_url" />
                <div
                  :class="{
                    'size-2 rounded-full absolute right-0 bottom-0 bg-green-400 animate-ping delay-300':
                      member.status === 'online',
                    'size-2 rounded-full absolute right-0 bottom-0 bg-amber-400 animate-ping':
                      member.status === 'idle',
                    'size-2 rounded-full absolute right-0 bottom-0 bg-red-400 animate-ping':
                      member.status === 'dnd',
                  }"
                ></div>
                <div
                  :class="{
                    'size-2 rounded-full absolute right-0 bottom-0 ring-1 ring-slate-900 shadow-lg bg-green-400':
                      member.status === 'online',
                    'size-2 rounded-full absolute right-0 bottom-0 ring-1 ring-slate-900 shadow-lg bg-amber-400':
                      member.status === 'idle',
                    'size-2 rounded-full absolute right-0 bottom-0 ring-1 ring-slate-900 shadow-lg bg-red-400':
                      member.status === 'dnd',
                  }"
                ></div>
              </div>
              <span class="truncate text-slate-200">{{ member.username }}</span>
            </div>

            <span
              class="text-xs truncate text-slate-600 pr-2"
              v-if="member.game && member.game.name"
              >{{ member.game.name }}</span
            >
          </div>
        </div>
        <div class="bg-slate-800 text-slate-700 text-sm px-4 py-1 rounded-b-lg">
          Discord embed by BlUhOl
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      widgetData: null,
    };
  },
  async created() {
    // Fetch Discord widget data when the component is created
    await this.fetchDiscordWidget();
  },
  methods: {
    async fetchDiscordWidget() {
      try {
        const response = await fetch(
          "https://discord.com/api/guilds/190826809896468480/widget.json"
        );
        const jsonData = await response.json();

        // Ensure the data structure is as expected
        if (jsonData && typeof jsonData === "object") {
          this.widgetData = jsonData;
        } else {
          console.error("Invalid data structure received:", jsonData);
        }
      } catch (error) {
        console.error("Error fetching Discord widget data:", error.message);
      }
    },
  },
};
</script>
