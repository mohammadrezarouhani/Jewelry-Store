<!-- @format -->
<script setup>
const carratFilter = ref([
  {
    carrat: "carrat18",
    name: "18 عیار",
    checked: false,
  },
  {
    carrat: "carrat24",
    name: "24 عیار",
    checked: false,
  },
  {
    carrat: "carrat750",
    name: "750 عیار",
    checked: false,
  },
]);
const initialBrand = [
  { brand: "pasrsis", name: "پارسیس گُلد", checked: false },
  { brand: "irshemsh", name: "ایران شمش", checked: false },
  { brand: "atlas", name: "ناب فلز اطلس", checked: false },
  { brand: "pamp", name: "PAMP", checked: false },
  { brand: "emirate", name: "Emirates Gold", checked: false },
  { brand: "royal", name: "Royal Mint", checked: false },
  { brand: "perth", name: "Perth Mint", checked: false },
  { brand: "baird", name: "Baird & Co", checked: false },
  { brand: "heraeus", name: "Heraeus", checked: false },
  { brand: "metalor", name: "Metalor", checked: false },
  { brand: "umicore", name: "Umicore", checked: false },
  { brand: "valcambi", name: "Valcambi", checked: false },
];

const brandFilter = ref(initialBrand);
const searchBrand = ref("");

watch(searchBrand,() => {
  if (searchBrand.value.trim()!='') {
    brandFilter.value = brandFilter.value.filter((item) =>
      item.name.includes(searchBrand.value)
    );
  }else{
    brandFilter.value=initialBrand
  }
});

</script>
<template>
  <div class="flex flex-col gap-[1rem] p-2.5">
    <!-- carrat filter -->
    <div class="border p-2">
      <h1 class="text-center text-xl font-bold">عیار</h1>
      <div
        class="p-1"
        v-for="carrat in carratFilter"
        :key="carrat.carrat"
      >
        <input
          type="checkbox"
          :name="carrat.carrat"
          class="cursor-pointer w-[1.2rem] h-[1.2rem] m-2 rounded shadow-gray-200"
          v-model="carrat.checked"
        />
        <label
          :for="carrat.carrat"
          class="text-l text-gray-600"
          >{{ carrat.name }}</label
        >
      </div>
    </div>

    <!-- Brand filter -->
    <div class="border p-2">
      <h1 class="text-center text-xl font-bold">برند</h1>
      <div class="p-1">
        <SearchInput v-model="searchBrand" />
      </div>
      <div
        class="p-1"
        v-for="brand in brandFilter" 
        :key="brand.brand"
      >
        <input
          type="checkbox"
          :name="brand.brand"
          class="cursor-pointer w-[1.2rem] h-[1.2rem] m-2 rounded shadow-gray-200"
          v-model="brand.checked"
        />
        <label
          :for="brand.brand"
          class="text-l text-gray-600"
          >{{ brand.name }}</label
        >
      </div>
    </div>
  </div>
</template>
