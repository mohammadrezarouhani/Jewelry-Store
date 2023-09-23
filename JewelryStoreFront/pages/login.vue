<!-- @format -->

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      errors: "",
    };
  },

  methods: {
    toLogin(e) {
      e.preventDefault();
      console.log(this.username, this.password);
    },
  },

  mounted() {
    const input = document.getElementById("username");
    input.focus();
  },

  setup() {
    definePageMeta({
      layout: "without-header",
    });
  },
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        فروشگاه
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
          >
            ورود به سیستم
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            @submit="toLogin"
          >
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >نام کاربری
              </label>
              <input
                type="text "
                name="username"
                v-model="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="نام کاربری"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >رمز ورود</label
              >
              <input
                type="password"
                name="password"
                v-model="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="mr-3 text-sm">
                  <label
                    for="remember"
                    class="text-gray-500 dark:text-gray-300"
                    >مرا به خاطر بسپار</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
                >فراموشی رمز عبور</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              ورود
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              هنوز اکانت ندارین؟ :
              <a
                href="#"
                class="font-medium text-blue-700 hover:underline dark:text-primary-500"
              >
                تماس با پشتیبانی</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
