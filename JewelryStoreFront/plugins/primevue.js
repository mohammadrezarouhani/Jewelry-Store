/** @format */

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import Galleria from "primevue/galleria";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Slider from "primevue/slider";
import InputMask from 'primevue/inputmask';
import Tree from "primevue/tree";


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("Tag", Tag);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("Slider", Slider);
  nuxtApp.vueApp.component("InputMask", InputMask);
  nuxtApp.vueApp.component("Tree", Tree);
  //other components that you need
});
