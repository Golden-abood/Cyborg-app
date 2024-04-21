<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-[25px] relative"
  >
    <div v-for="box in streams" :key="box.name" data-aos="zoom-in-down">
      <!-- <Icon
        name="material-symbols:delete-forever-rounded"
        size="10"
        color="#e75e8d"
        class="absolute w-10 h-10 p-2 bg-white rounded-full cursor-pointer top-2 right-2"
        @click="streamStore.deleteStream(box.id)"
      />

      <Icon
        name="mdi:pencil"
        size="10"
        color="#e75e8d"
        class="absolute w-10 h-10 p-2 bg-white rounded-full cursor-pointer top-2 left-2"
        @click="
          dialog = true;
          getId(box.id);
        "
      /> -->
      <img :src="box.photo" class="rounded-[23px] w-full" />
      <div class="flex justify-start items-start mt-[15px]">
        <img class="rounded-full" :src="box.src" />
        <div class="flex-col ml-[20px]">
          <div class="flex items-center justify-start text-prmary">
            <Icon
              size="20"
              name="mdi:checkbox-marked-circle"
              class="mr-[5px]"
              color="#e75e8d"
            ></Icon>
            <span class="text-sm text-primary">{{ box.name }}</span>
          </div>
          <p class="text-xl font-bold text-white">{{ box.desc }}</p>
        </div>
      </div>
    </div>
    <BaseTheButton
      title="Load More Streams"
      color="white"
      class="absolute bottom-[-8%] !left-[50%] translate-x-[-50%] w-[20%]"
    />
    <!-- <Dialog v-if="dialog" method="put" @close-dialog="closeDialog()" :id="id" /> -->
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from "pinia";
// import { useStreamStore } from "~/stores/stream";
// const streamStore = useStreamStore();
// const { streams } = storeToRefs(streamStore);

// const { pending } = useLazyAsyncData(() => streamStore.list());
const streams = [
  {
    id: 1,
    photo: "/images/stream-05.jpg",
    src: "/images/avatar-01.jpg",
    name: "KenganC",
    desc: "Just Talking With Fans",
  },
  {
    id: 2,
    photo: "/images/stream-06.jpg",
    src: "/images/avatar-02.jpg",
    name: "LunaMa",
    desc: "CS-GO 36 Hours Live Stream",
  },
  {
    id: 3,
    photo: "/images/stream-07.jpg",
    src: "/images/avatar-03.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
  {
    id: 4,
    photo: "/images/stream-08.jpg",
    src: "/images/avatar-04.jpg",
    name: "GangTm",
    desc: "Live Streaming Till Morning",
  },
  {
    id: 5,
    photo: "/images/stream-07.jpg",
    src: "/images/avatar-01.jpg",
    name: "KenganC",
    desc: "Just Talking With Fans",
  },
  {
    id: 6,
    photo: "/images/stream-06.jpg",
    src: "/images/avatar-01.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
  {
    id: 7,
    photo: "/images/stream-08.jpg",
    src: "/images/avatar-02.jpg",
    name: "LunaMa",
    desc: "CS-GO 36 Hours Live Stream",
  },
  {
    id: 8,
    photo: "/images/stream-06.jpg",
    src: "/images/avatar-01.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
];
const dialog = ref(false);
const closeDialog = () => {
  dialog.value = !dialog.value;
};
const id = ref();

const getId = (num: number) => {
  id.value = num;
};
</script>

<style scoped></style>
