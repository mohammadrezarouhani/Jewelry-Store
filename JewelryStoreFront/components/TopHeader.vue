<script setup>
import SearchInput from "~/components/SearchInput.vue";
</script>

<template>
  <div class="bg-gray-900 flex flex-row h-16 w-full items-center p-4 g-2">
    <div class="flex flex-row basis-1/2 gap-2 items-center">
      <img src="logo.png" alt="..." class="w-12 h-10" />
      <SearchInput />
    </div>
    <div class="basis-1/2 ltr"></div>
  </div>
</template>
