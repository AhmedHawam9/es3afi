<template>
  <!-- start nav section -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand w-25">
        <img src="../../assets/media/image/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-75">
          <li class="nav-item">
            <router-link
              to="/"
              active-class="active"
              class="nav-link"
              exact
              aria-current="page"
              >{{ $t("home") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/#about" active-class="active" class="nav-link">{{
              $t("about")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#services" class="nav-link" active-class="active">{{
              $t("services")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#features" class="nav-link" active-class="active">{{
              $t("features")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link" active-class="active">{{
              $t("blog")
            }}</router-link>
          </li>

          <div class="dropdown lang">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- lang -->
              <i class="fas fa-globe-americas mx-1"></i>
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  v-for="entry in languages"
                  :key="entry.title"
                  @click="changeLocale(entry.language)"
                  :iso="entry.flag"
                  v-bind:squared="false"
                >
                  <flag :iso="entry.flag" v-bind:squared="false" />
                  {{ entry.title }}
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <router-link to="/#download" class="btn download">{{ $t("download_app") }}</router-link>
      </div>
    </div>
  </nav>
  <!-- End nav section -->
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "navbar",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "eg", language: "ar", title: "Arabic" },
      ],
    };
  },

  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      // if (locale == "ar") {
      //   require("../../assets/css/main_rtl.css");
      // } else if (locale == "en") {
      //   require("../../assets/css/main_ltr.css");
      // }
      const html = document.documentElement; // returns the html tag
      html.setAttribute("lang", locale);
      // this.$forceUpdate('lang',locale);
      localStorage.setItem('lang',locale)
      location.reload();
      // console.log(locale);
    },
  },

  created() {
    // changeLocale(locale)
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", i18n.locale);
    // console.log(i18n.locale);
  },
};
</script>
