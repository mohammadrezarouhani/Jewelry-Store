<!-- @format -->

<template>
  <div class="container flex flex-col w-full h-full gap-[2rem] p-[1rem]">
    <div class="products flex flex-row">
      <div class="basis-1/5">
        <h1 class="text-2xl font-bold p-[1rem]">فیلتر ها</h1>
        <GoldFilterSet/>
      </div>

      <div class="basis-full gap-[2rem]">
        <h1 class="text-2xl font-bold p-[1rem]">محصولات</h1>
        <ul class="flex flex-row gap-[.5rem] p-[1rem]">
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products">همه محصولات</NuxtLink>
          </li>
          &gt
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products?order=desc">جدیدترین</NuxtLink>
          </li>
          &gt
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products?type=high_ordered">بیشترین سفارش</NuxtLink>
          </li>
          &gt
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products?type=high_scored">کمترین قیمت</NuxtLink>
          </li>
          &gt
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products?type=high_scored">بیشترین قیمت</NuxtLink>
          </li>
          &gt
          <li class="hover:text-amber-600 text-gray-500">
            <NuxtLink to="/products?type=high_scored">کمترین اجرت</NuxtLink>
          </li>
        </ul>
        <ProductContainer />
      </div>
    </div>
  </div>
</template>
