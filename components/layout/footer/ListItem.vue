<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" class="flex item-center gap-4">
      <slot name="item" :item="item">
        <!-- Fallback content -->
        {{ item.name }}
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>