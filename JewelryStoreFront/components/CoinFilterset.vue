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
  { brand: "baird", name: "بهار ازادی", checked: false },
  { brand: "heraeus", name: "نیم سکه بهار ازادی", checked: false },
  { brand: "metalor", name: "ربع سکه بهار ازدی", checked: false },
  { brand: "umicore", name: "سکه یک گرمی", checked: false },
  { brand: "valcambi", name: "پارسیان", checked: false },
];

const brandFilter = ref(initialBrand);
const searchBrand = ref("");

const weight = ref(0);

const value = ref(null);

watch(searchBrand, () => {
  if (searchBrand.value.trim() != "") {
    brandFilter.value = brandFilter.value.filter((item) =>
      item.name.includes(searchBrand.value)
    );
  } else {
    brandFilter.value = initialBrand;
  }
});
</script>
<template>
  <div class="flex flex-col gap-[1rem] p-2.5 ">
    <!-- carrat filter -->
    <div class="border p-2 bg-white rounded-xl shadow-xl p-2">
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
    <div class="border p-2 max-h-[30rem] overflow-y-auto overflow-x-hidden bg-white rounded-xl shadow-xl p-2">
      <h1 class="text-center text-xl font-bold">نوع</h1>
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

    <!-- weight -->
    <div class="bg-white rounded-xl shadow-xl p-2">
      <h1 class="text-center text-xl font-bold p-2">وزن(گرم)</h1>
      <InputText
        v-model.number="weight"
        class="w-full h-8"
      />
      <Slider
        v-model="weight"
        class="w-full"
      />
    </div>

    <!-- Year -->
    <div class="card flex justify-content-center bg-white rounded-xl shadow-xl p-2">
    </div>
  </div>
</template>
