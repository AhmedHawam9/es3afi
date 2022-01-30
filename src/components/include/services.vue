<template>
 <!-- v-if="services.id == 1" -->
  <!-- start services section -->
  <section class="services" id="services">
    <div class="container">
      <div class="row">
        <h2 class="header_text">{{ $t('services')}}</h2>
        <!-- For loop this card services -->
        <div v-for="(service, index) in services" :key="index" class="col-lg-4 col-sm-12 mb-lg-0 mb-5">
          <div class="card card_services">
            <i v-if="index === 0" class="fas fa-ambulance"></i>
            <i v-if="index === 1" class="fas fa-crown"></i>
            <i v-if="index === 2" class="fas fa-map-marker-alt"></i>
            <div class="card-body">
              <h5 class="card-title">{{service.title}}</h5>
              <p class="card-text">{{service.text}}</p>
            </div>
          </div>
        </div>
        <!-- For loop this card services -->
      </div>
    </div>
  </section>
  <!-- End services section -->
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "services",
  data() {
    return {
      services: [],
    };
  },
  methods: {
    getServices: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_service", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.services = json.data.slice(0, 3);
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getServices();
  },
};
</script>
