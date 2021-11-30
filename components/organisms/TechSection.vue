<template>
  <div
    class="
      flex flex-col
      justify-center
      mt-4
      items-center
      border-t-2 border-e
      md:border-0
    "
  >
    <div class="flex flex-col justify-center text-center" data-aos="zoom-in">
      <p
        class="
          montserrat
          bg-clip-text bg-gradient-to-b
          from-b
          to-e
          text-transparent text-5xl
          font-black
          py-2
        "
      >
        {{$t('6')}}
      </p>
      <p class="roboto text-b text-md font-medium md:px-5">
        {{$t('7')}}
      </p>
    </div>
    <TechGroup class="max-w-4xl" />
  </div>
</template>