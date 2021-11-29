<template>
  <div
    class="
      md:max-w-xl
      py-4
      px-8
      bg-a
      shadow-lg
      rounded-lg
      my-10
      transform
      duration-200
      md:hover:shadow-2xl md:hover:scale-105
    "
  >
    <div class="flex justify-center md:justify-end -mt-16">
      <img
        class="w-20 h-20 object-cover rounded-sm border-2 border-c"
        :src="img"
        :alt="`Imagem do projeto ${title}`"
      />
    </div>
    <div>
      <h2 class="montserrat text-d text-3xl font-semibold">
        {{ title }}
      </h2>
      <p class="roboto mt-2 text-c">
        {{ text }}
      </p>
    </div>
    <div class="flex justify-center md:justify-end mt-4">
      <a
        :href="link"
        rel="noreferrer noopener"
        class="robotomono text-md font-medium text-a bg-c p-1 rounded-md"
        >{{ linktext }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    linktext: {
      type: String,
      required: false,
      default: "Confira esse projeto",
    },
    img: {
      type: String,
      required: true,
    },
  },
});
</script>