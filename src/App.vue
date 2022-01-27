<template>
  <div id="app" class="mt-0">
    <navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import navbar from "./components/include/navbar.vue";
import Footer from "./components/include/footer.vue";
import i18n from "@/plugins/i18n";

require("./assets/js/fontawesome.min.js");
require("./assets/js/all.min.js");
require("./assets/css/fontawesome.min.css");
require("./assets/css/hover-min.css");

if (i18n.locale == 'ar') {
  require("./assets/css/main.css");
}
else if (i18n.locale == 'en') {
  require("./assets/css/main_ltr.css");
}

export default {
  name: "App",

  components: {
    navbar,
    Footer,
    // terms,
  },
};
</script>
