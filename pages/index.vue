<script setup></script>
<template>
  <title>GMDI Leaderboard</title>
  <div
    class="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-background-950 to-background-800"
  >
    <h1 class="text-9xl font-bold">GMDI</h1>
    <h1 class="text-9xl font-semibold">Leaderboard</h1>

    <div class="my-5 flex flex-col items-center justify-center">
      <h2 class="flex flex-row items-center gap-2 text-xl">
        Website by
        <NuxtImg
          class="rounded-full size-8"
          src="https://avatars.githubusercontent.com/u/92349922?v=4"
        />
        <NuxtLink
          class="font-medium underline decoration-dashed hover:decoration-solid"
          href="https://github.com/BlUhOl"
          target="_blank"
          >BlUhOl</NuxtLink
        >
      </h2>
      <h2 class="flex flex-row items-center gap-2 text-xl">
        <NuxtLink
          class="font-medium underline decoration-dashed hover:decoration-solid"
          href="https://docs.google.com/spreadsheets/d/1OiSgtZ_P0fojAVyZErE9na5f6Z5eR-Hu6ICv4-6k85o"
          target="_blank"
          >Data</NuxtLink
        >
        managed by
        <NuxtLink
          class="font-medium underline decoration-dashed hover:decoration-solid"
          href="mailto:abdiharyadi.ah@gmail.com"
          target="_blank"
          >Abdi Haryadi</NuxtLink
        >
      </h2>
    </div>
    <br />
    <h3 class="text-xl">All Time Leaderboard</h3>
    <ul
      class="menu grid grid-cols-3 p-2 drop-shadow-xl bg-background-800 border-2 border-background-700 rounded-xl w-max"
    >
      <li>
        <NuxtLink
          href="/all-time-leaderboard-star"
          class="flex flex-row items-center gap-1 text-base"
          >Star
          <img class="size-5" src="../assets/img/star.png" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          href="/all-time-leaderboard-moon"
          class="flex flex-row items-center gap-1 text-base"
          >Moon
          <img class="size-5" src="../assets/img/moon.png" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          href="/all-time-leaderboard-diamond"
          class="flex flex-row items-center gap-1 text-base"
          >Diamond
          <img class="size-5" src="../assets/img/diamond.png" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          href="/all-time-leaderboard-usercoin"
          class="flex flex-row items-center gap-1 text-base"
          >User Coin
          <img class="size-5" src="../assets/img/silvercoin.png" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          href="/all-time-leaderboard-demon"
          class="flex flex-row items-center gap-1 text-base"
          >Demon
          <img class="size-5" src="../assets/img/demon.png" />
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          href="/all-time-leaderboard-creatorpoint"
          class="flex flex-row items-center gap-1 text-base"
          >Creator Point
          <img class="size-5" src="../assets/img/cp.png" />
        </NuxtLink>
      </li>
    </ul>
  </div>

  <div
    class="w-full h-full px-2 xl:px-72 py-16 bg-gradient-to-b from-background-800 to-background-700"
  >
    <h2 class="text-6xl font-bold text-center w-full mb-12">
      Join Our Community
    </h2>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div>
        <h3 class="text-4xl text-sky-300 font-bold">Facebook</h3>
        <img
          class="w-max h-max my-4 rounded-lg border-2 border-background-700 shadow-xl"
          src="../assets/img/gmdifbimg.png"
        />
        <NuxtLink
          class="btn"
          href="https://www.facebook.com/groups/1662503687329843"
          target="_blank"
          >Join</NuxtLink
        >
      </div>
      <div>
        <h3 class="text-4xl text-blue-400 font-bold">Discord</h3>
        <iframe
          src="https://discord.com/widget?id=190826809896468480&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        <NuxtLink
          class="btn"
          href="https://discord.gg/JaPQzFk"
          target="_blank"
          >Join</NuxtLink
        >
      </div>
    </div>
  </div>

  <div
    class="w-full px-2 xl:px-72 py-16 flex flex-col justify-center items-center"
  >
    <p>
      Want to Contribute this website? visit
      <NuxtLink
        class="underline decoration-dashed hover:decoration-solid"
        href="https://github.com/BlUhOl/GMDI-Leaderboard"
        target="_blank"
        >Github repository</NuxtLink
      >
    </p>
  </div>
</template>
