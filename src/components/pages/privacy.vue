<template>
  <div>
    <Header />
    <section class="terms">
      <div class="container">
        <!-- <p>{{privacy.text}}</p> -->
        <p v-html="privacy.text"></p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../include/header_privacy.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "privacy",
  components: {
    Header: Header,
  },
  data() {
    return {
      privacy: {},
    };
  },
  methods: {
    getprivacy: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/privacy", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.privacy = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getprivacy();
  },
};
</script>
