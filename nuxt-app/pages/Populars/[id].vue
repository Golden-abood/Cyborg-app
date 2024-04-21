<template>
  <BaseContainer class="mt-[100px] md:mt-0">
    <DetailsHeader :popular="data" />
    <BaseWrapper>
      <DetailsBox :popular="data" />
    </BaseWrapper>
    <BaseWrapper class="!mt-16">
      <BaseTheTitle title="Other Related " text="Games" />
      <DetailsRelateed />
    </BaseWrapper>
  </BaseContainer>
</template>
<script setup lang="ts">
// import { storeToRefs } from "pinia";
// import { usePopularStore } from "~/stores/popular";
// const popularStore = usePopularStore();
// const { popular } = storeToRefs(popularStore);
// const abood = popular;
// console.log(abood);
const route = useRoute();
// const { pending } = useLazyAsyncData(() => popularStore.getPopular("2"));
const { data } = await useFetch("/api/populars/" + route.params.id);
</script>

<style scoped></style>
