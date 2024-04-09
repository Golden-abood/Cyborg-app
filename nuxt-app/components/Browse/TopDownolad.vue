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
import { storeToRefs } from "pinia";

import { usePopularStore } from "~/stores/popular";
const popularStore = usePopularStore();
const { populars } = storeToRefs(popularStore);
const { pending } = useLazyAsyncData(() => popularStore.list());

const topDownload = populars.value.slice(0, 3);
</script>

<style scoped></style>
