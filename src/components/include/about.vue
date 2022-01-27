<template>
  <!-- start about section -->
  <section class="about" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-12">
          <h5>{{ $t('welcome_about')}}</h5>
          <h2>{{ about.title }}</h2>
          <p>{{ about.text }}</p>
          <div class="btn_download">
            <a :href="setting.google_link" target="_blank" class="btn">
              {{ $t("download_app") }}
              <img
                src="../../assets/media/image/google-play.png"
                alt="google-play"
              />
            </a>
            <a :href="setting.apple_link" target="_blank" class="btn">
              {{ $t("download_app") }}
              <img
                src="../../assets/media/image/app-store.png"
                alt="app-store"
              />
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="app">
            <img :src="about.image" class="app_img" alt="app" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End about section -->
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      about: {},
      setting: {},
    };
  },
  methods: {
    getAbout: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_about")
        .then((response) => response.json())
        .then((json) => {
          this.about = json.data;
          // console.log(json);
        });
    },

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
    this.getAbout();
    this.getSetting();
  },
};
</script>
