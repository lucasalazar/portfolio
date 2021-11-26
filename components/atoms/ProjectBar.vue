<template>
  <div class="fixed z-10 top-2 md:top-6 right-2 md:right-6">
    <div class="m-3">
      <NuxtLink
        :to="to"
        class="
          bg-white
          text-gray-800
          font-bold
          rounded
          border-b-2 border-a
          transition
          ease-in-out
          duration-300
          hover:bg-b hover:text-white
          shadow-md
          py-2
          px-5
          inline-flex
          items-center
        "
      >
        <span class="hidden md:inline mr-2">{{ text }}</span>
        <div v-html="svg"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    svg: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>