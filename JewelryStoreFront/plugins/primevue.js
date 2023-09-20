import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from 'primevue/carousel';
import Tag from "primevue/tag";
import Galleria from "primevue/galleria";
import Card from "primevue/card";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Carousel", Carousel);
    nuxtApp.vueApp.component("Tag", Tag);
    nuxtApp.vueApp.component("Galleria", Galleria);
    nuxtApp.vueApp.component("Card",Card)
    //other components that you need
});