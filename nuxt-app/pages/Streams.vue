<template>
  <BaseContainer class="mt-[120px] md:mt-0">
    <div class="justify-between xl:flex gap-x-10">
      <BaseWrapper class="w-full xl:w-[65%] !mt-[10px]">
        <BaseTheTitle title="Featured " text="Games" />
        <FeaturedGames />
      </BaseWrapper>
      <BaseWrapper class="w-full xl:w-[35%] !mt-[10px]">
        <BaseTheTitle title="Top " text="Streamers" data-aos="zoom-in-left" />
        <StreamsTopStream data-aos="zoom-in-left" />
      </BaseWrapper>
    </div>
    <BaseWrapper class="mt-16">
      <div class="flex items-center justify-between">
        <BaseTheTitle title="Most Popular" text="Live Stream" />
        <BaseTheButton
          data-aos="zoom-in-left"
          title="Add Stream"
          class="mx-auto rounded-md mb-9 md:mx-0"
        />
        <!-- @click="dialog = true" -->
      </div>
      <StreamsMostPopular />
      <Dialog v-if="dialog" @close-dialog="closeDialog()" />
    </BaseWrapper>
  </BaseContainer>
</template>

<script setup lang="ts">
const dialog = ref(false);

const closeDialog = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped></style>
