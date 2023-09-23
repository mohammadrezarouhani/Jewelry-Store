
<template>
  <div class="relative overflow-hidden bg-cover bg-no-repeat" style="
      background-position: 50%;
      background-image: url('header-1.webp');
      height: 350px;
    ">
    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mb-6 text-5xl font-bold">خوش امدید!!!</h1>
          <h3 class="mb-8 text-3xl font-bold">
            با ما تجربه زیبایی را در سفارشات خود به همرا داشته باشید
          </h3>
          <NuxtLink
              class="inline-block border border-stone-50 text-[1.2rem] p-[.8rem] hover:text-amber-200 
             w-[10rem] h-[3.6rem] rounded transition duration-150 ease-in-out 
             hover:bg-neutral-100 hover:bg-opacity-10  active:text-white"
              to="/products" data-te-ripple-init
            data-te-ripple-color="light">
              محصولات
            </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
