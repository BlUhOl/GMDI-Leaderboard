<template>
  <div
    class="flex w-full fixed z-50 bg-background-800/80 backdrop-blur-sm flex-row items-center justify-between py-1 px-2 lg:px-52 xl:px-72 border-b-2 border-primary-700"
  >
    <NuxtLink
      tabindex="0"
      href="/"
      class="text-2xl py-1 md:py-0 text-white font-medium hover:font-bold hover:text-primary-400 transition-all ease-in duration-75"
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
            <NuxtLink
              href="/all-time-leaderboard-star"
              class="flex flex-row items-center gap-1 text-base"
              >Star
              <img class="size-5" src="https://www.dropbox.com/scl/fi/haeqlpvkg2b1wpk7nwj3u/star.png?rlkey=j6fiwsc36p9545xs6seqxs0v7&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/all-time-leaderboard-moon"
              class="flex flex-row items-center gap-1 text-base"
              >Moon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/63vw5awjmurzn9mdnaiwr/moon.png?rlkey=qebweeao6php82nzvnzv2vn10&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/all-time-leaderboard-diamond"
              class="flex flex-row items-center gap-1 text-base"
              >Diamond
              <img class="size-5" src="https://www.dropbox.com/scl/fi/xj92rjllbyhx9ndu32jv0/diamond.png?rlkey=jcc5z84lhmsl1oooglihwcx46&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/all-time-leaderboard-usercoin"
              class="flex flex-row items-center gap-1 text-base"
              >User Coin
              <img class="size-5" src="https://www.dropbox.com/scl/fi/8ry1a04thr00ddw0ohg8n/silvercoin.png?rlkey=zgkvupj1hqwvnxjhd67uo8lwj&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/all-time-leaderboard-demon"
              class="flex flex-row items-center gap-1 text-base"
              >Demon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/tx79o6y04uph7spyz3rkd/demon.png?rlkey=hjtyc0tqzg28ypdpjd6z2czkk&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/all-time-leaderboard-creatorpoint"
              class="flex flex-row items-center gap-1 text-base"
              >Creator Point
              <img class="size-5" src="https://www.dropbox.com/scl/fi/0pa2dylqk2z9eqwh63i9o/cp.png?rlkey=ctpboot3o6n6jdfmhbvjm1u30&dl=1" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <div tabindex="1" role="button" class="btn btn-ghost text-white">
          Weekly
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
            <NuxtLink
              href="/weekly-leaderboard-star"
              class="flex flex-row items-center gap-1 text-base"
              >Star
              <img class="size-5" src="https://www.dropbox.com/scl/fi/haeqlpvkg2b1wpk7nwj3u/star.png?rlkey=j6fiwsc36p9545xs6seqxs0v7&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/weekly-leaderboard-moon"
              class="flex flex-row items-center gap-1 text-base"
              >Moon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/63vw5awjmurzn9mdnaiwr/moon.png?rlkey=qebweeao6php82nzvnzv2vn10&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/weekly-leaderboard-diamond"
              class="flex flex-row items-center gap-1 text-base"
              >Diamond
              <img class="size-5" src="https://www.dropbox.com/scl/fi/xj92rjllbyhx9ndu32jv0/diamond.png?rlkey=jcc5z84lhmsl1oooglihwcx46&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/weekly-leaderboard-usercoin"
              class="flex flex-row items-center gap-1 text-base"
              >User Coin
              <img class="size-5" src="https://www.dropbox.com/scl/fi/8ry1a04thr00ddw0ohg8n/silvercoin.png?rlkey=zgkvupj1hqwvnxjhd67uo8lwj&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/weekly-leaderboard-demon"
              class="flex flex-row items-center gap-1 text-base"
              >Demon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/tx79o6y04uph7spyz3rkd/demon.png?rlkey=hjtyc0tqzg28ypdpjd6z2czkk&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/weekly-leaderboard-creatorpoint"
              class="flex flex-row items-center gap-1 text-base"
              >Creator Point
              <img class="size-5" src="https://www.dropbox.com/scl/fi/0pa2dylqk2z9eqwh63i9o/cp.png?rlkey=ctpboot3o6n6jdfmhbvjm1u30&dl=1" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <div tabindex="1" role="button" class="btn btn-ghost text-white">
          Monthly
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
            <NuxtLink
              href="/monthly-leaderboard-star"
              class="flex flex-row items-center gap-1 text-base"
              >Star
              <img class="size-5" src="https://www.dropbox.com/scl/fi/haeqlpvkg2b1wpk7nwj3u/star.png?rlkey=j6fiwsc36p9545xs6seqxs0v7&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink href="/monthly-leaderboard-moon" class="flex flex-row items-center gap-1 text-base"
              >Moon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/63vw5awjmurzn9mdnaiwr/moon.png?rlkey=qebweeao6php82nzvnzv2vn10&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/monthly-leaderboard-diamond"
              class="flex flex-row items-center gap-1 text-base"
              >Diamond
              <img class="size-5" src="https://www.dropbox.com/scl/fi/xj92rjllbyhx9ndu32jv0/diamond.png?rlkey=jcc5z84lhmsl1oooglihwcx46&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/monthly-leaderboard-usercoin"
              class="flex flex-row items-center gap-1 text-base"
              >User Coin
              <img class="size-5" src="https://www.dropbox.com/scl/fi/8ry1a04thr00ddw0ohg8n/silvercoin.png?rlkey=zgkvupj1hqwvnxjhd67uo8lwj&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/monthly-leaderboard-demon"
              class="flex flex-row items-center gap-1 text-base"
              >Demon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/tx79o6y04uph7spyz3rkd/demon.png?rlkey=hjtyc0tqzg28ypdpjd6z2czkk&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/monthly-leaderboard-creatorpoint"
              class="flex flex-row items-center gap-1 text-base"
              >Creator Point
              <img class="size-5" src="https://www.dropbox.com/scl/fi/0pa2dylqk2z9eqwh63i9o/cp.png?rlkey=ctpboot3o6n6jdfmhbvjm1u30&dl=1" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <div tabindex="1" role="button" class="btn btn-ghost text-white">
          Yearly
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
            <NuxtLink
              href="/yearly-leaderboard-star"
              class="flex flex-row items-center gap-1 text-base"
              >Star
              <img class="size-5" src="https://www.dropbox.com/scl/fi/haeqlpvkg2b1wpk7nwj3u/star.png?rlkey=j6fiwsc36p9545xs6seqxs0v7&dl=1" />
            </NuxtLink>
          </li>

          <!-- <li>
            <NuxtLink href="/yearly-leaderboard-moon" class="flex flex-row items-center gap-1 text-base"
              >Moon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/63vw5awjmurzn9mdnaiwr/moon.png?rlkey=qebweeao6php82nzvnzv2vn10&dl=1" />
            </NuxtLink>
          </li> -->

          <li>
            <NuxtLink
              href="/yearly-leaderboard-diamond"
              class="flex flex-row items-center gap-1 text-base"
              >Diamond
              <img class="size-5" src="https://www.dropbox.com/scl/fi/xj92rjllbyhx9ndu32jv0/diamond.png?rlkey=jcc5z84lhmsl1oooglihwcx46&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/yearly-leaderboard-usercoin"
              class="flex flex-row items-center gap-1 text-base"
              >User Coin
              <img class="size-5" src="https://www.dropbox.com/scl/fi/8ry1a04thr00ddw0ohg8n/silvercoin.png?rlkey=zgkvupj1hqwvnxjhd67uo8lwj&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/yearly-leaderboard-demon"
              class="flex flex-row items-center gap-1 text-base"
              >Demon
              <img class="size-5" src="https://www.dropbox.com/scl/fi/tx79o6y04uph7spyz3rkd/demon.png?rlkey=hjtyc0tqzg28ypdpjd6z2czkk&dl=1" />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              href="/yearly-leaderboard-creatorpoint"
              class="flex flex-row items-center gap-1 text-base"
              >Creator Point
              <img class="size-5" src="https://www.dropbox.com/scl/fi/0pa2dylqk2z9eqwh63i9o/cp.png?rlkey=ctpboot3o6n6jdfmhbvjm1u30&dl=1" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <button class="btn btn-ghost" onclick="my_modal_2.showModal()">?</button>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <div class="flex flex-row justify-between items-center">
            <h3 class="font-bold text-lg text-primary-300">About</h3>
            <p class="py-4 text-xs text-background-800">
              Press ESC key or click outside to close
            </p>
          </div>
          <div>
            <h2>
              Website by
              <NuxtLink
                class="font-medium underline decoration-dashed hover:decoration-solid"
                href="https://github.com/BlUhOl"
                target="_blank"
                >BlUhOl</NuxtLink
              >
            </h2>

            <h2 class="">
              <NuxtLink
                class="font-medium underline decoration-dashed hover:decoration-solid"
                href="https://docs.google.com/spreadsheets/d/1OiSgtZ_P0fojAVyZErE9na5f6Z5eR-Hu6ICv4-6k85o"
                target="_blank"
                >Data</NuxtLink
              >
              managed by
              <NuxtLink
                class="font-medium underline decoration-dashed hover:decoration-solid"
                href="https://www.instagram.com/abdiharyadi"
                target="_blank"
                >Abdi Haryadi</NuxtLink
              >
            </h2>
            <br />
            <h2>Background image, game icon by Geometry Dash - RobTopGames</h2>
            <br />
            <h2>UI icons SVG provided by FontAwesome, Heroicons</h2>
            <br />
            <h2>Built on top Nuxt, with Tailwind CSS and DaisyUI library</h2>
            <br />
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
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>
