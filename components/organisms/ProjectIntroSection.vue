<template>
  <div>
    <ProjectBar
      text="Página inicial"
      svg='<svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"/></svg>'
      to="/"
    />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill="#114B5F"
        fill-opacity="1"
        d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,138.7C840,107,960,53,1080,58.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="flex flex-col justify-center text-center">
        <p
          class="
            
            bg-clip-text bg-gradient-to-b
            from-b
            to-a
            text-transparent text-6xl
            font-black
            py-2
          "
        >
          Projetos
        </p>
        <p class="roboto text-e text-md font-medium">
          Estou sempre explorando novas tecnologias e designs para ir além do meu conhecimento
        </p>
      </div>
      <img
        class="w-full h-full max-w-sm md:max-w-none md:h-5/12 md:w-5/12"
        src="@/assets/images/projects.png"
        alt="Imagem de um desenvolvedor"
      />
    </div>
  </div>
</template>