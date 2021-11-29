<template>
  <footer class="bottom-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
      <path
        fill="#114B5F"
        fill-opacity="1"
        d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,138.7C672,139,768,85,864,85.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div class="bottom-0 bg-a">
      <div class="max-w-2xl mx-auto text-c py-3">
        <div
          class="
            flex flex-col
            md:flex-row md:justify-between
            items-center
            text-sm
          "
        >
          <p class="order-2 montserrat font-semibold md:order-1 mt-8 md:mt-0">
            &copy; Copyright, {{ currentYear }}.
          </p>
          <div class="order-1 md:order-2">
            <Link text="LinkedIn" url="https://www.linkedin.com" />
            <Link class="border-l" text="Github" url="https://github.com/lucasalazar" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>