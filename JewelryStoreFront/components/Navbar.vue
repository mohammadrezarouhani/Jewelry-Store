<!-- @format -->
<script setup>
const navigations = ref([
  { name: "صفحه اصلی", path: "/" },
  { name: "محصولات", path: "/products" },
  { name: "سیاست گزاری قیمت ها", path: "/prices" },
  { name: "درباره ما", path: "/about" },
]);
</script>
<template>
  <nav
    class="rtl relative flex w-full items-center justify-between bg-white text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div
      class="bg-gray-900 flex w-full flex-wrap items-center justify-between px-3"
    >
      <div
        class="relative !visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentX"
        data-te-collapse-item
      >
        <ul
          class="w-full mr-auto flex flex-col lg:flex-row text-[1rem]"
          data-te-navbar-nav-ref
        >
          <!-- Catagories -->
          <li
            class="flex gap-[.5rem] justify-center cursor-pointer items-center hover:text-white focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <span>
              <font-awesome-icon :icon="['fas', 'bars']" />
            </span>
            <span>دسته بندی</span>
          </li>

          <!-- Navigation links -->
          <li
            class="mb-4 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
            v-for="nav in navigations"
          >
            <NuxtLink
              class="block transition duration-150 ease-in-out hover:text-white focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              :to="nav.path"
            >
              {{ nav.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
