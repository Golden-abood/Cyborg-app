<template>
  <div>
    <BaseContainer class="mt-[120px] md:mt-0">
      <BaseWrapper class="!mt-[10px]">
        <ProfileHeader />
      </BaseWrapper>
      <BaseWrapper>
        <BaseTheTitle title="Your Gaming " text="Library" />

        <HomeCardsLibrary
          v-for="library in data?.libraries"
          :element="library"
          data-aos="zoom-in-down"
        />
      </BaseWrapper>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/libraries");
</script>

<style scoped></style>
