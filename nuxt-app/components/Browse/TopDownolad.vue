<template>
  <BaseTheTitle title="Top" text="Downloaded " data-aos="zoom-in-left" />
  <div
    class="flex justify-between items-center py-5 border-b-solid border-b-[1px] border-b-lightDark"
    v-for="item in topDownload"
    data-aos="zoom-in-left"
  >
    <div class="flex py-3 gap-x-5">
      <img :src="item.src.toString()" class="rounded-[30px] w-[35%]" />
      <div>
        <h4 class="font-bold text-white">{{ item.title }}</h4>
        <p class="text-light">{{ item.type }}</p>
        <div class="flex gap-x-4">
          <div class="flex items-center text-white gap-x-1">
            <Icon
              name="material-symbols:star-rounded"
              size="20px"
              color="#ffff00"
            />
            <span class="text-[14px]">{{ item.count }}</span>
          </div>
          <div class="flex text-white gap-x-1">
            <Icon name="ph:download-simple-fill" size="20px" color="#ec6090" />
            <span class="text-[14px]">{{ item.follows }}</span>
          </div>
        </div>
      </div>
    </div>
    <button class="p-4 text-center rounded-full bg-lightDark">
      <Icon name="mdi:download" color="#ec6090" size="20px"> </Icon>
    </button>
  </div>
  <BaseTheButton
    title="View All Games"
    class="text-center bg-transparent !text-primary font-bold mt-3 w-full hover:!bg-transparent"
  />
</template>

<script setup lang="ts">
// import { storeToRefs } from "pinia";

// import { usePopularStore } from "~/stores/popular";
// const popularStore = usePopularStore();
// const { populars } = storeToRefs(popularStore);
// const { pending } = useLazyAsyncData(() => popularStore.list());
const populars = [
  {
    id: 1,
    title: "Fortnite",
    type: "Battle S",
    src: "/images/popular-01.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/fortnite.jpeg",
    video: "/images/feature-right.jpg",
    screenshots: [
      "/images/details-01.jpg",
      "/images/details-02.jpg",
      "/images/details-03.jpg",
    ],
  },
  {
    id: 2,
    title: "PubG",
    type: "Battle S",
    src: "/images/popular-02.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/pubg-1.jpg",
    video: "/images/pubg-2.jpg",
    screenshots: [
      "/images/pubg-6-1.jpg",
      "/images/pubg-4.jpg",
      "/images/pubg-5.jpg",
    ],
  },
  {
    id: 3,
    title: "Dota2",
    type: "Steam-X",
    src: "/images/popular-03.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/dota-1.jpg",
    video: "/images/dota-2.jpg",
    screenshots: [
      "/images/dota-3.jpg",
      "/images/dota-4.jpg",
      "/images/dota-5.jpg",
    ],
  },
  {
    id: 4,
    title: "CS-GO",
    type: "Legendary",
    src: "/images/popular-04.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/CSGO-1.jpg",
    video: "/images/CSGO-2.jpg",
    screenshots: [
      "/images/CSGO-3.png",
      "/images/CSGO-4.jpeg",
      "/images/CSGO-5.jpg",
    ],
  },
  {
    id: 5,
    title: "MiniCraft",
    type: "Legendary",
    src: "/images/popular-05.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/minicraft-1.webp",
    video: "/images/minicraft-2.jpeg",
    screenshots: [
      "/images/mincraft-3.webp",
      "/images/minecraft-4.jpg",
      "/images/minecraft-5.jpg",
    ],
  },
  {
    id: 6,
    title: "Eagles Fly",
    type: "Matrix Games",
    src: "/images/popular-06.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/eagle-1.jpg",
    video: "/images/eagle-2.jpg",
    screenshots: [
      "/images/eagle-3.jpg",
      "/images/eagle-4.png",
      "/images/eagle-5.jpg",
    ],
  },
  {
    id: 7,
    title: "Warface",
    type: "Max 3D",
    src: "/images/popular-07.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/warface-1.jpeg",
    video: "/images/warface-2.jpg",
    screenshots: [
      "/images/Warface-3.webp",
      "/images/warface-4.png",
      "/images/warface-5.jpg",
    ],
  },
  {
    id: 8,
    title: "Warcraft",
    type: "Legend",
    src: "/images/popular-08.jpg",
    count: "4.8",
    follows: "2.3",
    action: "Action",
    size: "36GB",
    photo: "/images/warcraft-1.webp",
    video: "/images/warcraft-2.jpg",
    screenshots: [
      "/images/warcraft-3.webp",
      "/images/warcraft-2.jpg",
      "/images/warcraft-5.webp",
    ],
  },
];
const topDownload = populars.slice(0, 3);
</script>

<style scoped></style>
