<template>
  <div
    class="flex w-full fixed z-50 bg-background-800/80 backdrop-blur-sm flex-row items-center justify-between py-1 px-2 lg:px-52 xl:px-72 border-b-2 border-primary-700"
  >
    <NuxtLink
      tabindex="0"
      href="/"
      class="text-2xl text-white font-medium hover:font-bold hover:text-primary-400 transition-all ease-in duration-75"
      >GMDI Leaderboard</NuxtLink
    >

    <div class="hidden sm:block">
      <div class="dropdown">
        <div tabindex="1" role="button" class="btn btn-ghost text-white">
          All Time
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            class="size-5 stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <ul
          class="dropdown-content z-[1] menu p-2 drop-shadow-xl bg-background-800 border-2 border-background-700 rounded-xl w-max"
        >
          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-star" class="flex flex-row items-center gap-1 text-base"
              >Star
              <img class="size-5" src="../assets/img/star.png" />
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-moon" class="flex flex-row items-center gap-1 text-base"
              >Moon
              <img class="size-5" src="../assets/img/moon.png" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-diamond" class="flex flex-row items-center gap-1 text-base"
              >Diamond
              <img class="size-5" src="../assets/img/diamond.png" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-usercoin" class="flex flex-row items-center gap-1 text-base"
              >User Coin
              <img class="size-5" src="../assets/img/silvercoin.png" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-demon" class="flex flex-row items-center gap-1 text-base"
              >Demon
              <img class="size-5" src="../assets/img/demon.png" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink href="/all-time/all-time-leaderboard-creatorpoint" class="flex flex-row items-center gap-1 text-base"
              >Creator Point
              <img class="size-5" src="../assets/img/cp.png" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
