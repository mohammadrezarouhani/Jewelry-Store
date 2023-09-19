/** @format */

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faCaretDown,faCartPlus,faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCaretDown,faCartPlus,faLocationDot);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the Font Awesome component globally
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
