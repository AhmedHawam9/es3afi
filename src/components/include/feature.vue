<template>
  <!-- start Feature section -->
  <section class="feature" id="features">
    <div class="container">
      <div class="row">
        <h2 class="header_text">{{ $t('features')}}</h2>
        <img src="../../assets/media/image/shapes.png" class="float" alt="shapes" />

        <!-- For loop this card feature -->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0" v-for="(feature, index) in features" :key="index">
          <div class="card card_feature hvr-wobble-skew">
            <i v-if="index === 0" class="fas fa-calendar-minus"></i>
            <i v-if="index === 1" class="fas fa-ambulance"></i>
            <i v-if="index === 2" class="fas fa-phone-alt"></i>
            <i v-if="index === 3" class="fas fa-wallet"></i>
            <div class="card-body">
              <h5 class="card-title">{{feature.title}}</h5>
              <p class="card-text">{{feature.text}}</p>
            </div>
          </div>
        </div>
        <!-- For loop this card feature -->
      </div>
    </div>
  </section>
  <!-- End Feature section -->
</template>


<script>
import i18n from "@/plugins/i18n";

export default {
  name: "feature",
  data() {
    return {
      features: [],
    };
  },
  methods: {
    getfeature: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_features", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.features = json.data.slice(0, 4);
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getfeature();
  },
};
</script>
