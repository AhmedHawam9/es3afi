<template>
  <!-- start contact section -->
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="header_text">{{ $t("contact_us") }}</h2>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <iframe
          class="iframemap"
            :src="setting.map_link"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <h5>{{ $t("contact_info") }}</h5>
          <ul>
            <li>
              <i class="far fa-envelope"></i>
              <a :href="`tel:${setting.email}`">{{ setting.email }}</a>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a :href="`tel:${setting.phone}`">{{ setting.phone }}</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <a target="_blank" :href="setting.location_link">{{
                setting.address
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h4>{{ $t("communication") }}</h4>
          <form v-on:submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                id="name"
                :placeholder="$t('require_name')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                id="email"
                :placeholder="$t('require_email')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="form.subject_text"
                id="subject_text"
                class="form-control"
                :placeholder="$t('subject')"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                v-model="form.message"
                cols="30"
                rows="10"
                id="message"
                class="form-control"
                :placeholder="$t('message')"
                required
              />
            </div>
            <vue-recaptcha
              ref="invisibleRecaptcha"
              @verify="onVerify"
              @expired="onExpired"
              size="invisible"
              sitekey="6LcLEoUfAAAAAD32ZWjSk6RoXgq_Ly-LM2h3rxI2"
            >
            </vue-recaptcha>
            <button type="submit" class="btn">{{ $t("send_message") }}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End contact section -->
</template>

<script>
import axios from "axios";
import Toastify from "toastify-js";
import i18n from "@/plugins/i18n";
import { VueRecaptcha } from 'vue-recaptcha';

export default {
  name: "contact",
  data() {
    return {
      setting: {},
      form: {
        name: "",
        email: "",
        subject_text: "",
        message: "",
      },
    };
  },
  components: {
    "vue-recaptcha": VueRecaptcha,
  },
  methods: {
    getSetting: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_setting", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.setting = json.data;
          // console.log(json);
        });
    },

    submitForm() {
      
      this.$refs.invisibleRecaptcha.execute();
      axios
        .post(
          "https://esaafy.crazyideaco.com/public/api/web_contact",
          this.form
        )
        .then((res) => {
          //Perform Success Action
          Toastify({
            text: this.$t("succes_order"),
            className: "Success",
            duration: 3000,
            close: true,
            gravity: "top",
            style: {
              background: "#198754",
            },
          }).showToast();
          this.form.name = "";
          this.form.email = "";
          this.form.subject_text = "";
          this.form.message = "";
          return res;
        })
        .catch((error) => {
          // error.response.status Check status code
          Toastify({
            text: this.$t("failed_order"),
            className: "error",
            duration: 3000,
            close: true,
            gravity: "top",
            style: {
              background: "#dc3545",
            },
          }).showToast();
          return error;
        })
        .finally(() => {
          //Perform action in always
        });
    },
    onVerify: function (response) {
      console.log("Verify: " + response);
    },
    onExpired: function () {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
  },
  created: function () {
    this.getSetting();
  },
};
</script>
