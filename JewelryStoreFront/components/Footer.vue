<!-- @format -->

<template>
  <div
    class="flex flex-col justify-center text-l items-center w-full h-inherit bg-gray-900 text-amber-200 p-[1rem]"
  >
    <div class="relative flex items-center gap-[1rem] w-full">
      <img
        src="logo.png"
        class="w-[4rem]"
      />
      <h1 class="flex justify-center items-center text-[1.2rem]">
        فروشگاه آنلاین
      </h1>
      <div class="block">
        <span class="p-[.4rem]">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </span>
        <span>تلفن تماس:</span>&nbsp;
        <span>+895562335</span>
      </div>
      <a
        href="#top"
        class="absolute left-0 p-[1rem] ml-[1rem] hover:bg-neutral-100 hover:bg-opacity-10 active:text-white"
      >
        بازگشت به بالا
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          rotation="180"
        />
      </a>
    </div>

    <div class="flex justify-center items-center w-full h-full">
      <!-- Right -->
      <div class="flex flex-col basis-1/2 flex items-center h-full gap-[2rem]">
        <h1 class="text-xl">مارا دنبال کنید !</h1>
        <div
          class="flex flex-row w-full justify-center items-center text-sm gap-[1rem]"
        >
          <a
            href=""
            class="text-white hover:text-amber-300 ease-in-out duration-300"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="w-[2.6rem] h-[2.6rem]"
            />
          </a>

          <a
            href=""
            class="text-white hover:text-amber-300 ease-in-out duration-300"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="w-[2.6rem] h-[2.6rem]"
            />
          </a>

          <a
            href=""
            class="text-white hover:text-amber-300 ease-in-out duration-300"
          >
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="w-[2.6rem] h-[2.6rem]"
            />
          </a>
        </div>
        <div class="flex flex-col w-full justify-center items-center">
          <h1 class="text-l text-white mb-[1rem]">
            با ثبت ایمیل از جدید ترین اخبار با خبر شوید !
          </h1>
          <div class="flex gap-[.6rem] w-full">
            <input
              type="email"
              placeholder="ایمیل"
              name="email"
              id="email"
              class="bg-slate-200 border-0 text-black text-l p-5 rounded w-full h-[2rem]"
            />
            <button
              type="submit"
              class="bg-amber-200 text-black rounded hover:bg-slate-200 hover:opacity-80 ease-in-out duration-300 w-[5rem] active:opacity-90"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>

      <!-- Left -->
      <div class="basis-1/2 flex flex-col items-center gap-[2rem] h-full">
        <h1 class="text-xl">روز های تحویل کالا</h1>

        <div class="w-full flex flex-col gap-[.4rem]">
          <h2
            class="text-white text-l flex justify-center hover:text-amber-200 cursor-pointer"
          >
            <span class="w-[6rem]">شنبه</span>
            <span>11:00-1:00</span>
          </h2>
          <h2
            class="text-white text-l flex justify-center hover:text-amber-200 cursor-pointer"
          >
            <span class="w-[6rem]">یکشنبه</span>
            <span>11:00-1:00</span>
          </h2>
          <h2
            class="text-white text-l flex justify-center hover:text-amber-200 cursor-pointer"
          >
            <span class="w-[6rem]">دوشنبه</span>
            <span>11:00-1:00</span>
          </h2>
          <h2
            class="text-white text-l flex justify-center hover:text-amber-200 cursor-pointer"
          >
            <span class="w-[6rem]">سه شنبه</span>
            <span>11:00-1:00</span>
          </h2>
          <h2
            class="text-white text-l flex justify-center hover:text-amber-200 cursor-pointer"
          >
            <span class="w-[6rem]">چهارشنبه</span>
            <span>11:00-1:00</span>
          </h2>
        </div>
      </div>

      <!-- Center -->
      <div class="basis-1/2 flex flex-col items-center h-full gap-[.5rem]">
        <h1 class="text-xl">ارتباط با ما</h1>
        <div class="flex flex-col w-full gap-[.8rem]">
          <div class="flex gap-[.4rem]">
            <input
              type="text"
              placeholder="نام"
              class="basis-1/4 bg-slate-200 border-0 text-black text-l p-1 rounded w-full h-[2rem]"
            />
            <input
              type="email"
              placeholder="ایمیل"
              class="basis-1/1 bg-slate-200 border-0 text-black text-l p-1 rounded w-full h-[2rem]"
            />
          </div>
          <Textarea
            placeholder="پیام شما"
            class="bg-slate-200 border-0 text-black text-xl p-5 rounded"
          ></Textarea>
          <button
            type="submit"
            class="bg-amber-200 text-black rounded hover:bg-slate-200 hover:opacity-80 ease-in-out duration-300 w-full h-[2rem] active:opacity-90"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
