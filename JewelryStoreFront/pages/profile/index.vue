<!-- @format -->
<script setup>

const componentStore = useComponentStore();
const { tabIndex } = storeToRefs(componentStore);

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

      <div class="w-full border flex flex-col">
        <!-- WishList -->
        <!-- 1 -->
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'heart']"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">علاقه مندی ها</h2>
        </div>

        <!-- 1 -->
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'comment']"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">کامنت ها</h2>
        </div>

        <!-- 2 -->
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'cart-plus']"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">سبد خرید</h2>
        </div>

        <!-- 3 -->
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">ادرس ها</h2>
        </div>

        <!-- 4 -->
        <div
          class="flex items-center p-2 gap-2 h-[3rem] w-full cursor-pointer hover:text-amber-600 duration-300 ease-in-out relative"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'suitcase']"
              size="lg"
            />
          </span>
          <h2 class="text-[1.1rem]">سفارشات</h2>
        </div>
      </div>
    </div>

    <div class="basis-full">
      <component :is="componentStore.profileTabList[tabIndex]" />
    </div>
  </div>
</template>
