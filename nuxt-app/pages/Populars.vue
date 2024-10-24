<template>
  <BaseContainer class="mt-[100px] md:mt-0">
    <DetailsHeader :popular="data?.popular" />
    <BaseWrapper>
      <DetailsBox :popular="data?.popular" />
    </BaseWrapper>
    <BaseWrapper class="!mt-16">
      <BaseTheTitle title="Other Related " text="Games" />
      <DetailsRelateed />
    </BaseWrapper>
  </BaseContainer>
</template>

<script setup lang="ts">
import type { Popular } from "~/types";
// import { usePopularStore } from "~/stores/popular";
// import { storeToRefs } from "pinia";
// const popularStore = usePopularStore();
// const { populars, popular } = storeToRefs(popularStore);
// const { pending } = useLazyAsyncData(() => popularStore.list());
// console.log(useRoute().params.id);
// const getPopular = useLazyAsyncData(() =>
//   popularStore.getPopular(useRoute().params.id)
// );
const route = useRoute();
const { data } = await useFetch("/api/populars/" + route.params.id);
</script>

<style scoped></style>
