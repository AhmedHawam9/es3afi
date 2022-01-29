<template>
  <div id="app" class="mt-0">
    <div id="preloader"></div>
    <navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import navbar from "./components/include/navbar.vue";
import Footer from "./components/include/footer.vue";
// import i18n from "@/plugins/i18n";

require("./assets/js/fontawesome.min.js");
require("./assets/js/all.min.js");
require("./assets/css/fontawesome.min.css");
require("./assets/css/hover-min.css");
require("./assets/css/lang.css");
require("./assets/css/style.css");

export default {
  name: "App",

  components: {
    navbar,
    Footer,
  },

  mounted() {
    let loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });
  },
};
</script>

