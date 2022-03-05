import Vue from 'vue'
//components registered here are global, user dont need to import them
//whereever they are needed but just call the component name

import LazyImage from "@/components/LazyImage";
import AppButton from "../components/global/AppButton.vue";


Vue.component("LazyImage", LazyImage)
Vue.component("AppButton", AppButton)
