<template>
    <div class="card bg-gray-200" style="direction: ltr;">
        <h1 class="text-center p-[1rem] text-2xl  font-bold ">محصولات خاص</h1>
        <Carousel :value="products" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border bg-white cursor-pointer rounded-xl hover:shadow-xl hover:shadow-gray-900/10 ease-in-out duration-300 p-[1rem] m-[1rem]">
                    <div class="mb-[1rem] flex justify-center">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-[15rem] h-[10rem] rounded" />
                    </div>
                    <div class="w-full text-center">
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5 ">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    products.value = [{
            id: 2,
            name: 'حلقه طلا',
            image: 'ring.jpg',
            price: 10.99,
            inventoryStatus:'LOWSTOCK'
        },        {
            id: 3,
            name: 'گرنبد مدل گرگ و میش ',
            image: 'neckless-moon.jpg',
            price: 10.99,
            inventoryStatus:'INSTOCK'
        },        {
            id: 4,
            name: 'حلقه با زمرد بنفش',
            image: '1.jpg',
            price: 10.99,
            inventoryStatus:'LOWSTOCK'
        },        {
            id: 5,
            name: 'سکه گرمی',
            image: '1.jpg',
            price: 10.99,
            inventoryStatus:'INSTOCK'
        },        {
            id: 6,
            name: 'حلقه',
            image: 'ring.jpg',
            price: 10.99,
            inventoryStatus:'LOWSTOCK'
        },        {
            id: 7,
            name: 'حلقه مخصوص',
            image: 'ring-3.jpg',
            price: 10.99,
            inventoryStatus:'INSTOCK'
        },
    ];
});


const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>