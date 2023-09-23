<!-- @format -->

<template>
  <div class="container flex flex-col w-full h-full gap-[2rem] p-[1rem]">
    <ul class="flex flex-row gap-[.5rem]">
      <li class="hover:text-amber-600">
        <NuxtLink to="/products">همه محصولات</NuxtLink>
      </li>
      &gt
      <li class="hover:text-amber-600">
        <NuxtLink to="/products?order=desc">اخرین محصولات</NuxtLink>
      </li>
      &gt
      <li class="hover:text-amber-600">
        <NuxtLink to="/products?type=high_ordered">بیشترین سفارش</NuxtLink>
      </li>
      &gt
      <li class="hover:text-amber-600">
        <NuxtLink to="/products?type=high_scored">بیشترین رضایت</NuxtLink>
      </li>
    </ul>

    <div class="products flex flex-row">
      <div class="w-full basis-1/5 border border-black">
        <div class="catagory flex flex-col">
          <h1 class="block text-center text-xl"> برند ها</h1>
          <SearchInput/>
          <ul class="p-[1rem] h-10rem">
            <li class="hover:text-amber-600 text-xl ">
              
              <NuxtLink to="/products?type=high_scored">پارسیان</NuxtLink>
            </li>
            <li class="hover:text-amber-600">
              <NuxtLink to="/products?type=high_scored">پارسیان</NuxtLink>
            </li>
            <li class="hover:text-amber-600">
              <NuxtLink to="/products?type=high_scored">پارسیان</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <ProductContainer />
    </div>
  </div>
</template>
