<!-- @format -->

<template>
  <div
    class="card flex justify-center"
    style="direction: ltr"
  >
    <Galleria
      class="border-8 border-black"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      containerStyle="width: 100%;"
      :showItemNavigators="true"
      :showThumbnails="false"
      :autoPlay="true"
      :transitionInterval="3000"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="
            width: 100%;
            height: 30rem;
            display: block;
            border-radius: 1rem;
          "
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  images.value = [
    {
      itemImageSrc: "header-1.webp",
      alt: "...",
    },
  ];
});

const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
