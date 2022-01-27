<template>
  <!-- start download app section -->
  <section class="donwload_app" id="download">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-12">
          <h2>{{download.title}}</h2>
          <p>{{download.text}}</p>
          <div class="btn_download">
            <a target="_blank" :href="setting.google_link" class="btn">
              {{ $t("download_app") }}
              <img src="../../assets/media/image/google-play.png" alt="google-play" />
            </a>
            <a target="_blank" :href="setting.apple_link" class="btn">
              {{ $t("download_app") }}
              <img src="../../assets/media/image/app-store.png" alt="app-store" />
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 position-relative">
          <img src="../../assets/media/image/shape.png" class="shape" alt="shape" />
          <img
            :src="download.image"
            class="mokeup hvr-wobble-to-top-right"
            alt="mokeup"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End download app section -->
</template>


<script>
export default {
  name: "download",
  data() {
    return {
      download: {},
      setting: {},
    };
  },
  methods: {
    getDownload: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_app")
        .then((response) => response.json())
        .then((json) => {
          this.download = json.data;
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
    this.getDownload();
    this.getSetting();
  },
};
</script>
