<template>
  <div
    class="
      robotomono
      text-center
      select-none
      flex flex-1 flex-col
      md:flex-row
      items-center
      transition
      duration-500
      ease-in-out
      transform
      hover:-translate-y-2
      rounded-2xl
      border-2
      p-6
      hover:shadow-2xl
      border-e
      mt-3
    "
  >
    <div class="flex-1 pl-1 md:mr-16 order-last md:order-first">
      <div class="font-medium" v-html="description"></div>
    </div>
    <div
      class="
        w-2/4
        md:w-1/4
        text-wrap text-center
        flex
        text-white text-bold
        flex-col
        rounded-md
        bg-a
        justify-center
        items-center
        md:mr-10
        p-2
      "
    >
      {{ techName }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    techName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>