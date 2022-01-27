<template>
  <!-- start breadcrumb section -->
  <section class="breadcrumb">
    <div class="container-fluid p-0">
      <img :src="setting.terms_image" alt="header" />
      <div class="text_breadcrumb">
        <h2>{{ $t('terms')}}</h2>
        <p><router-link to="/">{{ $t('home')}}</router-link> > {{ $t('terms')}}</p>
      </div>
    </div>
  </section>
  <!-- End breadcrumb section -->
</template>

<script>
export default {
  name: "header_terms",
  data() {
    return {
      setting: {},
    };
  },
  methods: {
    getSetting: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_setting")
        .then((response) => response.json())
        .then((json) => {
          this.setting = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getSetting();
  },
};
</script>
