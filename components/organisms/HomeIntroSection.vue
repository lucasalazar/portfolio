<template>
  <div>
    <LanguageSwitch />
    <SwitchButton
      :text="$t('27')"
      svg='<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentcolor"
            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
          ></path>
        </svg>'
      to="proj"
    />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill="#114B5F"
        fill-opacity="1"
        d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,138.7C840,107,960,53,1080,58.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <img
        class="w-full h-full max-w-sm md:max-w-none md:h-5/12 md:w-5/12"
        src="~/static/images/home.webp"
        alt="Imagem de um desenvolvedor"
        data-not-lazy
      />
      <div class="flex flex-col justify-center text-center">
        <p class="montserrat text-a text-lg font-medium">{{ $t("1") }}</p>
        <p
          class="
            montserrat
            bg-clip-text bg-gradient-to-b
            from-b
            to-a
            text-transparent text-6xl
            font-black
          "
        >
          {{ $t("2") }}
        </p>
        <p class="roboto text-e text-md font-medium p-2 md:p-0">
          {{ $t("3") }}
        </p>
      </div>
    </div>
  </div>
</template>