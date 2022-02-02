<template>
  <!-- start News section -->
  <section class="work">
    <div class="container">
      <h2 class="header_text">{{ work.title }}</h2>
      <p>{{ work.text }}</p>
      <div class="row">
        <ol class="steps">
          <li class="step">
            <i class="fas fa-map-marker-alt"></i>
            <h6>{{ work.step1 }}</h6>
          </li>
          <li class="step">
            <i class="fas fa-location-arrow"></i>
            <h6>{{ work.step2 }}</h6>
          </li>
          <li class="step">
            <i class="fas fa-gem"></i>
            <h6>{{ work.step3 }}</h6>
          </li>
          <li class="step">
            <i class="fas fa-user"></i>
            <h6>{{ work.step4 }}</h6>
          </li>
        </ol>
      </div>
      <div class="row">
        <div class="screens">
          <img :src="work.image1" alt="work" />
          <img :src="work.image2" alt="work" />
          <img :src="work.image3" alt="work" />
        </div>
      </div>
    </div>
  </section>
  <!-- End News section -->
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "work",
  data() {
    return {
      work: {},
    };
  },
  methods: {
    getWork: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_work", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.work = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getWork();
  },
};
</script>
