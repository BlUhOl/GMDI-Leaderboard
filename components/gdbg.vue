
<template>
  <div class="fixed w-full h-screen bg-cover opacity-25 -z-10" :class="background"></div>
</template>

<script setup>
const bgimg = [
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/iht61vlwrq7f44tim0el6/game_bg_01_001-uhd.png?rlkey=fmic7bnawu9emh0wb57an9g2z&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/38kb33fptr463p377eqk8/game_bg_02_001-uhd.png?rlkey=ov5dhptlzsh5ertjmq6v8bc3r&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/zykr5jej3pd8p4gzovypq/game_bg_03_001-uhd.png?rlkey=kslon0q88vhxvfs9v0ta5ry1z&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/mo9rgva8nd3ci7h2dfwfm/game_bg_04_001-uhd.png?rlkey=bn548hg3g720dhlwyi903x1fz&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/splbjxyjlq91ocya49m2m/game_bg_05_001-uhd.png?rlkey=6jwq1w151507oiefdwxju9rb0&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/vx5qasj2r7iu0ea17epms/game_bg_06_001-uhd.png?rlkey=77yeac0j6llom9f60ls2i931j&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/5f6t2rz8g2w6psegwyoe4/game_bg_07_001-uhd.png?rlkey=6n6gqwc9j8wv9wlnhfue6b5si&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/u5rrt6ns37aoe4916w9va/game_bg_08_001-uhd.png?rlkey=lhpvex64qdsk8i4g6s860mx2z&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/mzlxqkue8yfsupddztm53/game_bg_09_001-uhd.png?rlkey=vm5u2u30qusoq43ox832qbhk7&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/btke7e7e5nawex9x3n6ay/game_bg_11_001-uhd.png?rlkey=355q78lfz9b9xr9d07ubnqk31&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/hl85ry2168fjityjxp72j/game_bg_12_001-uhd.png?rlkey=h4o0zie8p4qk67pkuc40orj3g&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/hh7fpblz9dhkso5t944ti/game_bg_14_001-uhd.png?rlkey=rbiu7fljah15r7khd3iox8pgs&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/u4l59ntxjv99sxjgn5jsc/game_bg_15_001-uhd.png?rlkey=oh3879nur4qk6w2y4tve25i3w&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/e8f2dm9fereqrug5ne86k/game_bg_16_001-uhd.png?rlkey=t56wjsuj2qzwxmoh3hs8uoumh&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/he8dwug455qtumg4mx57w/game_bg_17_001-uhd.png?rlkey=vr1efqgdsiik7bmpkzr0xf738&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/6ifup9ss6nnpszo28eg40/game_bg_18_001-uhd.png?rlkey=8ans0sph62k5k583elivrs23e&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/iroja5acdnhly6m9nylle/game_bg_19_001-uhd.png?rlkey=whswpbqsmek9la4zb0o0nlosu&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/43ip64s42zkir4ijkxqs6/game_bg_20_001-uhd.png?rlkey=m9c6w6olr1aq4bmzyklap4glq&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/8ss4rpmwss7grwe9xin8x/game_bg_21_001-uhd.png?rlkey=y0cu9a43a895x0tnroq5fyp11&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/r3cmv4a4bl1u9mevxmlvq/game_bg_22_001-uhd.png?rlkey=810zxghb13o445n4sr8b5wxdj&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/ym7axysr184w1zauu1aox/game_bg_23_001-uhd.png?rlkey=knii12943j8ekvqvcph5ohlt0&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/uieaqujqzpazu521ek3ji/game_bg_24_001-uhd.png?rlkey=vzvso2kjn2u5phqlreeopvy2t&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/s7orsusv1bx6vwvetj63o/game_bg_25_001-uhd.png?rlkey=pckun6fa127dnclw0okek10rz&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/3mfvs0nsuogsoot71nw0a/game_bg_26_001-uhd.png?rlkey=18cg6fvql8cv4z37dz3u828b6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/8kbafbipluxmmmf1r8wvj/game_bg_27_001-uhd.png?rlkey=ks81265j18hmfv8go4ajtlest&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/sms2y117pgavfjfzwltff/game_bg_28_001-uhd.png?rlkey=p6fukvyurz70j910r9ae1ghkm&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/ol2fbfvvaaloq9tyajkwx/game_bg_29_001-uhd.png?rlkey=ogns8z0vofx808lknrqsksre6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/04a49l3xy0ke2nj43vdye/game_bg_30_001-uhd.png?rlkey=jkeozstj7u4koaxv3l9ayb7ld&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/3satnxuh71sektnaxvtb6/game_bg_31_001-uhd.png?rlkey=1ex8va0baky3v06lca1tl1sq1&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/nwfke35rt4ib9ad7udly3/game_bg_32_001-uhd.png?rlkey=eutwrns16y4dq4ytkicql5ejp&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/p5p5j9icjdrs8hmp90928/game_bg_33_001-uhd.png?rlkey=6m33ivylu2zw22jyylbu3cguf&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/d3px52ss9soyfsux4uzpu/game_bg_34_001-uhd.png?rlkey=aniounk5xz6p2g5xnjjukclhz&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/0y1fu6tkpadlgfmqfobix/game_bg_35_001-uhd.png?rlkey=40cxrbtboje9qjxobftqjinvm&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/asuw5nohihoyuhj6522vp/game_bg_36_001-uhd.png?rlkey=yd86aq1p3t5axrao270vaf6m6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/g57czhjivoyyhtk6d95me/game_bg_37_001-uhd.png?rlkey=bm3g0xjtkdb0hu9f3azkqxv75&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/v79lmtzs8436hfrpll9s1/game_bg_38_001-uhd.png?rlkey=0106ohzdunvg1vcehse2jmo21&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/n3011y0thymnalpvj0kqv/game_bg_39_001-uhd.png?rlkey=rjum4zr1arzqcda11653eq7ih&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/lqwobkcbe86ndsld132d7/game_bg_40_001-uhd.png?rlkey=aij5er3av6yxihovqjk279voe&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/79fok8nu7973g02seyy6y/game_bg_41_001-uhd.png?rlkey=i6ff76yyypyu7yy0t7b9ea356&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/47d4jp5w2l9ifc4w02iys/game_bg_42_001-uhd.png?rlkey=dg4vc676jm4r8quk7mtnhoqy6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/vqfm5dbmnjf1mlv7ul08b/game_bg_43_001-uhd.png?rlkey=co0w284a0anojh71qr3jzdrxa&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/s1cac9g0cfb514qcysa75/game_bg_44_001-uhd.png?rlkey=tr92vpjpx8qyhs1tk4qrbwd7c&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/s2dtm3yvxy3xtmr1b8ym6/game_bg_45_001-uhd.png?rlkey=ntgxw5sakbn6miw9rcmaesrbt&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/kj7bwcr2glt1l4i63hvlc/game_bg_46_001-uhd.png?rlkey=rj9jo30fmaygkkbmk1h30b27p&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/y948fcqghugxskcrlygdz/game_bg_47_001-uhd.png?rlkey=vof2wnchvi1xm5xlypknitnxe&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/u6go49e1jo23g0xn9xzzd/game_bg_48_001-uhd.png?rlkey=nn10wheogfvpd994fdvq0ly6x&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/98w08mediczry6gci8uyk/game_bg_49_001-uhd.png?rlkey=9vgpiv0batwjw2m6vvzmkb75e&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/bddcxrlmi5s193ggfe0ou/game_bg_50_001-uhd.png?rlkey=abkvyh8gyq7ja477ylpzbv9ei&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/9g7cmmbs7m5c1o1233nat/game_bg_51_001-uhd.png?rlkey=1zeu07zz61u2s3ccqgzdy5vf6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/ko7z2g9h1zmhnepw17qvj/game_bg_52_001-uhd.png?rlkey=9anndofivs9l2zfeq1xfsgfjg&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/le3eckb68ba4xolbqee5o/game_bg_53_001-uhd.png?rlkey=kbjn7n77yvmr8t9cyno6dyyc4&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/wpuug6vcedwtzmmvo0q0x/game_bg_54_001-uhd.png?rlkey=9wjokprp65w1mbjdclzibva55&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/3h1d3r60izet5x2p4dw8j/game_bg_55_001-uhd.png?rlkey=8648mhblry22weripzzi8pnw0&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/kw3yhgigf1bv0g23nzono/game_bg_56_001-uhd.png?rlkey=yl4kgju534rfubgdaolvevus6&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/pb6eybv36gjm7ov0ankbo/game_bg_57_001-uhd.png?rlkey=ruvn9e1upexr1p4jl2pc819jq&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/jxh697c3lcfbjvfsoqd9e/game_bg_58_001-uhd.png?rlkey=ppwkiardx14dq19bkysy4sov8&dl=1')]",
  },
  {
    background: "bg-[url('https://www.dropbox.com/scl/fi/18o406jkpx26pacam4ely/game_bg_59_001-uhd.png?rlkey=t9t2og5e36w5e67t6cnk9yrfi&dl=1')]",
  },
];

const { background } =
  bgimg[Math.floor(Math.random() * bgimg.length)]
</script>
