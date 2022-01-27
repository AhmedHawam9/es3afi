<template>
  <!-- start News section -->
  <section class="work">
    <div class="container">
      <h2 class="header_text">{{work.title}}</h2>
      <p>{{work.text}}</p>
      <div class="row">
        <ol class="steps">
          <li class="step">
            <i class="fas fa-map-marker-alt"></i>
            <h6>{{work.step1}}</h6>
          </li>
          <li class="step">
            <i class="fas fa-location-arrow"></i>
            <h6>{{work.step2}}</h6>
          </li>
          <li class="step">
            <i class="fas fa-gem"></i>
            <h6>{{work.step3}}</h6>
          </li>
          <li class="step">
            <i class="fas fa-user"></i>
            <h6>{{work.step4}}</h6>
          </li>
        </ol>
      </div>
      <div class="row">
        <div class="screens">
          <img src="../../assets/media/image/app1.jpg" alt="" />
          <img src="../../assets/media/image/app.jpg" alt="" />
          <img src="../../assets/media/image/app2.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- End News section -->
</template>


<script>
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
      fetch("https://esaafy.crazyideaco.com/public/api/get_work")
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
