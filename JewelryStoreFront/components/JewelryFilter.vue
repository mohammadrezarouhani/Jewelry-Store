<!-- @format -->
<script setup>
// Catagory
import { NodeService } from "../services/NodeService";

const nodes = ref(null);
const selectedKey = ref(null);

onMounted(() => {
  NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

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
];

const brandFilter = ref(initialBrand);
const searchBrand = ref("");

const weight = ref(0);

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
  <div class="flex flex-col gap-[1rem] p-2.5">
    <!-- Catagory -->
    <div class="card flex flex-col justify-content-center bg-white rounded-xl shadow-xl p-2">
      <h1 class="text-center text-xl font-bold">دسته بندی</h1>
      <Tree
        v-model:selectionKeys="selectedKey"
        :value="nodes"
        :filter="true"
        filterMode="lenient"
        selectionMode="checkbox"
        class="w-full md:w-30rem"
        style="background-color: inherit; border: none;"
      ></Tree>
    </div>

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

    <!-- weight -->
    <div class="bg-white rounded-xl shadow-xl p-4">
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
  </div>
</template>
