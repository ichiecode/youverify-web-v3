<template>
  <button
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    v-on="$listeners"
    :disabled="disabled"
    :class="[
      themeComputed,
      fontWeightComputed,
      radiusComputed,
      sizeComputed,
      `inline-flex items-center justify-center focus:outline-none flex-shrink-0`,
      { 'cursor-not-allowed': disabled },
    ]"
  >
    <slot name="prepend"></slot>
    <span>
      {{ text }}
    </span>
    <slot name="append"></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Pending",
    },
    theme: {
      type: String,
      default: "primary",
    },
    fontWeight: String,
    size: {
      type: String,
      default: "md",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: String,
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
    },
    disabled: {
      default: false,
    },
  },
  computed: {
    themeComputed() {
      switch (this.theme) {
        case "primary":
          if (this.outline) return "border border-blue";
          return "bg-blue text-white";

        case "secondary":
          if (this.outline) return "border-2 border-blue-300 text-blue-300";
          return "bg-blue-300 text-white";

        case "white":
          if (this.outline) return "border border-white text-white";
          return "bg-white text-blue-300";

        case "transparent":
          return "bg-transparent text-blue";
      }
    },
    fontWeightComputed() {
      switch (this.fontWeight) {
        case "light":
          return "font-light";
        case "medium":
          return "font-medium";
        case "semibold":
          return "font-semibold";
        case "normal":
          return "font-normal";
        default:
          return "font-medium";
      }
    },
    radiusComputed() {
      switch (this.rounded) {
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg";
        case "xl":
          return "rounded-xl";
        case "full":
          return "rounded-full";
        default:
          return "rounded";
      }
    },
    sizeComputed() {
      switch (this.size) {
        case "sm":
          return "py-2.5 px-5 text-sm";
        case "md":
          return "py-4 px-9 text-sm";
        case "lg":
          return "rounded-lg";
        case "xl":
          return "rounded-xl";
        case "none":
          return "p-0";
      }
    },
  },
};
</script>
