<script setup>

definePageMeta({
    layout: 'index'
})

</script>

<template>
    <ProductCarousel/>

    <div class="products p-[1rem]">
        <h1 class="text-2xl p-[1rem] text-center font-bold "> گالری تصاویر</h1>
        <Gallery/>
    </div>
    

    <div class="products p-[1rem]">
        <h1 class="text-2xl p-[1rem] text-center font-bold ">محصولات اخیر</h1>
        <ProductContainer/>
    </div>
</template>
