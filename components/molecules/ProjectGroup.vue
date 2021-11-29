<template>
  <div class="flex flex-col justify-around items-center p-2">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        grid-flow-row
        justify-between
        gap-x-28
      "
    >
      <ProjectCard
        img="https://www.logolynx.com/images/logolynx/s_0b/0bdbd10ab2fa7096299f7c78e1ac55f5.png"
        title="Tower defense - Scratch"
        text="Meu primeiro projeto desenvolvido na
  faculdade, um jogo de tower defense feito na plataforma Scratch, pela
  disciplina de Laboratório de Iniciação a Programação. Foi usado programação em
  blocos."
        link="https://scratch.mit.edu/projects/501917857/"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto2.webp')"
        title="Portal de Filmes - V1"
        text="Meu primeiro site desenvolvido na faculdade, simulando um
                                portal real de filmes, durante a disciplina de Desenvolvimento de Interfaces Web. Foi
                                usado HTML, CSS e Bootstrap."
        link="https://portal-de-filmes-xi.vercel.app/"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto3.webp')"
        title="Hot Finger Genius - Scratch"
        text="Projeto desenvolvido na disciplina de Laboratório de
                                Iniciação a Programação, um jogo de batalha de clicks, feito na plataforma Scratch,
                                juntamente do seu site com a documentação e tutorial."
        link="https://hot-finger-genius.vercel.app/"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto4.webp')"
        title="Verificador de Site - V1"
        text="Esse projeto foi desenvolvido na disciplina de Trabalho
                                Interdisciplinar: Aplicações WEB, um site para ajudar a combater o phishing. Foi usado
                                HTML, CSS, Bootstrap e JavaScript."
        link="https://verificador-de-sites.vercel.app/"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto5.webp')"
        title="Portal de Filmes - V2"
        text="O portal anterior foi melhorado, passando a consumir a API do
                                TheMovieDB, além de ser implementada uma barra de pesquisa de filmes. Foi usado HTML,
                                CSS e Bootstrap e JavaScript."
        link="https://portal-de-filmes-diw.vercel.app/"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto6.webp')"
        title="C_Like"
        text="Projeto desenvolvido na disciplina de Introdução à Computação, calcula média de altura de um grupo de pessoas, podendo separar por sexo.
                                Foi desenvolvido o mesmo projeto em Python, C# e Java."
        link="#"
        linktext="Projeto não disponível"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto7.webp')"
        title="Luca Mine_RPG"
        text="Meu primeiro projeto publicado em Java, desenvolvido em 2018, onde trazia características do modo de jogo RPG ao Minecraft. Projeto consumia a BukkitAPI, disponibilizada pelo próprio jogo."
        link="https://github.com/lucasalazar/Luca-MineRPG"
      />
      <ProjectCard
        :img="require('@/assets/images/projeto8.webp')"
        title="Luca dev.finance$"
        text="Um projeto desenvolvido por mim, durante a Maratona Discover, promovida pela Rocketseat, de controle de finanças pessoais. O projeto, hospedado na Vercel, foi feito em HTML, CSS e JavaScript."
        link="https://github.com/lucasalazar/luca-dev.finances"
      />
    </div>
  </div>
</template>