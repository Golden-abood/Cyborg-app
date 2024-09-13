<template>
  <div>
    <div class="flex-col justify-center items-start py-[10px] px-0">
      <div
        class="flex justify-between items-center py-[20px] px-0 border-b-[1px] border-solid border-dark"
        v-for="item in topStreams"
        :key="item?.num"
        data-aos="zoom-in-down"
      >
        <div class="flex items-center justify-around">
          <span class="text-white mr-[8px] font-bold">{{ item?.num }}</span>
          <img class="rounded-full mr-[12px]" :src="item.src" />
          <Icon
            size="25"
            name="mdi:checkbox-marked-circle"
            class="mr-3"
            color="#e75e8d"
          ></Icon>
          <p class="text-sm text-primary">{{ item?.title }}</p>
        </div>
        <Transition>
          <div class="flex flex-col">
            <BaseTheButton
              v-if="!item.follow"
              class="ml-[10px] !px-0 w-[80px]"
              title="follow"
              :class="
                item.follow
                  ? '!bg-primary !text-white'
                  : '!bg-white !text-primary'
              "
              @click="item.follow = !item.follow"
            />
            <BaseTheButton
              v-else-if="item.follow"
              class="ml-[10px] !px-0 w-[80px]"
              title="un follow"
              :class="
                item.follow
                  ? '!bg-primary !text-white'
                  : '!bg-white !text-primary'
              "
              @click="item.follow = !item.follow"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const topStreams = ref([
  {
    num: "01",
    src: "/images/avatar-01.jpg",
    title: "LahutaM",
    follow: false,
  },
  {
    num: "02",
    src: "/images/avatar-02.jpg",
    title: "Kengan",
    follow: true,
  },
  {
    num: "03",
    src: "/images/avatar-03.jpg",
    title: "Areluwa",
    follow: true,
  },
  {
    num: "04",
    src: "/images/avatar-04.jpg",
    title: "Omeg",
    follow: false,
  },
  {
    num: "05",
    src: "/images/avatar-01.jpg",
    title: "GangTeam",
    follow: true,
  },
]);
</script>

<style scoped></style>
