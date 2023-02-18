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
        :img="require('./static/images/projeto1.webp')"
        title="Tower defense - Scratch"
        :text="$t('25')"
        link="https://scratch.mit.edu/projects/501917857/"
      />
      <ProjectCard
        :img="require('./static/images/projeto2.webp')"
        title="Portal de Filmes - V1"
        :text="$t('18')"
        link="https://portal-de-filmes-xi.vercel.app/"
      />
      <ProjectCard
        :img="require('./static/images/projeto3.webp')"
        title="Hot Finger Genius - Scratch"
        :text="$t('19')"
        link="https://hot-finger-genius.vercel.app/"
      />
      <ProjectCard
        :img="require('./static/images/projeto4.webp')"
        title="Verificador de Site - V1"
        :text="$t('20')"
        link="https://verificador-de-sites.vercel.app/"
      />
      <ProjectCard
        :img="require('./static/images/projeto5.webp')"
        title="Portal de Filmes - V2"
        :text="$t('21')"
        link="https://portal-de-filmes-diw.vercel.app/"
      />
      <ProjectCard
        :img="require('./static/images/projeto6.webp')"
        title="C_Like"
        :text="$t('22')"
        link="#"
      />
      <ProjectCard
        :img="require('./static/images/projeto7.webp')"
        title="Luca Mine_RPG"
        :text="$t('23')"
        link="https://github.com/lucasalazar/Luca-MineRPG"
      />
      <ProjectCard
        :img="require('./static/images/projeto8.webp')"
        title="Luca dev.finance$"
        :text="$t('24')"
        link="https://github.com/lucasalazar/luca-dev.finances"
      />
    </div>
  </div>
</template>