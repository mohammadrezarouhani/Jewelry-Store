<!-- @format -->
<script setup>
const componentStore = useComponentStore();
const { tabIndex } = storeToRefs(componentStore);

const tabTitleList = [
  {
    name: "علاقه مندی ها",
    icon: ["fas", "heart"],
  },
  {
    name: "کامنت ها",
    icon: ["fas", "comment"],
  },
  {
    name: "سبد خرید",
    icon: ["fas", "cart-plus"],
  },
  {
    name: "ادرس ها",
    icon: ["fas", "location-dot"],
  },
  {
    name: "سفارشات",
    icon: ["fas", "suitcase"],
  },
];

function gotoTab(index){
  tabIndex.value=index
}

</script>
<template>
  <div class="flex flex-row gap-2">
    <!-- User -->
    <div
      class="flex flex-col bg-white basis-1/5 h-[30rem] p-2 w-full m-2 rounded-xl shadow-xl gap-[1rem]"
    >
      <div
        class="flex items-center p-2 gap-2 h-[3rem] w-full border cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
      >
        <span>
          <font-awesome-icon
            :icon="['fas', 'user']"
            size="lg"
          />
        </span>
        <h2 class="text-[1.1rem]">محمدرضا روحانی</h2>
        <span class="absolute left-2">
          <font-awesome-icon
            :icon="['fas', 'pen-to-square']"
            size="lg"
          />
        </span>
      </div>

      <!-- tab list -->
      <div class="w-full border flex flex-col">
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer 
          hover:text-amber-600 duration-300 ease-in-out relative
          text-gray-600"
          v-for="(title,index) in tabTitleList"
          :key="title.name"
          @click="gotoTab(index)"
        >
          <span>
            <font-awesome-icon
              :icon="title.icon"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">{{ title.name }}</h2>
        </div>
      </div>
    </div>

    <div class="basis-full">
      <component :is="componentStore.profileTabList[tabIndex]" />
    </div>
  </div>
</template>
