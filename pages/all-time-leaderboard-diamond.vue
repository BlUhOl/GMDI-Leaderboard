<script setup>
import { ALL_DIAMOND } from "@/composables/useSheet";

const headings = ref(null);
const result = ref([]);
const { data } = await ALL_DIAMOND();

headings.value = data.value.values[0];
result.value = [...data.value.values];
result.value.splice(0, 1);

const openLinkInNewTab = (link) => {
  window.open(`https://gdbrowser.com/u/${link}`, "_blank");
};
</script>
<template>
  <title>MyGMDI - All-Time Leaderboard - Diamond</title>

  <div class="w-full h-full bg-background-950 px-2 xl:px-72 py-16">
    <div class="text-sm text-primary-600 breadcrumbs">
      <ul>
        <li><NuxtLink href="/">Home</NuxtLink></li>
        <li class="cursor-default">All-Time Leaderboard - Diamond</li>
      </ul>
    </div>

    <div class="my-2 mb-10">
      <h2 class="text-5xl text-primary-300 underline font-bold">
        All-Time Leaderboard - Diamond
      </h2>
      <p class="text-primary-100 text-xl my-2">
        Top 50 players with the most Diamonds
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="table table-lg">
        <thead class="text-xl bg-rose-900 text-white">
          <tr>
            <th
              class="text-center w-min"
              v-for="col in headings"
              :key="col"
              v-html="col"
            ></th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            :class="{
              'bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 font-bold ':
                index === 0,
              'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 font-bold':
                index === 1,
              'bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 hover:from-orange-800 hover:via-orange-700 hover:to-orange-800 font-bold':
                index === 2,
              'hover:bg-background-900 border-secondary-800 text-accent-50': true,
            }"
            v-for="(col, index) in result"
            :key="col"
          >
            <td class="w-[1vw]">{{ col[0] }}</td>
            <td
              class="w-[10vw] text-lg text-center flex items-center justify-center gap-3"
            >
              <svg
                v-if="index < 3"
                class="size-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
                />
              </svg>
              {{ col[1] }}
            </td>
            <td class="w-full text-lg text-center">
              <span
                @click="openLinkInNewTab(col[2])"
                class="cursor-pointer hover:text-white hover:underline transition-all ease-in hover:after:content-['__🔗']"
                >{{ col[2] }}
              </span>
            </td>
            <td
              class="text-center w-full text-lg flex flex-row justify-center items-center gap-2"
            >
              {{ col[3] }} <img class="size-6" src="../assets/img/diamond.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
