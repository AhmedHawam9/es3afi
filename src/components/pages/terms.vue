<template>
  <div>
    <Header />
    <section class="terms">
      <div class="container">
        <p>{{terms.text}}</p>
        <!-- <p v-html="terms.text"></p> -->
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../include/header_terms.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "terms",
  components: {
    Header: Header,
  },
  data() {
    return {
      terms: {},
    };
  },
  methods: {
    getterms: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/terms", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.terms = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getterms();
  },
};
</script>
