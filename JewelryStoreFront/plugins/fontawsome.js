/** @format */

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faCaretDown,
  faCartPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faCaretDown,
  faCartPlus,
  faLocationDot,
  faInstagram,
  faLinkedin,
  faEnvelope,
  faPhone
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
