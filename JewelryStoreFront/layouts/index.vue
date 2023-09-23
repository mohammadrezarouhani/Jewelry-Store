<template>
  <div class="relative w-full"> 
    <TopHeader />
    <Navbar/>
    <Hero/>
    <slot />

    <Footer  class="absolute bottom-[-20rem]"/>
  </div>
</template>