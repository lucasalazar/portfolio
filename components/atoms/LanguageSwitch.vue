<template>
  <div class="fixed z-10 top-14 md:top-20 right-2 md:right-6">
    <div class="m-3">
      <select
        v-model="$i18n.locale"
        class="
          bg-white
          text-gray-800
          font-bold
          rounded
          border-b-2 border-a
          transition
          ease-in-out
          duration-300
          shadow-md
          py-1
          px-2
          md:py-2 md:px-5
          inline-flex
          items-center
          uppercase
        "
      >
        <option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
          class="font-bold"
        >
          {{ lang.code }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>