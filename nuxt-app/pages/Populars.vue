<template>
  <BaseContainer class="mt-[100px] md:mt-0">
    <DetailsHeader :popular="popular" />
    <BaseWrapper>
      <DetailsBox :popular="popular" />
    </BaseWrapper>
    <BaseWrapper class="!mt-16">
      <BaseTheTitle title="Other Related " text="Games" />
      <DetailsRelateed />
    </BaseWrapper>
  </BaseContainer>
</template>

<script setup lang="ts">
import { usePopularStore } from "~/stores/popular";
import { storeToRefs } from "pinia";
const popularStore = usePopularStore();
const { populars, popular } = storeToRefs(popularStore);
const { pending } = useLazyAsyncData(() => popularStore.list());
console.log(useRoute().params.id);
const getPopular = useLazyAsyncData(() =>
  popularStore.getPopular(useRoute().params.id)
);
</script>

<style scoped></style>
