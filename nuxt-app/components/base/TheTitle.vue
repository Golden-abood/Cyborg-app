<template>
  <div>
    <h2
      data-aos="zoom-in-right"
      class="mb-[30px] text-white text-[28px] md:text-[35px] font-[700]"
    >
      <span class="underline me-2"> {{ title }} </span>
      <span class="text-primary selection:text-white"> {{ text }} </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps(["title", "text"]);
</script>

<style scoped></style>
