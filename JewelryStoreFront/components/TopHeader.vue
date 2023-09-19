<script setup>
import SearchInput from "~/components/SearchInput.vue";
</script>

<template>
  <div class="bg-gray-900 flex flex-row justify-between h-16 w-full items-center p-4 g-2">
    <div class="flex flex-row basis-1/2 gap-2 items-center">
      <img src="logo.png" alt="..." class="w-12 h-10" />
      <SearchInput />
    </div>
    <div class="basis-1/2 ">
    <span class="p-[.8rem] text-amber-300 text-[1.4rem] float-left cursor-pointer hover:text-amber-200 flex gap-1.5 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'user']" />
        <font-awesome-icon :icon="['fas', 'caret-down']" />
      </span>

      <span class="p-[.8rem] text-amber-300 text-[1.4rem] float-left cursor-pointer hover:text-amber-200 flex gap-1.5 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
      </span>

      <span class="p-[.8rem] text-amber-300 text-[1.4rem] float-left cursor-pointer hover:text-amber-200 flex gap-1.5 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'location-dot']" />
      </span>
    </div>
  </div>
</template>
