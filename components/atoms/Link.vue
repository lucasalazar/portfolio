<template>
  <a :href="`${url}`" rel="noreferrer noopener" target="_blank">
    <span
      class="
        transition
        duration-300
        ease-in-out
        hover:text-d
        montserrat
        text-base
        font-medium
        px-2
        text-c
      "
      >{{ text }}</span
    >
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
</script>