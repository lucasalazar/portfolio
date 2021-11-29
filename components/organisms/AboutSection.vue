<template>
  <div
    class="
      flex flex-col
      md:flex-row
      justify-center
      mt-4
      items-center
      border-t-2 border-e
      md:border-0
    "
  >
    <div
      class="
        flex flex-col
        justify-center
        text-center
        px-3
        order-last
        md:order-first
      "
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <p
        class="
          montserrat
          bg-clip-text bg-gradient-to-b
          from-d
          to-e
          text-transparent text-5xl
          font-black
        "
      >
        Sobre mim
      </p>
      <p class="roboto text-b text-md font-medium md:px-5">
        Estudante de programação desde os 15 anos, comecei com Java, fiz essa
        escolha por ser a linguagem usada no meu jogo favorito à época. Logo
        depois conheci o desenvolvimento web, aprendendo o básico, apenas HTML e
        CSS. Passei um ano longe do desenvolvimento, enquanto estudava para o
        vestibular, e, aos 18, entrei na Pontifícia Universidade Católica de
        Minas Gerais, onde curso Ciência da Computação. Estagiando desde o
        primeiro semestre, procuro sempre entregar mais do que o esperado.
      </p>
    </div>
    <img
      class="w-full h-full md:h-5/12 max-w-sm md:max-w-none md:w-4/12"
      src="@/assets/images/about.png"
      alt="Imagem de sobre"
      data-aos="zoom-in-bottom"
      data-aos-duration="800"
    />
  </div>
</template>