<template>
  <section class="box-shadow bg-blue-300 hidden md:flex items-center p-2.5 fixed left-0 bottom-6 w-120 rounded-tr rounded-br z-20">
      <div class="w-1/3 h-auto bg-transparent">
        <slot name="image"></slot>
      </div>
      <div class="py-4 ml-3 w-2/3">
        <h1 class="font-medium text-lg tracking-wide text-white mb-3 capitalize">
          {{ text }}
        </h1>
        <NuxtLink :to="link" class="text-white capitalize hover:cursor-pointer underline">
          Read more &raquo;
        </NuxtLink>
      </div>
      <div class="close-modal top-1 right-2 absolute">
        <button type="button" class="p-1.5 leading-none transition-colors text-blue-100 hover:cursor-pointer hover:bg-blue-200 font-bold border-0 box-border outline-0 m-0 select-none bg-transparent rounded-sm" @click="$emit('close-popup')">X</button>
      </div>
  </section>
</template>

<script>
export default {
  name: "NotificationPopup",
  props: {
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    }
  }
}
</script>
