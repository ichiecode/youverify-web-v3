<template>
  <div :class="['w-full py-3 px-4 relative text-sm flex items-center rounded', variant]">
    <slot></slot>
    <button type="button" :class="['p-1.5 leading-none transition-colors hover:cursor-pointer font-bold border-0 box-border outline-0 m-0 select-none rounded-sm', variant]" @click="$emit('close-alert')">X</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "error",
      validator: function (value) {
        return ["error", "success"].includes(value);
      },
    },
  },
  computed: {
    variant() {
      return {
        "bg-red-50 text-pink-default": this.type === "error",
        "bg-green-50 text-green-700": this.type === "success",
      };
    },
  },
};
</script>
