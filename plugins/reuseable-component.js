import Vue from 'vue'
//components registered here are global, user dont need to import them
//whereever they are needed but just call the component name

import AppButton from "../components/global/AppButton.vue";
import Loading from "@/components/global/Loading.vue";
import LazyImage from "@/components/global/LazyImage";


Vue.component("LoadingSpinners", Loading)
Vue.component("AppButton", AppButton)
Vue.component("LazyImage", LazyImage)
