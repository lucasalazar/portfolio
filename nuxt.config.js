import i18n from "./config/i18n";
export default {
  head: {
    title: "Luca Salazar",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Site de apresentação de Luca Salazar",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/global", "./aos/dist/aos.css"],

  plugins: [{ src: "@/plugins/aos.client", mode: "client" }],

  components: [{ path: "@/components", pathPrefix: false }],

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],

  modules: ["nuxt-lazy-load", "@nuxtjs/i18n"],

  i18n: {
    vueI18nLoader: true,
    defaultLocale: "pt",
    locales: [
      {
        code: "pt-br",
        name: "Português",
      },
      // {
      //   code: "es",
      //   name: "Español",
      // },
      {
        code: "en-us",
        name: "English",
      },
    ],
    vueI18n: i18n,
  },

  build: {
    vendor: ["aos"],
  },

  loading: {
    color: "red",
    height: "5px",
  },
};
