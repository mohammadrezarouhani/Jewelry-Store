/** @format */

import { defineStore } from "pinia";
import WishList from "~/components/WishList";
import Comments from "~/components/Comments";
import Cart from "~/components/Cart";
import Location from "~/components/Locations";
import orders from "~/components/orders";

const componentStore = defineStore('componentStore',() => {

    const profileTabList = [WishList, Comments, Cart, Location, orders];
    const tabIndex=ref(0)

    return {
        tabIndex,
        profileTabList,
    }
});

export default componentStore;
