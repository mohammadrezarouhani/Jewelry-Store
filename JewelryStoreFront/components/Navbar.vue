<!-- @format -->

<template>
  <nav
    class="rtl relative flex w-full items-center justify-between bg-white text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div
      class="bg-gray-900 flex w-full flex-wrap items-center justify-between px-3"
    >
      <div class="flex items-center">
        <!-- Hamburger menu button -->
        <button
          class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentX"
          aria-controls="navbarSupportedContentX"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div
        class="relative !visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentX"
        data-te-collapse-item
      >
        <ul
          class="w-full mr-auto flex flex-col lg:flex-row text-[1rem]"
          data-te-navbar-nav-ref
        >
          <li
            class="flex gap-[.5rem] justify-center cursor-pointer items-center hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <span>دسته بندی</span>
            <font-awesome-icon :icon="['fas', 'bars']" />
          </li>

          <li
            class="mb-4 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <NuxtLink
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              to="/"
            >
              صفحه اصلی
            </NuxtLink>
          </li>
          <li
            class="mb-4 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <NuxtLink
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              to="/products"
            >
              محصولات
            </NuxtLink>
          </li>
          <li
            class="mb-4 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <NuxtLink
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              to="/prices"
            >
              سیاست گذاری قیمت ها
            </NuxtLink>
          </li>
          <li
            class="mb-2 lg:mb-0 lg:pr-2 text-[1.2rem] text-amber-200"
            data-te-nav-item-ref
          >
            <NuxtLink
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
              to="/about"
            >
              در باره ما
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
