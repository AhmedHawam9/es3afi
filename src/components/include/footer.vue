<template>
  <!-- start footer section -->
  <footer>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-12 col-sm-12 logo-col d-flex flex-column align-items-sm-center align-items-lg-start justify-content-sm-center contact"
        >
          <img
            src="../../assets/media/image/logo-footer.png"
            alt="logo footer"
            class="mb-3"
          />
          <!-- <p>كل الخدمات الطبية في مكان واحد وفر ٧٥% عند اول رحلة</p> -->
          <ul class="socialicon mt-2">
            <li>
              <a target="_blank" :href="setting.facebook"
                ><i class="fab fa-facebook-f icon"></i
              ></a>
            </li>
            <li>
              <a target="_blank" :href="setting.twitter"
                ><i class="fab fa-twitter icon"></i
              ></a>
            </li>
            <li>
              <a target="_blank" :href="setting.instagram"
                ><i class="fab fa-instagram icon"></i
              ></a>
            </li>
            <!-- <li>
              <a target="_blank"
                href="https://api.whatsapp.com/send?phone=+966506661277"
                ><i class="fab fa-whatsapp icon"></i
              ></a>
            </li> -->
          </ul>
        </div>
        <div class="d-lg-flex col-lg-8 col-md-12 col-sm-12 mx-auto">
          <div class="col-lg-4 col-md-12 col-sm-12 col-links">
            <div class="h3 d-block">{{$t ('quick_links')}}</div>
            <div class="d-lg-block">
              <ul>
                <li>
                  <router-link class="hvr-float-shadow" to="#"
                    >{{$t ('contact_us')}}
                  </router-link>
                </li>
                <li>
                  <router-link class="hvr-float-shadow" to="#"
                    >{{$t ('download_app')}}</router-link
                  >
                </li>
                <li>
                  <router-link class="hvr-float-shadow" to="#"
                    >{{$t ('blog')}}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-links">
            <div class="h3 d-block">{{$t ('help')}}</div>
            <div class="d-lg-block">
              <ul>
                <li>
                  <router-link class="hvr-float-shadow" to="privacy"
                    >{{$t ('privacy')}}</router-link
                  >
                </li>
                <li>
                  <router-link class="hvr-float-shadow" to="/terms"
                    >{{$t ('terms')}}</router-link
                  >
                </li>
                <li>
                  <router-link class="hvr-float-shadow" to="faq"
                    >{{$t ('faq')}}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 p-0 col-links">
            <div class="h3 d-block">{{$t ('contact_info')}}</div>
            <ul>
              <li class="hvr-icon-buzz-out">
                <i class="far fa-clock hvr-icon"></i>
                <span>{{$t ('times_work')}} :08:00 {{$t ('am')}} - 09:00 {{$t ('pm')}}</span>
              </li>
              <li class="hvr-icon-buzz-out">
                <i class="fas fa-mobile-alt hvr-icon"></i>
                <a :href="`tel:${setting.phone}`"
                  >{{$t ('call_me')}} : {{ setting.phone }}</a
                >
              </li>
              <li class="hvr-icon-buzz-out">
                <i class="far fa-envelope hvr-icon"></i>
                <a :href="`tel:${setting.email}`">
                  {{ setting.email }} : {{$t ('contact_us_on')}}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="item text-center col-sm-6">
              <p class="my-3">
                {{$t ('rights')}} @ <span class="alina"> {{$t ('es3afi')}} </span> 2021
              </p>
            </div>
            <div class="item text-center col-sm-6">
              <a target="_blank" href="https://crazyideaco.com">
                <h6>
                  Made with
                  <img
                    class="my-heart"
                    src="../../assets/media/image/heart.svg"
                    alt="icon heart"
                  />
                  by Crazy Idea
                </h6>
              </a>
              <span>Think Out Of The Box</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- end footer section -->
</template>

<script>
export default {
  name: "contact",
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
