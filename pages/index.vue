<script setup></script>
<template>
  <title>GMDI Leaderboard</title>
  <div
    class="flex flex-col justify-center items-center w-full py-48 2xl:py-0 2xl:h-screen bg-blend-color bg-gradient-to-b from-background-950/70 to-background-800/50"
  >
    <h1
      class="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary-600 to-primary-400 bg-clip-text text-white/0"
    >
      GMDI
    </h1>
    <h1
      class="text-5xl md:text-9xl font-semibold bg-gradient-to-br from-amber-400 to-amber-200 bg-clip-text text-white/0"
    >
      Leaderboard
    </h1>

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

    <div
      class="menu grid grid-cols-2 lg:grid-cols-3 justify-center md:p-2 md:gap-2 drop-shadow-xl bg-background-800/50 backdrop-blur-sm border-2 border-background-700 rounded-xl w-max"
    >
      <h3
        class="text-xl col-span-2 mb-1 lg:col-span-3 font-bold text-white w-full text-center shadow-lg p-1 bg-amber-700 rounded-lg"
      >
        All-time Leaderboard
      </h3>

        <NuxtLink
          href="/all-time-leaderboard-star"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Star
          <img class="size-5" src="../assets/img/star.png" />
        </NuxtLink>

        <NuxtLink
          href="/all-time-leaderboard-moon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Moon
          <img class="size-5" src="../assets/img/moon.png" />
        </NuxtLink>

        <NuxtLink
          href="/all-time-leaderboard-diamond"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Diamond
          <img class="size-5" src="../assets/img/diamond.png" />
        </NuxtLink>

        <NuxtLink
          href="/all-time-leaderboard-usercoin"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >User Coin
          <img class="size-5" src="../assets/img/silvercoin.png" />
        </NuxtLink>

        <NuxtLink
          href="/all-time-leaderboard-demon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Demon
          <img class="size-5" src="../assets/img/demon.png" />
        </NuxtLink>

        <NuxtLink
          href="/all-time-leaderboard-creatorpoint"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Creator Point
          <img class="size-5" src="../assets/img/cp.png" />
        </NuxtLink>

    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 my-2">
      <div
        class="menu grid grid-cols-2 lg:grid-cols-3 justify-center md:p-2 md:gap-2 drop-shadow-xl bg-background-800/50 backdrop-blur-sm border-2 border-background-700 rounded-xl w-max"
      >
        <h3
          class="text-xl col-span-2 lg:col-span-3 font-bold text-white w-full text-center shadow-lg p-1 bg-green-700 rounded-lg"
        >
          Weekly Leaderboard
        </h3>
        <NuxtLink
          href="/weekly-leaderboard-star"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Star
          <img class="size-5" src="../assets/img/star.png" />
        </NuxtLink>

        <NuxtLink
          href="/weekly-leaderboard-moon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Moon
          <img class="size-5" src="../assets/img/moon.png" />
        </NuxtLink>

        <NuxtLink
          href="/weekly-leaderboard-diamond"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Diamond
          <img class="size-5" src="../assets/img/diamond.png" />
        </NuxtLink>

        <NuxtLink
          href="/weekly-leaderboard-usercoin"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >User Coin
          <img class="size-5" src="../assets/img/silvercoin.png" />
        </NuxtLink>

        <NuxtLink
          href="/weekly-leaderboard-demon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Demon
          <img class="size-5" src="../assets/img/demon.png" />
        </NuxtLink>

        <NuxtLink
          href="/weekly-leaderboard-creatorpoint"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Creator Point
          <img class="size-5" src="../assets/img/cp.png" />
        </NuxtLink>
      </div>

      <div
        class="menu grid grid-cols-2 lg:grid-cols-3 justify-center md:p-2 md:gap-2 drop-shadow-xl bg-background-800/50 backdrop-blur-sm border-2 border-background-700 rounded-xl w-max"
      >
        <h3
          class="text-xl col-span-2 lg:col-span-3 font-bold text-white w-full text-center shadow-lg p-1 bg-blue-700 rounded-lg"
        >
          Monthly Leaderboard
        </h3>
        <NuxtLink
          href="/monthly-leaderboard-star"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Star
          <img class="size-5" src="../assets/img/star.png" />
        </NuxtLink>

        <!-- <NuxtLink
          href="/monthly-leaderboard-moon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Moon
          <img class="size-5" src="../assets/img/moon.png" />
        </NuxtLink> -->

        <NuxtLink
          href="/monthly-leaderboard-diamond"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Diamond
          <img class="size-5" src="../assets/img/diamond.png" />
        </NuxtLink>

        <NuxtLink
          href="/monthly-leaderboard-usercoin"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >User Coin
          <img class="size-5" src="../assets/img/silvercoin.png" />
        </NuxtLink>

        <NuxtLink
          href="/monthly-leaderboard-demon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Demon
          <img class="size-5" src="../assets/img/demon.png" />
        </NuxtLink>

        <NuxtLink
          href="/monthly-leaderboard-creatorpoint"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Creator Point
          <img class="size-5" src="../assets/img/cp.png" />
        </NuxtLink>
      </div>

      <div
        class="menu grid grid-cols-2 xl:grid-cols-3 justify-center md:p-2 md:gap-2 drop-shadow-xl bg-background-800/50 backdrop-blur-sm border-2 border-background-700 rounded-xl w-max"
      >
        <h3
          class="text-xl col-span-2 lg:col-span-3 font-bold text-white w-full text-center shadow-lg p-1 bg-pink-700 rounded-lg"
        >
          Yearly Leaderboard
        </h3>
        <NuxtLink
          href="/yearly-leaderboard-star"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Star
          <img class="size-5" src="../assets/img/star.png" />
        </NuxtLink>

        <!-- <NuxtLink
          href="/yearly-leaderboard-moon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Moon
          <img class="size-5" src="../assets/img/moon.png" />
        </NuxtLink> -->

        <NuxtLink
          href="/yearly-leaderboard-diamond"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Diamond
          <img class="size-5" src="../assets/img/diamond.png" />
        </NuxtLink>

        <NuxtLink
          href="/yearly-leaderboard-usercoin"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >User Coin
          <img class="size-5" src="../assets/img/silvercoin.png" />
        </NuxtLink>

        <NuxtLink
          href="/yearly-leaderboard-demon"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Demon
          <img class="size-5" src="../assets/img/demon.png" />
        </NuxtLink>

        <NuxtLink
          href="/yearly-leaderboard-creatorpoint"
          class="flex flex-row items-center btn-ghost btn w-full gap-1 text-base"
          >Creator Point
          <img class="size-5" src="../assets/img/cp.png" />
        </NuxtLink>
      </div>

    </div>
  </div>

  <div
    class="bg-primary-500/80 w-full py-8 px-2 xl:px-72 text-lg text-primary-100"
  >
    <p>
      Situs web ini mengambil data dari google sheet menggunakan google api dan
      menampilkannya. Saya (BlUhOl) tidak memiliki akses ke data tersebut.
    </p>
    <br />
    <p>
      Jika Anda ingin meminta/menambahkan nama Anda ke leaderboard silakan baca
      informasi di
      <NuxtLink
        class="font-medium underline decoration-dashed hover:decoration-solid"
        href="https://docs.google.com/spreadsheets/d/1OiSgtZ_P0fojAVyZErE9na5f6Z5eR-Hu6ICv4-6k85o"
        target="_blank"
        >google sheets</NuxtLink
      >
      atau bergabung dengan server
      <NuxtLink
        class="font-medium underline decoration-dashed hover:decoration-solid"
        href="/#discord"
        >Discord GMDI</NuxtLink
      >
      atau bertanya langsung ke Abdi menggunakan email
    </p>
  </div>

  <div
    class="w-full h-full px-2 xl:px-72 py-16 bg-gradient-to-b from-background-800/80 to-background-700/80"
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
      <div id="discord">
        <h3 class="text-4xl text-blue-400 font-bold">Discord</h3>

        <discordembed />
      </div>
    </div>
  </div>

  <div
    class="w-full px-2 xl:px-72 py-10 flex flex-col justify-center items-center bg-black/50 backdrop-blur-md"
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
